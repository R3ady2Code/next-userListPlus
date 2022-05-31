import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MainContainer from '../components/MainContainer';
import User from '../components/User';
import Loader from '../components/Loader';

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

  useEffect(() => {
    dispatch(fetchUsers(sortBy, searchByName, order));
  }, [sortBy, searchByName, order]);

  const onSelectSortType = (type) => {
    dispatch(setSortBy(type));
  };

  const onChangeSearchByName = (name) => {
    dispatch(setSearchByName(name));
  };

  return (
    <MainContainer>
      <div className="users">
        <div className="usersTableContainer">
          {isLoaded ? (
            <>
              <input
                type="text"
                placeholder="Search by name"
                value={searchByName}
                autoFocus
                onChange={(e) => {
                  onChangeSearchByName(e.target.value);
                }}
              />
              <button onClick={() => dispatch(setOrder(!order))}>
                {order ? 'Сортировать по убыванию' : 'Сортировать по возрастанию'}
              </button>
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
