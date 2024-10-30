import { useLocation, useNavigate } from "react-router-dom";
import { texure } from "../assets"
import WatchlistFavoriteButtons from "./WatchlistFavoriteButtons";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/AuthContext";

type Props = {
    id: number
    type: 'movie' | 'serie'
    image: string,
    title: string,
    description: string,
    videoKey: string,
    rate: number,
    releaseDate: string,
}

const MovieSerieBannerDetails = ({ id, type, image, title, description, videoKey, rate, releaseDate }: Props) => {
    const { user } = useUserContext()
    const showDetails = {
        userId: user.id,
        id,
        type,
        title,
        image: `https://media.themoviedb.org/t/p/original${image}`,
        rate,
        releaseDate,
    }
    const navigate = useNavigate()
    const { hash } = useLocation()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        navigate(type === 'movie' ? `/movie-details/${id}` : `/serie-details/${id}`)
    };
    useEffect(() => {
        if (hash) {
            handleOpen()
        } else {
            handleClose()
        }
    }, [hash]);
    return (
        <div className="show-details-section relative">
            <div className="w-full xxl:h-[800px] xl:h-[700px] lg:h-[600px] h-[500px] relative">
                <div className="box-img w-full h-full">
                    <img src={`https://media.themoviedb.org/t/p/original/${image}`} alt={`${type} poster`} className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-0 left-0 px-16 flex flex-col items-center justify-center bg-[#00000088] w-full h-full">
                    <h1 className="text-center capitalize text-[#FFFFFF00] bg-clip-text leading-normal xl:text-[55px] lg:text-[50px] md:text-[45px] text-[35px] font-extrabold RightAnimate"
                        style={{ backgroundImage: `url(${texure})` }}>
                        {title}
                    </h1>
                    <p className="text-center mt-8 md:text-16 text-14  text-body-color max-w-[700px]">
                        {description}
                    </p>
                    <div className="my-20 flex items-center flex-wrap justify-center gap-16">
                        <WatchlistFavoriteButtons isWatchTrailer openModal={handleOpen} showDetails={showDetails} />
                    </div>
                </div>
            </div>
            {open && (
                <div className={`flex items-center justify-center fixed bg-[#00000088] top-0 left-0 w-full h-screen z-[1000]`} onClick={handleClose}>
                    <div onClick={(e) => e.stopPropagation()} className="px-16 xl:w-1/2 lg:w-[80%] xl:h-1/2 w-full h-1/2" >
                        <iframe className="w-full h-full" style={{ border: '0' }} title='Trailer'
                            src={`https://www.youtube.com/embed/watch?v=${videoKey}?autoplay=1&mute=1`}></iframe>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MovieSerieBannerDetails