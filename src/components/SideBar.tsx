import { Link, NavLink } from "react-router-dom"
import { logo } from "../assets"
import { HiXMark } from "react-icons/hi2";
import React from "react";
import SearchBar from "./SearchBar";
import { navBarLinks } from "../constants";
import ProfileSubContainer from "./ProfileSubContainer";

type PropsType = {
    toggleSideBar: boolean
    setToggleSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

const SideBar = ({ toggleSideBar, setToggleSideBar }: PropsType) => {

    return (
        <div className={`fixed top-0 left-0 z-[999999] w-screen h-screen bg-[#00000080] cursor-pointer overflow-y-scroll ${toggleSideBar ? 'visible' : 'invisible'}`}
            onClick={() => setToggleSideBar(false)}>
            <div className={`flex flex-col justify-between bg-gray-900 sm:max-w-[400px] w-full min-h-full cursor-default border-r-[1px] border-border-color transition ${toggleSideBar ? 'translate-x-0 opacity-100' : 'translate-x-[-100%] opacity-0'}`}
                onClick={(e) => e.stopPropagation()}>
                <div className="px-16">
                    <div className="pt-16 pb-30 mb-30 flex justify-between items-center border-b-1 border-border-color">
                        <Link to='/' className="py-[5px]" onClick={() => setToggleSideBar(false)}>
                            <img src={logo} alt="logo" className="h-[38px]" />
                        </Link>
                        <button className="hover:border-primary rounded-[2px] transition-colors hover:text-white text-30 text-gray-400 border-1 border-border-color"
                            onClick={() => setToggleSideBar(false)}>
                            <HiXMark />
                        </button>
                    </div>
                    <SearchBar showButton={false} setToggleSideBar={setToggleSideBar}/>
                    <ul className="mt-30 flex flex-col">
                        {navBarLinks.map(({ id, text, link }, i) => (
                            <li key={id}>
                                <NavLink to={link} onClick={() => setToggleSideBar(false)}
                                    className={`hover:text-primary transition-colors text-body-color block ${i !== 4 ? 'mb-[24px]' : ''} pb-[24px] border-b-1 border-border-color text-14 font-semibold`}>
                                    {text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-[50px]">
                    <ProfileSubContainer setToggleSideBar={setToggleSideBar} subContainer={false} />
                </div>
            </div>
        </div>
    )
}

export default SideBar