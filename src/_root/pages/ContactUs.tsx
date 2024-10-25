
import { useEffect } from "react"
import BreadCrumb from "../../components/BreadCrumb"
import { ContactForm, ContactOptions, Map } from "../../components"


const ContactUs = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
    return (
        <div>
            <BreadCrumb pageName="Contact Us" />
            <ContactForm/>
            <Map/>
            <ContactOptions/>
        </div>
    )
}

export default ContactUs