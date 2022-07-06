import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const url = `https://randomuser.me/api/?results=100&nat=us&&exc=login,registered`

const initialState = { 
    users: [],
    isLoading: true,
    error: '',
    previous: '',

}

export const fetchUsers = createAsyncThunk('users/getUsers', async (thunkAPI) => {
    try {
        const res = await fetch(url);
        const data = await res.json()

        const dataSlice = data.results.slice().map(results => {
            results.id = uuid()
            return results
        });

        return dataSlice;
        
    } catch (error) {
        console.log(error)
        return error;
    }

})


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        selectPrevious(state, action) {
            
            const previousUser = state.users.find(element => element.id === action.payload);
            state.previous = previousUser.id;
            
        },
        inputSearch(state,action) {
            let searchString = action.payload;
            state.searchTerm = searchString
        },
    },
    extraReducers(builder) {
        builder
        .addCase(fetchUsers.pending , (state, action)=> {
            state.isLoading = true;
        }) 
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = [...action.payload]
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload;
        })
    }
})

// export const localStorageMiddleware = ({ getState }) => {
//     return next => action => {
//       const result = next(action);
//       localStorage.setItem('users', JSON.stringify(getState()));
//       return result;
//     };
//   };
  
// export const reHydrateStore = () => {
//     if (localStorage.getItem('users') !== null) {
//       return JSON.parse(localStorage.getItem('users')); // re-hydrate the store
//     }
//   };

export const { selectPrevious } = usersSlice.actions;

export default usersSlice.reducer;