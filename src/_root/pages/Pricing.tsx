import { PricingPlans } from "../../components";
import BreadCrumb from "../../components/BreadCrumb"

import { useEffect } from "react";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
    
    
  })
    return (
        <div>
            <BreadCrumb pageName='Pricing Plan' />
            <PricingPlans/>
        </div>
    )
}

export default Pricing