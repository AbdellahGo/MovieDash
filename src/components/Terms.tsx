import { containerStyles, sectionStyles } from "../classes";
import { termOfUseData } from "../constants"

const Terms = () => {
    return (
        <div className={`${sectionStyles}`}>
            <div className={`${containerStyles}`}>
                <ul>
                    {termOfUseData.map(({ id, title, paragraphs, list }) => (
                        <li key={id} className="md:mb-50 mb-30">
                            <h4 className="mb-24 md:text-[28px] text-white text-[20px]">{id}. {title}</h4>
                            {paragraphs.map((paragraph, i) => (
                                <p key={i} className={`text-16 text-body-color ${i + 1 !== paragraph.length ? 'pb-16' : ''}`}>
                                    {paragraph}
                                </p>
                            ))}
                            <div className="md:mt-50 mt-30 mb-24">
                                <h4 className="mb-24 md:text-[28px] text-white text-[20px]">{list?.titleList}</h4>
                                <ul className="mb-16 pl-[32px]">
                                    {list?.options.map((option, i) => (
                                        <li key={i} className="relative text-16 text-body-color flex items-center">
                                            <span className="border-[2px] border-body-color rounded-full absolute left-[-16px]" />
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Terms