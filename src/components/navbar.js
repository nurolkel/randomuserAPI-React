import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import useNavBar from "../hooks/useNavBar";
import { Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import {NavLinkDesktop, NavLinkMobile} from "./navLink";

const Navbar = () => {
    const  previous  = useSelector(state => state.users.previous)
    const { open, toggleNavBar } = useNavBar();

    const displayPreviousDesktop = previous.map(prev => <NavLinkDesktop key={prev.id} previous={prev} />)
    const displayPreviousMobile = previous.map(prev => <NavLinkMobile key={prev.id} previous={prev} />)


    return (
        <nav className="bg-indigo-500" data-nav>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                    <Link to='/'>
                        <h2 className="text-2xl text-white p-5 md:text-4xl">Random User Book</h2>
                    </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <NavLink
                      to="/"
                      className=" hover:bg-purple-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </NavLink>
  
                    <NavLink
                      to="/dashboard"
                      className="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Dashboard
                    </NavLink>
                    {displayPreviousDesktop}
                    
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={toggleNavBar}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  {!open ? (
                 
                    <GiHamburgerMenu open={open} className="text-3xl text-white md:text-4xl relative z-[1000]" />
                  ) : (
                    <AiOutlineClose  open={open} className="text-3xl text-white md:text-4xl relative z-[1000]" />
                  )}
                </button>
              </div>
            </div>
          </div>
  
          <Transition
            show={open}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {open && 
              <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <NavLink
                    to="/"
                    className="hover:bg-purple-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Home
                  </NavLink>
  
                  <NavLink
                    to="/dashboard"
                    className="text-white hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Dashboard
                  </NavLink>
                 {displayPreviousMobile}
                </div>
              </div>
            }
          </Transition>
        </nav>
      
    );
  }

export default Navbar;

