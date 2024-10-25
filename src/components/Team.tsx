import { containerStyles, sectionStyles } from "../classes"
import { aboutUsTeam } from "../constants"

const Team = () => {
    return (
        <div className={`${sectionStyles}`}>
            <div className={`${containerStyles}`}>
                <div className="mx-auto lg:w-6/12 h-full md:mb-50 mb-30">
                    <h2 className="sm:text-50 text-40 text-white text-center">Masterminds Team</h2>
                    <p className="text-center text-body-color text-16">Your MovieDash was created by one of the best and highly experienced web developers Abdellah Gousaid.</p>
                </div>
                <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-24">
                    {aboutUsTeam.map(({id, name, job, image}) => (
                        <div key={id}>
                            <div className="w-full h-[420px] overflow-hidden rounded-[4px]">
                                <img src={image} alt={`${name} image`} className="object-cover w-full h-full transition-transform hover:scale-[1.2]" />
                            </div>
                            <div>
                                <p className="w-fit text-16 italic my-16 p-[5px] border-l-[3px] border-primary capitalize text-body-color"
                                style={{background: 'rgba(0,0,0,0) linear-gradient(270deg, rgba(229, 9, 20, 0), rgba(229, 9, 20, 0.3))'}}>{job}</p>
                                <h4 className="md:text-28 text-20">{name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team