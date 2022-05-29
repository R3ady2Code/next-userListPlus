import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import MainContainer from '../components/MainContainer';
import User from '../components/User';

function Users({ usersData }) {
  const [users, setUsers] = useState([...usersData]);

  const headerTitle = ['ID', 'Name', 'Username', 'E-mail', 'Phone', 'Website', 'Company'];
  const [sortBy, setSortBy] = useState(null);

  const [sortByOrder, setSortByOrder] = useState(false);

  useEffect(() => {
    switch (sortBy) {
      case 'ID':
        sortByCategory('id');
        break;
      case 'Name':
        sortByCategory('name');
        break;
      case 'Username':
        sortByCategory('username');
        break;
      case 'E-mail':
        sortByCategory('email');
        break;
      case 'Phone':
        sortByCategory('phone');
        break;
      case 'Website':
        sortByCategory('website');
        break;
      case 'Company':
        sortByCategory('company.name');
        break;

      default:
        break;
    }
  }, [sortBy, sortByOrder]);

  const sortByCategory = async (sort) => {
    const users = await axios.get(
      `https://jsonplaceholder.typicode.com/users?_sort=${sort}&_order=${
        sortByOrder ? 'asc' : 'desc'
      }`,
    );

    const usersData = users.data;

    setUsers(usersData);
  };

  const serachByName = async (name) => {
    const users = await axios.get(`https://jsonplaceholder.typicode.com/users?name_like=${name}`);

    const usersData = users.data;

    setUsers(usersData);
  };

  return (
    <MainContainer>
      <div className="users">
        <div className="usersTableContainer">
          <input
            type="text"
            placeholder="Search by name"
            onChange={(e) => serachByName(e.target.value)}
          />

          {!users.length ? (
            <div>Users not found</div>
          ) : (
            <>
              <button onClick={() => setSortByOrder(!sortByOrder)}>
                {sortByOrder ? 'Сортировать по убыванию' : 'Сортировать по возрастанию'}
              </button>
              <table className="usersTable">
                <thead>
                  <tr className="usersTable__header">
                    {headerTitle.map((title, i) => (
                      <td
                        key={i}
                        className={
                          sortBy === title
                            ? 'usersTable__title usersTable__title-active'
                            : 'usersTable__title'
                        }
                        onClick={() => setSortBy(title)}>
                        {title}
                      </td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <User key={user.id} {...user} />
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </MainContainer>
  );
}

export default Users;

export async function getServerSideProps() {
  const users = await axios.get(`https://jsonplaceholder.typicode.com/users`);

  const usersData = users.data;
  return {
    props: { usersData },
  };
}
