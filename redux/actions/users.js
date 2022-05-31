import axios from 'axios';

export const fetchUsers = (sortBy, searchByName) => (dispatch) => {
  try {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?_sort=${sortBy}&name_like=${searchByName}`)
      .then(({ data }) => {
        dispatch(setUsers(data));
      });
  } catch (error) {
    console.log(error.response.data);
  }
};

export function setUsers(items) {
  return { type: 'SET_USERS', payload: items };
}
