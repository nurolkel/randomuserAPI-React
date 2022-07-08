import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const NavLinkDesktop = ({ previous }) => {
    return (
        <NavLink to={`user/${previous.id}`} className="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            {previous.name.first} {previous.name.last}
        </NavLink>
    )
}

export const NavLinkMobile = ({ previous }) => {
    return (
        <NavLink to={`user/${previous.id}`} className="text-white hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            {previous.name.first} {previous.name.last}
        </NavLink>
    )
}

