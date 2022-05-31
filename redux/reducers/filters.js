const initialState = {
  sortBy: 'id',
  serachByName: ' ',
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };

    case 'SET_SEARCH_BY_NAME':
      return {
        ...state,
        serachByName: action.payload,
      };

    default:
      return state;
  }
};

export default filters;
