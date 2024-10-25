import { Link } from "react-router-dom"

type Props = {
    sectionName: string,
    link: string
}

const SectionHeader = ({sectionName, link} : Props) => {
  return (
    <div className="flex items-center justify-between px-16 my-24">
        <h5 className="capitalize xl:text-[21px] text-white text-16">{sectionName}</h5>
        <Link to={link} className="text-primary font-medium text-14">View All</Link>
    </div>
  )
}

export default SectionHeader