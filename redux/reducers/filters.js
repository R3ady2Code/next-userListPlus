const initialState = {
  sortBy: 'id',
  searchByName: '',
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };

    case 'SET_SEARCH_BY_NAME':
      return {
        ...state,
        searchByName: action.payload,
      };

    default:
      return state;
  }
};

export default filters;
