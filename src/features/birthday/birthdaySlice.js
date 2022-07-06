import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   dateValue: {
       months:'',
       days:'',
       hours:'',
       minutes:'',
       seconds:''
   }
};

const birthdaySlice = createSlice({
    name: 'birthday',
    initialState,
    reducers: {
        birthdayCountdown(state, action) {
            // const currentYear = new Date().getFullYear();
            // const addedYear = currentYear + 1
            
            // const currentTime = new Date();
            // let regex = /\d{4}/g;
            // const dateObj = new Date(action.payload);
            // const birthdayTime = dateObj.toString().replace(regex, currentYear);
            // const newBirthdayTime = dateObj.toString().replace(regex, addedYear);

            // const birthdayTimeObj = new Date(birthdayTime);
            // const newBirthdayTimeObj = new Date(newBirthdayTime);
 
            // const diff =  birthdayTimeObj < currentTime
            // ? newBirthdayTimeObj - currentTime
            // : birthdayTimeObj - currentTime

           

            const months = Math.floor(action.payload / 1000/ 60 / 60 / 24 / 30) % 12;
            const days = Math.floor(action.payload / 1000 / 60 / 60 / 24) % 30;
            const hours = Math.floor(action.payload / 1000 / 60 / 60) % 24;
            const minutes = Math.floor(action.payload / 1000 / 60) % 60;
            const seconds = Math.floor(action.payload / 1000) % 60;
            
            state.dateValue = {
                months,
                days,
                hours,
                minutes,
                seconds
            }
        }
    }
});

export const { birthdayCountdown } = birthdaySlice.actions;

export default birthdaySlice.reducer;