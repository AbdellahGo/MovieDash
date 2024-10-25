import { useEffect } from "react"
import { BreadCrumb, Companies, CompanyOverview, Team } from "../../components"

const AboutUs = () => {

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  })
  return (
    <div>
        <BreadCrumb pageName="About Us"/>
        <Team/>
        <CompanyOverview/>
        <Companies/>
    </div>
  )
}

export default AboutUs