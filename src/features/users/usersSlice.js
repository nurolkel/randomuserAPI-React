import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const url = `https://randomuser.me/api/?results=100&nat=us&&exc=login,registered`

const usersAdapter = createEntityAdapter()
export const fetchUsers = createAsyncThunk('users/getUsers', async () => {
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
    initialState: usersAdapter.getInitialState({
        loading:'idle',
        error: '',
        previous: []
    }),
    reducers: {
        selectPrevious(state, action) {
           const previousUser = state.entities[action.payload];
           state.previous = [previousUser]
        },
    },
    extraReducers(builder) {
        builder
        .addCase(fetchUsers.pending , (state, action)=> {
            state.loading = 'pending';
        }) 
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = 'fulfilled';
            usersAdapter.upsertMany(state, [...action.payload])
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = 'rejected'
            state.error = action.payload;
        })
    }
})


export const { selectPrevious } = usersSlice.actions;

export default usersSlice.reducer;

export const {
    selectAll: selectAllUsers,
    selectIds: selectAllUsersIds,
    selectById: selectUserById,
  } = usersAdapter.getSelectors((state) => state.users)