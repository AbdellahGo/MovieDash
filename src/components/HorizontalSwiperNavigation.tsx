import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"


type Props = {
    prevStyles?: string,
    nextStyles?: string,
    globalStyles?: string
    nextClasse: string,
    prevClasse: string
}
const defaultStyles = 'border-[2px] p-[5px] hover:bg-primary hover:border-primary rounded-full text-4xl transition-colors absolute top-1/2 -translate-y-1/2 z-10'
const HorizontalSwiperNavigation = ({ prevStyles, nextStyles, globalStyles = defaultStyles, nextClasse, prevClasse }: Props) => {
    return (
        <>
            <button className={`${prevClasse} left-0 ${prevStyles} ${globalStyles}`}>
                <IoIosArrowBack size={18} />
            </button>
            <button className={`${nextClasse} right-0 ${nextStyles} ${globalStyles}`}>
                <IoIosArrowForward size={18} />
            </button>
        </>
    )
}

export default HorizontalSwiperNavigation