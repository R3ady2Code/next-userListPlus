import { useRouter } from 'next/router';
import axios from 'axios';

import MainContainer from '../../components/MainContainer';
import UserCardPosts from '../../components/UserCardPosts';

const Posts = ({ postsData, page, pageCount }) => {
  const router = useRouter();

  return (
    <MainContainer>
      <div className="postsContainer">
        <div className="paginationContainer">
          <button onClick={() => router.push(`/posts?page=${page - 1}`)} disabled={page <= 1}>
            {'< Previous'}
          </button>
          <button
            onClick={() => router.push(`/posts?page=${page + 1}`)}
            disabled={page >= pageCount}>
            {'Next >'}
          </button>
        </div>
        <div className="cardUsersContainer">
          {postsData.map((userPosts) => (
            <UserCardPosts key={userPosts[0].id} {...userPosts} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
};

export default Posts;

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * 3;

  const allPosts = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

  const posts = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=20&_start=${start}&_page=${page}`,
  );

  const splitPostsToUsers = (arr) => {
    const output = [];
    let last = 0;
    for (let i = 1; i <= arr.length; i++) {
      if (arr[i]?.userId !== arr[i - 1]?.userId) {
        output.push(arr.slice(last, i));
        last = i;
      }
    }
    return output;
  };

  const pageCount = allPosts.data.length / 10 / 2;

  const postsData = splitPostsToUsers(posts.data);
  return {
    props: { postsData, page: +page, pageCount },
  };
}
