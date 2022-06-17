const initialState = {
  sortBy: 'id',
  searchByName: '',
  order: true,
  searchByTitle: '',
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

    case 'SET_SEARCH_BY_TITLE':
      return {
        ...state,
        searchByTitle: action.payload,
      };

    case 'SET_ORDER':
      return {
        ...state,
        order: action.payload,
      };

    default:
      return state;
  }
};

export default filters;
