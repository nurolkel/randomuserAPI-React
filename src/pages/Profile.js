import useBirthdayCountdown from "../hooks/useBirthdayCountdown";
import BreadCrumb from "../components/breadcrumbs";
import { format } from "date-fns";
import { AiFillMobile, AiFillPhone } from 'react-icons/ai'
import {  useSelector } from "react-redux";



const Profile = () => {
    const { users, previous } = useSelector(state => state.users);
    const previousUser = users.find(user => user.id === previous)
    const formatedDOB = format(new Date(previousUser.dob.date), "MM/dd/yyyy")
    const { dateValue } = useBirthdayCountdown(previousUser.dob.date);

    if (!previousUser) {
        return (
            <div>
                no Previous
            </div>
        )
    }

    return (
        <main className="min-h-screen  box-border">
            <BreadCrumb name={`${previousUser.name.first} ${previousUser.name.last}`} />
            <h1 className="text-center p-5 text-4xl text-purple-500">Profile Page</h1>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col p-5 items-center justify-center">
                        <h3 className="text-2xl text-purple-500 font-bold">Welcome to</h3>
                        <span className="text-lg p-2 font-semibold">{previousUser.name.first}  Page!</span>
                    </div>
                    <img src={previousUser.picture.large} alt={`${previousUser.name.first} `}  className="rounded-full max-h-[350px] object-center" />
                </div>
            </div>
            <div className="p-5 flex flex-col items-center">
                <p>My email is {previousUser.email}</p>
                <div className="p-5 flex flex-col items-center justify-center">
                    <p>Call me at:</p>
                    <div className="flex flex-row items-center py-5">
                        <AiFillMobile  className="text-2xl text-indigo-500" /> {previousUser.cell}
                    </div>
                    <div className="flex flex-row items-center py-5">
                        <AiFillPhone  className="text-2xl text-indigo-500"/> {previousUser.phone}
                    </div>
                </div>
                <p className="text-lg">I am {previousUser.age} years old and was born on {formatedDOB}</p>
            </div>
            {dateValue && 
                <div className="flex items-center justify-center flex-col w-full">
                    <div className="flex items-center justify-center flex-col w-11/12 bg-indigo-500 rounded p-5">
                        <p className="p-5 uppercase text-white">time until my birthday:</p>
                        <div className="px-1 flex flex-row justify-center items-center gap-3">
                            <div className="grid items-center justify-items-center uppercase text-white">
                                <span>Month</span>
                                <p>{dateValue.months}</p>  
                            </div>
                            <div className="grid items-center justify-items-center uppercase text-white">
                                <span>Days</span>
                                <p>{dateValue.days}</p>
                            </div>
                            <div className="grid items-center justify-items-center uppercase text-white">
                                <span>Hours</span>
                                <p>{dateValue.hours}</p>
                            </div>
                            <div className="grid items-center justify-items-center uppercase text-white">
                                <span>Minutes</span>
                                <p>{dateValue.minutes}</p>
                            </div>
                            <div className="grid items-center justify-items-center uppercase text-white">
                                <span>Seconds</span>
                                <p>{dateValue.seconds}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div className="p-5 flex flex-col justify-center items-center text-center">
                <h3 className="text-xl">My Address is:</h3>
                <div className="text-xl">
                    <p  className="p-1 text-xl">{previousUser.location.street.number} {previousUser.location.street.name} ,{previousUser.location.city}</p>
                    <p className="p-1 text-xl">{previousUser.location.state} {previousUser.location.postcode}</p>
                </div>
            </div>
        </main>
    )
}


export default Profile;