import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchTerm:'',
    value: {
        search:''
    }
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        handleInput: (state, action) => {
            state.value = action.payload;
        },
        updateSearch: (state, action) => {
            let searchString = state.value.search
            state.searchTerm = searchString
        },
    }
})

export const { handleInput, updateSearch } = searchSlice;

export default searchSlice.reducer