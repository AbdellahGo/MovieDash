import BreadCrumb from "../../components/BreadCrumb"
import Terms from "../../components/Terms";
import { useEffect } from "react";

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
    
    
  })
  return (
    <div>
      <BreadCrumb pageName='Terms Of Use' />
        <Terms/>
    </div>
  )
}

export default TermsOfUse