import { FaPlus } from "react-icons/fa6"
import { afterSlideStyles, beforeSlideStyles } from "../classes"
import { useUserContext } from "../context/AuthContext"
import { Link } from "react-router-dom"

const ProfileDetails = () => {
  const watchlistFavoriteStyles = `relative text-white border-[2px] py-16 px-[32px] bg-primary text-16 rounded-[6px] text-14 font-medium overflow-hidden border-primary  transition-colors ${afterSlideStyles} ${beforeSlideStyles}`
  const { user } = useUserContext()
  return (
    <div className="profile-details-section  py-[32px] mb-16 bg-gray-900">
      <div className="xl:px-[100px] px-16">
        <div className="flex items-center justify-between flex-wrap gap-20">
          <div className="flex items-center gap-16">
            <img src={user?.imageUrl} alt='profile image' className="rounded-full w-80 h-80 object-cover" />
            <div>
              <h6 className="text-white capitalize text-18 font-medium">{user?.username}</h6>
              <h6 className="text-body-color capitalize text-14 font-medium"> Name: <span className="text-primary">{user?.name}</span></h6>
              <span className="capitalize text-body-color text-14 font-medium">Email: <span className="text-primary">{user?.email}</span></span>
            </div>
          </div>
          <Link to={'/pricing'} className={`${watchlistFavoriteStyles}`}>
            <span className={`flex items-center gap-[8px] relative z-10 uppercase`}> Subscription <FaPlus /></span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails