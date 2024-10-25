import { cinimaPro, movieFlash, playIo, seriesAll, streamVip } from "../assets"
import { containerStyles, sectionStyles } from "../classes"

const Companies = () => {
  const companiesLogos = [streamVip, cinimaPro, movieFlash, seriesAll, playIo]
  return (
    <div className={`${sectionStyles}`}>
      <div className={`${containerStyles}`}>
        <h2 className="text-center capitalize text-white md:text-50 text-40 mb-8">Work With the Best</h2>
        <div className="grid xl:grid-cols-5 md:grid-cols-3 Mxl:gap-y-50 mt-50">
          {companiesLogos.map((logo, i) => (
            <div key={i} className={`flex items-center mx-auto`}>
              <img src={logo} alt="logo" className="w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Companies