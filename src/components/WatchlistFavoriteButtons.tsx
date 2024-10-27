import { FaPlus, FaRegHeart } from "react-icons/fa6"
import { afterSlideStyles, beforeSlideStyles } from "../classes"
import { BiMoviePlay } from "react-icons/bi"

type Props = {
    isWatchTrailer: boolean,
    favoriteStyles?: string,
    watchListStyles?: string,
    openModal?: () => void
}

const defaultStyles = 'flex items-center gap-[8px] relative z-10'

const WatchlistFavoriteButtons = ({ openModal, isWatchTrailer, favoriteStyles = defaultStyles, watchListStyles = defaultStyles }: Props) => {
    const watchlistFavoriteStyles = `relative text-white border-[2px] p-8 text-16 rounded-[6px] overflow-hidden border-body-color hover:border-primary transition-colors ${afterSlideStyles} ${beforeSlideStyles}`
    return (
        <>
            <button className={`${watchlistFavoriteStyles}`}>
                <span className={`${favoriteStyles}`}>Add to Favorite <FaRegHeart /></span>
            </button>
            <button className={`${watchlistFavoriteStyles}`}>
                <span className={`${watchListStyles}`}>Add to Watchlist <FaPlus /></span>
            </button>
            {isWatchTrailer && (
                <button className={`${watchlistFavoriteStyles}`} onClick={openModal}>
                    <span className="flex items-center gap-[8px] relative z-10">Watch Trailer <BiMoviePlay /> </span>
                </button>
            )}
        </>
    )
}

export default WatchlistFavoriteButtons