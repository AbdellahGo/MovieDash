import { containerStyles, sectionStyles } from "../../classes";
import BreadCrumb from "../../components/BreadCrumb"
import { privacyPolicyData } from "../../constants"
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
    
    
  })
  return (
    <div>
      <BreadCrumb pageName='Privacy Policy' />
      <div className={`${sectionStyles}`}>
        <div className={`${containerStyles}`}>
          <ul>
            {privacyPolicyData.map(({id, title, description}) => (
              <li key={id} className="md:mb-50 mb-30">
                <h4 className="mb-24 md:text-[28px] text-white text-[20px]">{id}. {title}</h4>
                <p className="text-16 text-body-color">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy