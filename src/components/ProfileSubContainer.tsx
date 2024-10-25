import { Link, useNavigate } from "react-router-dom";
import { INITIAL_USER, useUserContext } from "../context/AuthContext"
import { profileSubContainerLinks } from "../constants";
import { FaRegUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { useSignOutAccount } from "../lib/react-query/queries";
import { Dispatch, SetStateAction } from "react";

const ProfileSubContainer = ({ subContainer, setToggleSideBar }: { subContainer: boolean, setToggleSideBar?: Dispatch<SetStateAction<boolean>> }) => {
    const { setUser, setIsAuthenticated, user } = useUserContext()
    const { mutate: signOut } = useSignOutAccount()
    const navigate = useNavigate()


    const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        signOut()
        setIsAuthenticated(false)
        setUser(INITIAL_USER)
        navigate('/sign-in')
    }

    const icons = [<FaRegUser color="white" />,
    <FaPlus color="white" />,
    <FaRegStar color="white" />]
    return (
        <div className={`bg-gray-900
        ${subContainer ? 'overflow-hidden rounded-[8px] w-[280px] absolute top-[49px] right-0'
                : 'w-full'}`}>
            <Link to='/profile' className={`${subContainer ? 'px-20' : 'mx-16'} py-16 mb-16 border-b-1 border-border-color flex items-center gap-16`}
            onClick={() => !subContainer && setToggleSideBar && setToggleSideBar(false)}>
                <img src={user?.imageUrl} alt="profile image" className="rounded-full w-40 h-40 object-cover" />
                <div>
                    <span className="block font-medium text-14 text-white capitalize">{user?.name}</span>
                    <span className="block font-normal text-12 text-gray-400 capitalize">@{user?.username}</span>
                </div>
            </Link>
            <ul>
                {profileSubContainerLinks.map(({ id, title, link }, i) => (
                    <li key={id}>
                        <Link to={link} className={`${subContainer ? 'px-20' : 'px-16'} hover:text-primary transition py-[15px] text-white flex items-center gap-16 text-16`}
                        onClick={() => !subContainer && setToggleSideBar && setToggleSideBar(false)}>
                            {icons[i]}
                            <span className="block capitalize">{title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <button className={`${!subContainer ? 'mt-30' : 'mt-4'} hover:text-primary transition flex items-center justify-center w-full gap-[8px] py-[15px] px-20  border-t-1 border-border-color text-16`}
                onClick={handleSignOut}>
                <TbLogout color="white" />
                Logout
            </button>
        </div>
    )
}

export default ProfileSubContainer