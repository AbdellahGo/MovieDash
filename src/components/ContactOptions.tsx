import { containerStyles, sectionStyles } from "../classes"
import { MdQuestionMark, MdOutlineHeadphones } from "react-icons/md";
import { FiTag } from "react-icons/fi";
import { contactOptionsData } from "../constants";
import { boxPattern } from "../assets";
const ContactOptions = () => {
    const ContactOptionsIcons = [<MdQuestionMark />, <MdOutlineHeadphones />, <FiTag />]
    return (
        <div className={`${sectionStyles}`}>
            <div className={`${containerStyles}`}>
                <div className="lg:w-10/12 md:mb-50 mb-30">
                    <h3 className="font-medium md:text-[37px] text-[30px]">
                        To Learn More About How MovieDash Can Help You, Contact Us. We'd Be Happy To Take On The Challenge!
                    </h3>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-24">
                    {contactOptionsData.map(({ id, title, phoneNumber, email }, i) => (
                        <div key={id} className="md:p-35 p-16 bg-gray-900 relative flex gap-16 rounded-[3px]">
                            <img src={boxPattern} alt="boxPattern" className="z-0 right-0 top-0 absolute" />
                            <div className="bg-body-bg w-[60px] h-[60px] text-18 flex items-center justify-center rounded-full">
                                {ContactOptionsIcons[i]}
                            </div>
                            <div className="z-[1]">
                                <h6 className="font-medium text-18 mb-24">{title}</h6>
                                <p className="text-14 mb-4 text-body-color">
                                    Call On:
                                    <span className="text-primary"> {phoneNumber}</span>
                                </p>
                                <p className="text-16 text-body-color">
                                    Mail:
                                    <a href={`mailto:${email}`} className="text-white font-medium"> {email}</a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactOptions