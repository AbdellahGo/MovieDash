import { useRef, useState } from "react";
import { loaderIcon, logo } from "../../assets"
import { FaCheck } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import FormButton from "../../components/FormButton";
import { inputStyles, labelStyles } from "../../classes";
import { useUserContext } from "../../context/AuthContext";
import { useSignInAccount } from "../../lib/react-query/queries";
import { toast } from "react-toastify";

const SigninForm = () => {
  const navigate = useNavigate()
  const [rememberMe, setRememberMe] = useState<boolean>(false)
  const userEmail = useRef<HTMLInputElement | null>(null)
  const userPassword = useRef<HTMLInputElement | null>(null)
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext()
  const { mutateAsync: signInAccount, isPending: isCreatingSession } = useSignInAccount()

  const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const user = {
      email: userEmail.current!.value,
      password: userPassword.current!.value
    }
    const session = await signInAccount(user)

    if (!session) {
      toast.warn('Login failed. Please try again.');
      return
    }
    const isLoggedIn = await checkAuthUser()
    if (isLoggedIn) {
      navigate('/')
    } else {
      toast.warn('Login failed. Please try again.');
      return
    }
  }


  return (
    <div className="z-[100] p-50 bg-black xl:w-4/12 md:w-[50%] w-full">
      <img src={logo} alt="logo" className="mb-40 h-[35px] mx-auto" />
      <form className="form-account" onSubmit={(e) => handleSignin(e)}>
        <div className="mb-16 flex flex-col">
          <label htmlFor="#email" className={`${labelStyles}`}>Email Address</label>
          <input required ref={userEmail} type="email" id="email" className={`${inputStyles}`} />
        </div>
        <div className="mb-16 flex flex-col">
          <label htmlFor="#password" className={`${labelStyles}`}>Password</label>
          <input required ref={userPassword} type="password" id="Password" className={`${inputStyles}`} />
        </div>
        <a href="#" className="mb-16 block text-right text-16 text-primary italic font-medium">Forgot Password?</a>
        <div className="font-medium text-14 text-white flex items-center gap-8 mb-16">
          <button type="button" onClick={() => setRememberMe(prev => !prev)}
            className={`transition-all w-14 h-14 border-1 bg-gray-900 border-border-color rounded-[4px] flex items-center justify-center text-white 
              ${rememberMe ? 'bg-primary' : ''}`}>
            {rememberMe ? <FaCheck className="text-[8px]" /> : ''}
          </button>
          Remember Me
        </div>
        <FormButton classes="w-full">
          <span className={`block relative z-[100] text-center`}>
            {isUserLoading ||
              isCreatingSession ? <img src={loaderIcon} alt="loaderIcon" className="mx-auto animate-spin w-[28px]" /> : 'Sign In'}
          </span>

        </FormButton>
      </form>
      <p className="my-24 text-center font-medium text-white text-16">
        New to MovieDash?
        <Link to='/sign-up' className="text-primary ml-4">Sign up</Link>
      </p>
    </div>
  )
}

export default SigninForm