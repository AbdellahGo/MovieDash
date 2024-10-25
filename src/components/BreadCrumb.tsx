import { Link, useLocation } from "react-router-dom"
import { subContainer } from "../assets"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"

const BreadCrumb = ({ pageName }: { pageName: string }) => {
    const { pathname } = useLocation()
    const links = pathname.split('/')
    
    return (
        <div className="md:pt-[182px] md:pb-[112px] py-80 bg-gray-900 bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${subContainer})` }}>
            <div className="xl:px-[100px] px-16">
                <div className="flex items-center flex-col">
                    <h2 className="mb-8 text-white md:text-50 sm:text-[43px] text-30 ">{pageName}</h2>
                    <Breadcrumb color='body-color' className="capitalize text-16 mt-16 flex justify-center items-center">
                        {links.map((item, i) => (
                            <BreadcrumbItem key={i} isCurrentPage={i + 1 !== links.length ? false : true}>
                                {i === 0 ? (
                                    <BreadcrumbLink color='primary' as={Link} to='/' className="font-semibold">Home</BreadcrumbLink>
                                ) : i + 1 !== links.length ? (
                                    <BreadcrumbLink color='primary' as={Link} to={`${links.slice(0, i + 1).join('/')}`} className="font-semibold">{item.split('-').join(' ')}</BreadcrumbLink>
                                ) : (
                                    <BreadcrumbLink color='primary' className="font-normal">{item.split('-').join(' ')}</BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        ))}
                    </Breadcrumb>
                </div>
            </div>
        </div >
    )
}

export default BreadCrumb