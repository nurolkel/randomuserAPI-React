import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const BreadCrumbs = () => {
    const previous = useSelector(state => state.users.previous);
    const displayPrevPage = previous.map(prev => <p key={prev.id}>{prev.name.first} {prev.name.last}</p>)
    
    return (
        <div className="p-5 flex flex-row items-center gap-3 uppercase text-base">
               <Link to="/dashboard" className="underline text-blue-500">
                    Back to Dashboard
                </Link>
                |
                {displayPrevPage}
        </div>
    )
}

export default BreadCrumbs;