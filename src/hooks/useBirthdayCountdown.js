import { useState, useEffect } from "react";


const useBirthdayCountdown = (date) => {
    
    const [dateValue, setDate] = useState({});


    useEffect(()=>{
        
        function updateCountDown() {
          
            const currentYear = new Date().getFullYear();
            const addedYear = currentYear + 1
            
            const currentTime = new Date();
            let regex = /\d{4}/g;
            const dateObj = new Date(date);
            const birthdayTime = dateObj.toString().replace(regex, currentYear);
            const newBirthdayTime = dateObj.toString().replace(regex, addedYear);

            const birthdayTimeObj = new Date(birthdayTime);
            const newBirthdayTimeObj = new Date(newBirthdayTime);
 
            const diff =  birthdayTimeObj < currentTime
            ? newBirthdayTimeObj - currentTime
            : birthdayTimeObj - currentTime

            

            const months = Math.floor(diff / 1000/ 60 / 60 / 24 / 30) % 12;
            const days = Math.floor(diff / 1000 / 60 / 60 / 24) % 30;
            const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
            const minutes = Math.floor(diff / 1000 / 60) % 60;
            const seconds = Math.floor(diff / 1000) % 60;
            
            

            setDate({
                months,
                days,
                hours,
                minutes,
                seconds
            })
        }
        
        setInterval(updateCountDown, 1000);
    },[date])
    

    return  {
        dateValue
    }
}

export default useBirthdayCountdown;