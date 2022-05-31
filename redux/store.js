import thunk from 'redux-thunk';

import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';

import { rootReducer } from './reducers';

const makeStore = () => createStore(rootReducer, applyMiddleware(thunk));

export const wrapper = createWrapper(makeStore);
