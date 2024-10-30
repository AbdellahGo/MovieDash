import BreadCrumb from "../../components/BreadCrumb"
import Terms from "../../components/Terms";
import { useEffect } from "react";
import { useUserContext } from "../../context/AuthContext";

const TermsOfUse = () => {
  const { isAuthenticated } = useUserContext()
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
    
    
  })
  return (
    <div>
      {isAuthenticated && (
      <BreadCrumb pageName='Terms Of Use' />
      )}
        <Terms/>
        
    </div>
  )
}

export default TermsOfUse