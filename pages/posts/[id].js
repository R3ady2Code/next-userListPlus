import { useState, useEffect } from 'react';
import axios from 'axios';

import MainContainer from '../../components/MainContainer';
import UserPost from '../../components/UserPost';
import { Button } from '../../components/Button';
import MyInput from '../../components/MyInput';

function PostsProfile({ postsByUser, id }) {
  const sorts = ['title', 'body'];
  const [activeSort, setActiveSort] = useState(null);
  const [searchBy, setSearchBy] = useState({ title: '', body: '' });

  const [posts, setPosts] = useState(postsByUser);

  //debagging to empty search
  useEffect(() => {
    setSearchBy({ title: '', body: '' });
    setUserPosts();
  }, []);

  const setUserPosts = async (sort) => {
    const postsData = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}&_sort=${sort}&title_like=${searchBy.title}&body_like=${searchBy.body}`,
    );
    setPosts(postsData.data);
  };

  const onClickSort = (sort) => {
    setActiveSort(sort);
    setUserPosts(sort);
  };

  const onClickSearch = () => {
    setUserPosts(activeSort);
  };

  return (
    <MainContainer>
      <div className="postProfile">
        <div className="postProfile__userInfo">
          <h2>All posts by User ID{id}</h2>
          <div className="postProfile__sortBy">
            <p>Sort by: </p>
            {sorts.map((sort, i) => (
              <Button
                key={i}
                btnClass={sort === activeSort ? 'btnUI active' : 'btnUI'}
                disabled={sort === activeSort}
                onClick={() => onClickSort(sort)}>
                {sort}
              </Button>
            ))}
          </div>
          <div className="searchContainer">
            <MyInput
              type="text"
              placeholder="Search by title"
              value={searchBy.title}
              onChange={(e) => setSearchBy({ ...searchBy, title: e.target.value })}
            />
            <MyInput
              type="text"
              placeholder="Search by body"
              value={searchBy.body}
              onChange={(e) => setSearchBy({ ...searchBy, body: e.target.value })}
            />
            <Button onClick={onClickSearch}>Поиск</Button>
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
