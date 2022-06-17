import { combineReducers } from 'redux';

import filters from './filters';
import users from './users';
import posts from './posts';

export const rootReducer = combineReducers({ filters, users, posts });
