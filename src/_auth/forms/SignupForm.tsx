import { useRef, useState } from "react"
import { inputStyles, labelStyles } from "../../classes"
import { signUpFormInputs } from "../../constants"
import { FaCheck } from "react-icons/fa6"
import { Link, useNavigate } from "react-router-dom"
import FormButton from "../../components/FormButton"
import { toast } from "react-toastify"
import { useCreateUserAccount, useSignInAccount } from "../../lib/react-query/queries"
import { INewUser } from "../../types"
import { useUserContext } from "../../context/AuthContext"
import { loaderIcon } from "../../assets"
import Loader from "../../components/Loader"

const SignupForm = () => {
  const navigate = useNavigate()
  const userData = useRef<(HTMLInputElement | null)[]>([])
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false)
  const { mutateAsync: createUserAccount, isPending: isCreatingAccount } = useCreateUserAccount()
  const { mutateAsync: signInAccount, isPending: isSingInUser } = useSignInAccount()
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext()



  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (userData.current[3]?.value !== userData.current[4]?.value) {
      toast.warn("Password does not match")
      return
    }
    if (!acceptTerms) {
      toast.warn("Please accept the terms and conditions to continue.")
      return
    }
    const user: INewUser = {
      name: userData.current[0]!.value,
      username: userData.current[1]!.value,
      email: userData.current[2]!.value,
      password: userData.current[3]!.value
    }

    try {
      const newUser = await createUserAccount(user)
      if (!newUser) {
        toast.warn("Sign up failed. Please try again.")
        return;
      }
      console.log(newUser);

      const session = await signInAccount({
        email: user.email,
        password: user.password,
      });
      if (!session) {
        toast.warn("Something went wrong. Please login your new account");

        navigate("/sign-in");
        return;
      }
      const isLoggedIn = await checkAuthUser();
      if (isLoggedIn) {
        navigate('/')
      } else {
        toast.warn("Login failed. Please try again.");
        return false
      }
    } catch (error) {
      console.log(error);

    }

  }

  return (
    <div className="z-[100] p-50 bg-black xl:w-6/12 lg:w-7/12 md:w-8/12 w-full ">
      <h4 className="text-center text-28">
        Create Your Account
      </h4>
      <form className="form-account" onSubmit={handleSignUp}>
        <div className="flex flex-wrap mt-48 gap-48">
          {signUpFormInputs.map(({ id, type, label, required, minLength }, i) => (
            <div className={`input-container flex flex-col`} key={id}
              style={{ width: `${i === 0 ? '100%' : 'calc(50% - 24px)'}` }}>
              <label htmlFor={`#${id}`} className={`${labelStyles}`}>{label}</label>
              <input ref={(el) => userData.current[i] = el} minLength={minLength} required={required} type={type} id={`${id}`} className={`${inputStyles} `} />
            </div>
          ))}
        </div>
        <div className="font-medium text-14 text-white flex flex-wrap items-center gap-8 mt-48 mb-16">
          <button type="button" onClick={() => setAcceptTerms(prev => !prev)}
            className={`transition-all w-14 h-14 border-1 bg-gray-900 border-border-color rounded-[4px] flex items-center justify-center text-white 
              ${acceptTerms ? 'bg-primary' : ''}`}>
            {acceptTerms ? <FaCheck className="text-[8px]" /> : ''}
          </button>
          I've read and accept the
          <Link to='/terms-of-use' className="text-primary">terms & conditions*</Link>
        </div>
        <FormButton classes="lg:w-[50%] w-full mx-auto">
          <span className={`block relative z-[100] text-center`}>
            {isCreatingAccount ||
              isSingInUser || isUserLoading ? <Loader/> : 'Sing up'}
          </span>
        </FormButton>
      </form>
      <p className="mt-16 text-center font-medium text-white text-16">
        Already have an account?
        <Link to='/sign-in' className="text-primary ml-4">Sign in</Link>
      </p>
    </div>
  )
}

export default SignupForm