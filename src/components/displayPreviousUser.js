import { useSelector } from "react-redux";
import useBirthdayCountdown from "../hooks/useBirthdayCountdown";
import BreadCrumbs from "../components/breadcrumbs";
import { format } from "date-fns";
import { AiFillMobile, AiFillPhone } from 'react-icons/ai'
import BirthdayTimer from "./birthdayTimer";

const DisplayPreviousUser = () => {
    const previous = useSelector(state => state.users.previous);
    
    const formatedDOB = format(new Date(previous[0].dob.date), "MM/dd/yyyy")
    const { dateValue } = useBirthdayCountdown(previous[0].dob.date);

    const previousUserElement = previous.map(prev => (
        <div key={prev.id}>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col p-5 items-center justify-center">
                        <h3 className="text-2xl text-purple-500 font-bold">Welcome to</h3>
                        <span className="text-lg p-2 font-semibold">{prev.name.first}  Page!</span>
                    </div>
                    <img src={prev.picture.large} alt={`${prev.name.first} `}  className="rounded-full max-h-[350px] object-center" />
                </div>
            </div>
            <div className="p-5 flex flex-col justify-center items-center text-center">
                <h3 className="text-xl">My Address is:</h3>
                <div className="text-xl">
                    <p  className="p-1 text-xl">{prev.location.street.number} {prev.location.street.name} ,{prev.location.city}</p>
                    <p className="p-1 text-xl">{prev.location.state} {prev.location.postcode}</p>
                </div>
            </div>
            <div className="p-5 flex flex-col items-center">
                <p>My email is {prev.email}</p>
                <div className="p-5 flex flex-col items-center justify-center">
                    <p>Call me at:</p>
                    <div className="flex flex-row items-center py-5">
                        <AiFillMobile  className="text-2xl text-indigo-500" /> {prev.cell}
                    </div>
                    <div className="flex flex-row items-center py-5">
                        <AiFillPhone  className="text-2xl text-indigo-500"/> {prev.phone}
                    </div>
                </div>
                <p className="text-lg">I am {prev.age} years old and was born on {formatedDOB}</p>
            </div>
            <BirthdayTimer date={dateValue} />
        </div>
    ))

    return (
        <>
        <BreadCrumbs />
        {previousUserElement}
        </>
    )
}

export default DisplayPreviousUser;