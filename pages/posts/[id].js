import axios from 'axios';

import MainContainer from '../../components/MainContainer';
import UserPost from '../../components/UserPost';

function PostsProfile({ postsByUser, id }) {
  return (
    <MainContainer>
      <div className="postProfile">
        <h2>All posts by User ID{id}</h2>
        <div className="postProfile__postsContainer">
          {postsByUser.map((post) => (
            <UserPost key={post.id} props={post} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
}

export default PostsProfile;

export async function getServerSideProps({ query: { id } }) {
  const postsByUser = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

  return {
    props: { postsByUser: postsByUser.data, id },
  };
}
