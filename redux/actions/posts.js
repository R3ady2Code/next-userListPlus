import axios from 'axios';

export const setLoaded = (payload) => {
  return {
    type: 'SET_LOADED',
    payload,
  };
};

export const fetchPosts = (searchByTitle, order) => (dispatch) => {
  dispatch(setLoaded(false));

  const splitPostsToUsers = (arr) => {
    const output = [];
    let last = 0;
    for (let i = 1; i <= arr.length; i++) {
      if (arr[i]?.userId !== arr[i - 1]?.userId) {
        output.push(arr.slice(last, i));
        last = i;
      }
    }
    return output;
  };

  try {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?title_like=${
          searchByTitle ? searchByTitle : ''
        }`,
      )
      .then(({ data }) => {
        dispatch(setPosts(splitPostsToUsers(order ? data : data.reverse())));
        console.log(splitPostsToUsers(data));
      });
  } catch (error) {
    console.log(error.response.data);
  }
};

export function setPosts(posts) {
  return { type: 'SET_POSTS', payload: posts };
}
