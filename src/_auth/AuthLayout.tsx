import { Navigate, Outlet } from "react-router-dom"
import { subContainer } from "../assets"
import { useUserContext } from "../context/AuthContext"

const AuthLayout = () => {
const {isAuthenticated} = useUserContext()
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <section className="relative">
          <img src={subContainer} alt="subContainer" className="w-full min-h-screen absolute object-cover" />
          <div className="w-full px-12 h-screen flex justify-center items-center">
            <Outlet />
          </div>
        </section>
      )}
    </>
  )
}

export default AuthLayout