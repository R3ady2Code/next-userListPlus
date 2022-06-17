export function setSortBy(sort) {
  return { type: 'SET_SORT_BY', payload: sort };
}

export function setSearchByName(name) {
  return {
    type: 'SET_SEARCH_BY_NAME',
    payload: name,
  };
}

export function setSearchByTitle(title) {
  return {
    type: 'SET_SEARCH_BY_TITLE',
    payload: title,
  };
}

export function setOrder(type) {
  return {
    type: 'SET_ORDER',
    payload: type,
  };
}
