import { Link } from "react-router-dom";



const BreadCrumb = ({ name }) => {
    return (
        <div className="p-5 flex flex-row items-center gap-3">
               <Link to="/dashboard" className="underline text-blue-500">
                    Back to Dashboard
                </Link>
                |
                <p>{name}</p>
        </div>
    )
}

export default BreadCrumb;