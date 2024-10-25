import { africaMap } from "../assets"
import { containerStyles, sectionStyles } from "../classes"
import CountUp from 'react-countup';
import { CompanyOverviewData } from "../constants";

const CompanyOverview = () => {
    return (
        <div className={`${sectionStyles} bg-gray-900`} >
            <div className={`${containerStyles}`}>
                <div className="flex md:flex-row flex-col items-center gap-24">
                    <div className="lg:w-6/12 md:w-5/12 w-full">
                        <img src={africaMap} alt="africaMap" className="mx-auto h-[397px] object-cover" />
                    </div>
                    <div className="lg:w-6/12 md:w-7/12 w-full">
                        <h2 className="mb-8 md:text-[50px] text-[40px] text-white">Contact Us Here</h2>
                        <p className="text-body-color">
                            MovieDash is located in Africa and you can contact us at
                            <a href="mailto:hello@moviedash.com" className="text-primary">hello@moviedash.com</a>
                            for any tech-related support and assistance. We love to hear from our MovieDash users.
                        </p>
                        <div className="mt-8 flex items-center flex-wrap">
                            {CompanyOverviewData.map(({ id, title, count }, i) => (
                                <div key={id} className={`px-12 text-center w-4/12 ${i !== 0 ? 'border-l-1' : ''}`}
                                    style={i !== 0 ? { borderImageSlice: '1', borderImageSource: 'linear-gradient(to top, rgba(108, 117, 125, 0), rgba(108, 117, 125, 0.6), rgba(108, 117, 125, 0))' } : {}}>
                                    <CountUp end={count} separator="" suffix={i !== 0 ? '+' : ''} duration={2} className="text-primary font-medium text-[40px]" />
                                    <div className="text-body-color text-[19px]">{title}</div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyOverview