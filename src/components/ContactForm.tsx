import { containerStyles, inputStyles, sectionStyles } from "../classes"
import { contactFormInputs, widgetSocialMedia } from "../constants";
import { FormButton } from "../components";
import { FormEvent, useRef } from "react";
import { FaTiktok, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { toast } from "react-toastify";

const ContactForm = () => {
    const formInputs = useRef<(HTMLInputElement | HTMLTextAreaElement | null)[]>([]);
    const socialMediaIcons = [<FaFacebook />, <FaLinkedin />, <FaGithub />, <FaTiktok />]
    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        toast.success('Your message has been sent successfully.');
        formInputs.current.forEach((input) => {
            if (input) {
                input.value = '';
            }
        });
    }

  return (
<div className={`${sectionStyles}`}>
                <div className={`${containerStyles}`}>
                    <div className="flex Mlg:gap-[48px] justify-between flex-wrap">
                        <div className="lg:w-8/12 w-full">
                            <div className="md:mb-50 mb-30">
                                <h2 className="mb-8 md:text-[50px] text-[40px]">Create With Us</h2>
                                <p className="text-16 text-body-color">To learn more about how MovieDash can help you, contact us.</p>
                            </div>
                            <form className="contact-form" onSubmit={handleSubmitForm}>
                                <div className="flex flex-wrap gap-x-24">
                                    {contactFormInputs.map(({ id, type, placeholder, maxLength, required }, i) => (
                                        <div key={id} className={`input-container Mmd:w-full lg:mb-48 mb-24`}>
                                            {i + 1 !== contactFormInputs.length ? (
                                                <input ref={(e) => formInputs.current[i] = e} type={type} placeholder={placeholder} maxLength={maxLength} required={required}
                                                    className={`${inputStyles} w-full rounded-[4px]`} />
                                            ) : (
                                                <textarea ref={(e) => formInputs.current[i] = e} placeholder={placeholder} required={required}
                                                    className={`${inputStyles} w-full rounded-[4px] h-[150px] resize-none`} />
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <FormButton classes="normal-case">
                                    <div className={` gap-16 relative z-[100]`}>
                                        <span>Send Message</span>
                                    </div>
                                </FormButton>
                            </form>
                        </div>
                        <div className="lg:w-3/12 w-full">
                            <div className="pb-24 mb-24 border-b-1 border-border-color">
                                <h5 className="md:text-[21px] text-16 mb-8 text-white">Come See Us</h5>
                                <span className="text-16 text-body-color">
                                    Pixel Media Solutions, LLC 45 West Lane, Suite 12B Los Angeles, CA 90210
                                </span>
                            </div>
                            <div className="pb-24 mb-24 border-b-1 border-border-color">
                                <h5 className="md:text-[21px] text-16 mb-8 text-white">Get In Touch</h5>
                                <a className="text-primary" href="mailto:support@moviedash.com">support@moviedash.com</a>
                                <p className="text-body-color">+(33) 635-678-949</p>
                            </div>
                            <div className="flex flex-col">
                                <h5 className="md:text-[21px] text-16 text-white">Follow Us</h5>
                                <ul className="mt-24 flex gap-12 items-center">
                                    {widgetSocialMedia.map(({ id, link }, i) => (
                                        <li key={id}>
                                            <a href={link} target="_blank" className="text-16 hover:bg-primary hover:translate-y-[-10px] transition flex items-center justify-center w-35 h-35 bg-gray-800 rounded-full">
                                                {socialMediaIcons[i]}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default ContactForm