import { useState, useEffect } from 'react';
import axios from 'axios';

import MainContainer from '../../components/MainContainer';
import UserPost from '../../components/UserPost';

function PostsProfile({ postsByUser, id }) {
  const sorts = ['title', 'body'];
  const [activeSort, setActiveSort] = useState(null);

  const [posts, setPosts] = useState(postsByUser);

  const onClickSort = (sort) => {
    setActiveSort(sort);
  };

  useEffect(() => {
    if (activeSort === 'title') {
      setPosts(
        [...posts].sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
          if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        }),
      );
    }
    if (activeSort === 'body') {
      setPosts(
        [...posts].sort((a, b) => {
          if (a.body.toLowerCase() < b.body.toLowerCase()) return -1;
          if (a.body.toLowerCase() > b.body.toLowerCase()) return 1;
        }),
      );
    }
  }, [activeSort]);

  return (
    <MainContainer>
      <div className="postProfile">
        <div className="postProfile__userInfo">
          <h2>All posts by User ID{id}</h2>
          <div className="postProfile__sortBy">
            <p>Sort by: </p>
            {sorts.map((sort) => (
              <button
                className={sort === activeSort ? 'active' : ''}
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

export async function getServerSideProps({ query: { id } }) {
  const postsByUser = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

  return {
    props: { postsByUser: postsByUser.data, id },
  };
}
