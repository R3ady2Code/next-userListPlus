import { combineReducers } from 'redux';

import filters from './filters';
import users from './users';

export const rootReducer = combineReducers({ filters, users });
