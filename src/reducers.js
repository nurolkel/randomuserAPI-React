import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from './features/users/usersSlice';
import birthdayReducer from './features/birthday/birthdaySlice';
import searchReducer from './features/search/searchSlice';

const rootReducer = combineReducers({
    users: usersReducer,
    birthday: birthdayReducer,
});

export default rootReducer;