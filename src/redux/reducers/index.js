import { combineReducers } from 'redux';
import userSlice from '../slices/reducer/userSlice';
import users from './users';

/*
  COMBINE REDUCERS TO HAVE INDEPENDENT STATE FOR EACH CATEGORY;
*/

const rootReducer = combineReducers({
  users: users,
  userSlice: userSlice
});

export default rootReducer;