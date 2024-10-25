import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"
import BreadCrumb from "../../components/BreadCrumb"
import { faqsData } from "../../constants"
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useEffect } from "react";
import { containerStyles, sectionStyles } from "../../classes";

const FAQ = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        

    })
    return (
        <div>
            <BreadCrumb pageName="FAQ" />
            <div className={`${sectionStyles}`}>
                <div className={`${containerStyles}`}>
                    <Accordion defaultIndex={0} allowToggle>
                        {faqsData.map(({ id, title, paragraphs, steps }) => (
                            <AccordionItem key={id} className="mb-30 bg-gray-900 rounded-[5px]">
                                {({ isExpanded }) => (
                                    <>
                                        <h4 className="p-30">
                                            <AccordionButton>
                                                <Box as="span" className="flex-1 text-left md:text-[28px] text-20">
                                                    {title}
                                                </Box>
                                                <Box as='span' className="flex text-16 items-center justify-center w-[35px] h-[35px] bg-primary">
                                                    {isExpanded ? <FaMinus /> : <FaPlus />}
                                                </Box>
                                            </AccordionButton>
                                        </h4>
                                        <AccordionPanel className="text-16 text-body-color p-30 border-t-1"
                                            style={{ borderImageSource: 'linear-gradient(270deg, rgba(38, 37, 37, 0) -1.25%, #6c757d 43.69%, rgba(38, 37, 37, 0) 99.08%)', borderImageSlice: '1' }}>
                                            {paragraphs}
                                            <ul className="pl-30 flex flex-col gap-[5px] mt-16 ">
                                                {steps?.map((item, i) => (
                                                    <li key={i} className="relative">
                                                        <span className="absolute border-[3px] border-body-color rounded-full top-[10px] left-[-15px]" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default FAQ