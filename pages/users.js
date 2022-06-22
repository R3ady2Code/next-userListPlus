import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MainContainer from '../components/MainContainer';
import User from '../components/User';
import Loader from '../components/Loader';
import { Button } from '../components/Button';
import MyInput from '../components/MyInput';

import { setSortBy, setSearchByName, setOrder } from '../redux/actions/filters';
import { fetchUsers } from '../redux/actions/users';

function Users() {
  const dispatch = useDispatch();
  const items = useSelector(({ users }) => users.items);
  const isLoaded = useSelector(({ users }) => users.isLoaded);
  const { sortBy, searchByName, order } = useSelector(({ filters }) => filters);
  const headerTitle = [
    { title: 'ID', key: 'id' },
    { title: 'Name', key: 'name' },
    { title: 'Username', key: 'username' },
    { title: 'E-mail', key: 'email' },
    { title: 'Phone', key: 'phone' },
    { title: 'Website', key: 'website' },
    { title: 'Company', key: 'company.name' },
  ];

  const [nameForSearch, setNameForSearch] = useState('');

  //debagging to empty search
  useEffect(() => {
    setNameForSearch('');
    onSearchByName();
  }, []);

  useEffect(() => {
    dispatch(fetchUsers(sortBy, searchByName, order));
  }, [sortBy, searchByName, order]);

  const onSelectSortType = (type) => {
    dispatch(setSortBy(type));
  };

  const onChangeSearchByName = (e) => {
    e.preventDefault();
    setNameForSearch(e.target.value);
    if (!e.target.value) {
      dispatch(setSearchByName(''));
    } else {
      onSearchByName();
    }
  };

  const onSearchByName = () => {
    dispatch(setSearchByName(nameForSearch));
  };

  const onKeyDownSearchByName = (e) => {
    e.key === 'Enter' && onSearchByName();
  };

  return (
    <MainContainer>
      <div className="users">
        <div className="searchContainer">
          <MyInput
            type="text"
            placeholder="Search by name"
            value={nameForSearch}
            onKeyPress={(e) => onKeyDownSearchByName(e)}
            onChange={onChangeSearchByName}
          />

          <Button onClick={() => dispatch(setOrder(!order))}>
            {order ? 'Сортировать по убыванию' : 'Сортировать по возрастанию'}
          </Button>
        </div>
        <div className="usersTableContainer">
          {isLoaded ? (
            <>
              {!items.length ? (
                'Users not found'
              ) : (
                <table className="usersTable">
                  <thead>
                    <tr className="usersTable__header">
                      {headerTitle.map((sorter, i) => (
                        <td
                          key={i}
                          className={
                            sortBy === sorter.key
                              ? 'usersTable__title usersTable__title-active'
                              : 'usersTable__title'
                          }
                          onClick={() => onSelectSortType(sorter.key)}>
                          {sorter.title}
                        </td>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((user) => (
                      <User key={user.id} {...user} />
                    ))}
                  </tbody>
                </table>
              )}
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </MainContainer>
  );
}

export default Users;
