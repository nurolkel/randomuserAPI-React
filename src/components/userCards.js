import { useDispatch } from "react-redux"
import { selectPrevious } from '../features/users/usersSlice'

export default function UserCard({ first,last, picture, id }) {
    const dispatch = useDispatch();


    return (
        <div className="flex flex-col items-center justify-center w-full bg-violet-600 rounded-lg space-y-8 hover:bg-indigo-500 focus:bg-indigo-500" id={id}>
            <img src={picture} alt={`${first}-${last}`} className="rounded-full -my-7 object-center" />
            <h3 className="text-2xl text-white font-medium p-5 my-6">{first} {last}</h3>
        </div>
    )
}