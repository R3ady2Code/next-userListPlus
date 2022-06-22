import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MainContainer from '../../components/MainContainer';
import UserCardPosts from '../../components/UserCardPosts';
import UserPost from '../../components/UserPost';
import Loader from '../../components/Loader';
import MyInput from '../../components/MyInput';
import { Button } from '../../components/Button';

import { setSearchByTitle, setOrder } from '../../redux/actions/filters';
import { fetchPosts } from '../../redux/actions/posts';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(({ posts }) => posts.items);
  const isLoaded = useSelector(({ posts }) => posts.isLoaded);
  const { searchByTitle, order } = useSelector(({ filters }) => filters);

  const [titleForSearch, setTitleForSearch] = useState('');

  const itemsPerPage = searchByTitle === '' ? 2 : 5;
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  useEffect(() => {
    setCurrentPage(1);
    dispatch(fetchPosts(searchByTitle, order));
  }, [searchByTitle, order]);

  //debagging to empty search
  useEffect(() => {
    setTitleForSearch('');
    onSearchByTitle();
  }, []);

  const onChangeSearchByTitle = (e) => {
    e.preventDefault();
    setTitleForSearch(e.target.value);
    if (!e.target.value) {
      dispatch(setSearchByTitle(''));
    } else {
      onSearchByTitle();
    }
  };

  const onSearchByTitle = () => {
    dispatch(setSearchByTitle(titleForSearch.toLowerCase()));
  };

  const onKeyDownSearchBytitle = (e) => {
    e.key === 'Enter' && onSearchByTitle();
  };

  const renderPosts = () => {
    return searchByTitle === ''
      ? posts
          .slice(indexOfFirstItem, indexOfLastItem)
          .map((userPosts, i) => <UserCardPosts key={i} {...userPosts} />)
      : posts
          .flat()
          .slice(indexOfFirstItem, indexOfLastItem)
          .map((userPosts, i) => <UserPost key={i} link props={userPosts} />);
  };

  return (
    <MainContainer>
      <div className="postsContainer">
        <div className="searchContainer">
          <MyInput
            type="text"
            placeholder="Search by all posts title"
            value={titleForSearch}
            onKeyPress={(e) => onKeyDownSearchBytitle(e)}
            onChange={onChangeSearchByTitle}
          />
          <Button onClick={() => dispatch(setOrder(!order))}>
            {order ? 'Сортировать по убыванию' : 'Сортировать по возрастанию'}
          </Button>
        </div>
        <div className="paginationContainer">
          {pageNumbers.map((numb, i) => (
            <button
              className={currentPage === numb ? 'active' : ''}
              onClick={() => setCurrentPage(numb)}
              key={i}>
              {numb}
            </button>
          ))}
        </div>
        {isLoaded ? (
          <div className="cardUsersContainer">
            {!posts.length ? 'Posts not found' : renderPosts()}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </MainContainer>
  );
};

export default Posts;
