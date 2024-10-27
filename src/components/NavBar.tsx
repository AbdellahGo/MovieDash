import { Link, NavLink } from "react-router-dom"
import { logo } from "../assets"
import { navBarLinks } from "../constants"
import SearchBar from "./SearchBar"
import { FaUserPlus } from "react-icons/fa";
import ProfileSubContainer from "./ProfileSubContainer";
import { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import SideBar from "./SideBar";

const NavBar = () => {
    const navBar = useRef<HTMLElement | null>(null)
    const [toggleSideBar, setToggleSideBar] = useState(false)
    const [toggleSubContainer, setToggleSubContainer] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          if (navBar.current) {
            if (window.scrollY > 0) {
              navBar.current.style.position = 'fixed';
              navBar.current.style.top = '0';
            } else {
              navBar.current.style.position = 'relative';
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
return (
    <nav className="blur-background w-full relative z-[1000]" ref={navBar}>
        <div className="xl:px-[100px] px-16 py-18">
            <div className="flex justify-between items-center">
                <Link to='/'>
                    <img src={logo} alt="logo" className="h-[38px]" />
                </Link>
                <ul className="xl:flex hidden xl:pr-[32px] xl:gap-[45px]">
                    {navBarLinks.map(({ id, text, link }) => (
                        <li key={id}>
                            <NavLink to={link} className="hover:text-primary transition text-body-color xl:py-[17px] xl:px-[15px] text-14 font-semibold">
                                {text}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="relative xl:flex hidden items-center gap-[15px]">
                    <SearchBar showButton={true} />
                    <button className="block p-12 rounded-full border-1 border-border-color bg-black"
                        onClick={() => setToggleSubContainer(prev => !prev)}>
                        <FaUserPlus size={16} />
                    </button>
                    {toggleSubContainer && (
                        <ProfileSubContainer subContainer={true} />
                    )}
                </div>
                <button className="xl:hidden block"
                    onClick={() => setToggleSideBar(true)}>
                    <FiMenu className="text-30 text-gray-400" />
                </button>
            </div>
            <SideBar toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar} />
        </div>
    </nav>
)
}

export default NavBar