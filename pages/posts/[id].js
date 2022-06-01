import { useState } from 'react';
import axios from 'axios';

import MainContainer from '../../components/MainContainer';
import UserPost from '../../components/UserPost';

function PostsProfile({ postsByUser, id }) {
  const sorts = ['title', 'body'];
  const [activeSort, setActiveSort] = useState(null);

  const [posts, setPosts] = useState(postsByUser);

  const onClickSort = async (sort) => {
    setActiveSort(sort);
    const postsData = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}&_sort=${sort}`,
    );
    setPosts(postsData.data);
  };

  return (
    <MainContainer>
      <div className="postProfile">
        <div className="postProfile__userInfo">
          <h2>All posts by User ID{id}</h2>
          <div className="postProfile__sortBy">
            <p>Sort by: </p>
            {sorts.map((sort, i) => (
              <button
                key={i}
                className={sort === activeSort ? 'active' : ''}
                disabled={sort === activeSort}
                onClick={() => onClickSort(sort)}>
                {sort}
              </button>
            ))}
          </div>
        </div>
        <div className="postProfile__postsContainer">
          {posts.map((post) => (
            <UserPost key={post.id} props={post} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
}

export default PostsProfile;

export async function getServerSideProps({ query: { id, sortBy } }) {
  const postsByUser = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}&_sort=${sortBy}`,
  );

  return {
    props: { postsByUser: postsByUser.data, id },
  };
}
