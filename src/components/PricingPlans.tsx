import { FormButton } from "../components";
import { pricingPlanData } from "../constants"
import { FaXmark,FaCheck } from "react-icons/fa6";
import { BsTriangleFill } from "react-icons/bs";
import { containerStyles, sectionStyles } from "../classes";


const PricingPlans = () => {
    return (
        <div className={`${sectionStyles}`}>
            <div className={`${containerStyles}`}>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-24">
                    {
                        pricingPlanData.map(({ id, type, pricingDetails, originalPrice, price, period }) => (
                            <div key={id} className="bg-gray-900 relative xl:h-fit">
                                <div className="absolute bg-primary top-[-2px] left-[-1px] z-[-1]" style={{ width: 'calc(100% + 4px)', height: 'calc(100% + 2px)', background: 'linear-gradient(180deg, rgb(229, 9, 20) 0, rgba(229, 9, 20, 0) 100%)' }} />
                                {id === 2 && (
                                    <div className="p-8 bg-primary text-center text-white">
                                        <span>Save 20%</span>
                                    </div>
                                )}
                                <div className="sm:py-60 py-40 sm:px-[45px] px-30 bg-body-bg">
                                    <h4 className="text-20 text-body-color capitalize">{type}</h4>
                                    {id !== 1 && (
                                        <div className="mt-30">
                                            {originalPrice && (
                                                <span className="mr-4 text-body-color text-38 line-through">${originalPrice}</span>
                                            )}
                                            <span className="text-38 text-primary">${price} </span>
                                            <span className="text-body-color text-18">/ {period}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="sm:p-[45px] p-[30px]">
                                    <ul className="mb-30 flex flex-col gap-40">
                                        {pricingDetails.map(({ id, isAvailable, desc }) => (
                                            <li key={id} className="flex items-center pl-[26px] relative transition-transform hover:translate-x-[10px]">
                                                <span className="absolute left-[-13px]">
                                                    {isAvailable ? <FaCheck className="text-primary" /> : <FaXmark />}
                                                </span>
                                                <span className="font-medium text-18 text-body-color">
                                                    {desc}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-40">
                                        <FormButton classes="w-full">
                                            <div className={`gap-16 relative z-[100]`}>
                                                <span>Select {type}</span>
                                                <BsTriangleFill className="text-12 mt-[-3px] ml-16 inline-block rotate-90" />
                                            </div>
                                        </FormButton>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PricingPlans