import axios from 'axios';

export const setLoaded = (payload) => {
  return {
    type: 'SET_LOADED',
    payload,
  };
};

export const fetchUsers = (sortBy, searchByName) => (dispatch) => {
  dispatch(setLoaded(false));
  try {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users?_sort=${sortBy}&name_like=${
          searchByName ? searchByName : ''
        }`,
      )
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
