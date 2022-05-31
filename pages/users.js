import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MainContainer from '../components/MainContainer';
import User from '../components/User';

import { setSortBy, setSearchByName } from '../redux/actions/filters';
import { fetchUsers } from '../redux/actions/users';

function Users() {
  const dispatch = useDispatch();
  const items = useSelector(({ users }) => users.items);
  const { sortBy, searchByName } = useSelector(({ filters }) => filters);
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
    dispatch(fetchUsers(sortBy, searchByName));
  }, [sortBy, searchByName]);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const onChangeSearchByName = useCallback((name) => {
    dispatch(setSearchByName(name));
  }, []);

  return (
    <MainContainer>
      <div className="users">
        <div className="usersTableContainer">
          <input
            type="text"
            placeholder="Search by name"
            onChange={(e) => {
              onChangeSearchByName(e.target.value);
            }}
          />
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
        </div>
      </div>
    </MainContainer>
  );
}

export default Users;
