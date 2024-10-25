import { Link } from "react-router-dom"
import { logo } from "../assets"
import { aboutCompany, footerBottomList, moviesToWatch, quickLinks, widgetSocialMedia } from "../constants"
import { IoIosArrowForward } from "react-icons/io";
import { FaTiktok, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import React from "react";
import { toast } from "react-toastify";
const Footer = () => {
    const footerListHeadStyles = 'text-18 font-medium capitalize text-white mb-20'
    const footerLiStyles = 'flex items-center transition-transform hover:translate-x-[10px]'
    const footerLinkStyles = 'ml-16 transition-colors text-14 text-body-color hover:text-primary'
    const footerIconStyles = 'font-bold text-primary text-10'

    const socialMediaIcons = [<FaFacebook />, <FaLinkedin />, <FaGithub />, <FaTiktok />]

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        toast.success('You have successfully subscribed.');
    }

    return (
        <footer className="bg-gray-900 w-full min-h-fit z-10">
            <div className="xl:px-[100px] px-16">
                <div className="md:py-[90px] py-[32px] flex flex-wrap">
                    <div className="xxl:w-3/12 xl:w-4/12 lg:w-6/12 w-full xxl:mb-0 mb-[48px]">
                        <Link to='/' className="mb-40 block">
                            <img src={logo} alt="logo" className="h-[38px]" />
                        </Link>
                        <p className="text-14 mb-24 text-body-color">Email us: <span className="text-white font-bold">abdellahgoy40@gmail.com</span></p>
                        <p className="text-14 mb-4 text-body-color uppercase">customer services</p>
                        <p className="text-20 font-semibold text-white">+(33) 635-678-949</p>
                    </div>
                    <div className="xxl:w-2/12 xl:w-4/12 lg:w-6/12 w-full xxl:mb-0 mb-[48px]">
                        <h4 className={`${footerListHeadStyles}`}>Quick Links</h4>
                        <ul className="mb-16">
                            {quickLinks.map(({ id, title, link }, i) => (
                                <li key={id} className={`${i !== 3 ? 'mb-16' : ''} ${footerLiStyles}`}>
                                    <IoIosArrowForward className={`${footerIconStyles}`} />
                                    <Link to={link} className={`${footerLinkStyles}`} >{title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="xxl:w-2/12 xl:w-4/12 lg:w-6/12 w-full xxl:mb-0 mb-[48px]">
                            <h4 className={`${footerListHeadStyles}`}>Movies to watch</h4>
                        <ul className="mb-16">
                            {moviesToWatch.map(({ id, title, link }, i) => (
                                <li key={id} className={`${i !== 3 ? 'mb-16' : ''} ${footerLiStyles}`}>
                                    <IoIosArrowForward className={`${footerIconStyles}`} />
                                    <Link to={link} className={`${footerLinkStyles}`} >{title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="xxl:w-2/12 xl:w-4/12 lg:w-6/12 w-full lg:mb-0 mb-[48px]">
                        <h4 className={`${footerListHeadStyles}`}>About company</h4>
                        <ul className="mb-16">
                            {aboutCompany.map(({ id, title, link }, i) => (
                                <li key={id} className={`${i !== 3 ? 'mb-16' : ''} ${footerLiStyles}`}>
                                    <IoIosArrowForward className={`${footerIconStyles}`} />
                                    <Link to={link} className={`${footerLinkStyles}`} >{title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="xxl:w-3/12 xl:w-6/12 lg:w-6/12 w-full">
                        <h4 className={`${footerListHeadStyles}`}>Subscribe Newsletter</h4>
                        <form className="mt-24 mb-16 flex" onSubmit={handleSubmitForm}>
                            <input required type="email" placeholder="Email*" className="rounded-l-[4px] flex-1 subscribe bg-black transition px-16 py-12 text-14 text-body-color placeholder:text-body-color" />
                            <button className='border-1 overflow-hidden relative block uppercase px-[32px] py-16 rounded-r-[4px] border-primary bg-primary text-white text-14 lading-[16px] font-medium
                                after:transition-all after:absolute after:rounded-l-[4px] after:h-full after:w-0 after:left-0 after:top-0 after:bg-[#b70710] hover:after:w-[100%]
                                before:transition-all before:absolute before:rounded-r-[4px] before:h-full before:w-0 before:right-0 before:top-0 before:bg-[#b70710] hover:before:w-[100%]'>
                                <span className={`block relative z-[100] text-center`}>
                                    Subscribe
                                </span>
                            </button>
                        </form>
                        <div className="mt-48 flex items-center">
                            <span className="text-14 text-body-color mr-8">Follow Me:</span>
                            <ul className="flex gap-12 items-center">
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
                <div className="md:py-50 py-32 border-t-1 border-border-color">
                    <div>
                        <ul className="mb-[15px] flex gap-[30px] flex-wrap items-center">
                            {footerBottomList.map(({ id, title, link }) => (
                                <li key={id}>
                                    <Link to={link} className={`text-16 text-body-color`}>
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <p className="text-14 text-body-color">
                            &copy; 2024 <span className="text-primary">AbdellahGX</span>. All Rights Reserved. All videos and shows on this platform are trademarks
                            of, and all related images and content are the property of,
                            <span className="text-primary">AbdellahGX</span>. Duplication and copy of this is strictly prohibited. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer