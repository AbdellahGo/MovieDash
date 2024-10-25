import { ReactNode, useEffect, useState } from "react"
import { FaStar, FaStarHalf } from "react-icons/fa6"

type Props = {
    rate: number,
    starBoxStyles?: string,
    iconStyles?: string,
}


const defaulticonStyles = 'text-warning-rgb text-16'
const defaultStarBoxStyles = 'flex gap-[5px] items-center'
const StarRating = ({ rate, iconStyles = defaulticonStyles, starBoxStyles = defaultStarBoxStyles }: Props) => {
    const [starRating, setStarRating] = useState<ReactNode[]>([])

    const createRatingStars = () => {
        const half = rate / 2 % 1
        for (let i = 1; i <= Math.floor(rate / 2); i++) {
            setStarRating(prev => [...prev, <FaStar />])
            if (half > 0 && i === Math.floor(rate / 2)) {
                setStarRating(prev => [...prev, <FaStarHalf />])
            }
        }
    }
    useEffect(() => {
        setStarRating([])
        createRatingStars()
    }, [])

    return (
        <ul className={`${starBoxStyles}`}>
            {starRating.map((icon, i) => (
                <li key={i} className={`${iconStyles}`}>
                    {icon}
                </li>
            ))}
        </ul>
    )
}

export default StarRating