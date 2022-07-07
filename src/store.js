import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './features/users/usersSlice';
import { reHydrateStore, localStorageMiddleware } from "./features/users/usersSlice";
import storageSession from 'redux-persist/lib/storage/session'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage: storageSession
// }

// const persistedReducer = persistReducer(persistConfig, usersReducer);

export const store = configureStore({
    reducer:{
        users: usersReducer
    }
})

