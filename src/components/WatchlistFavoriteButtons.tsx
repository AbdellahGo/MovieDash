import { FaPlus, FaRegHeart } from "react-icons/fa6"
import { afterSlideStyles, beforeSlideStyles } from "../classes"
import { BiMoviePlay } from "react-icons/bi"
import { IShowTypes } from "../types"
import Loader from "./Loader"
import { useUserContext } from "../context/AuthContext"

type Props = {
    isWatchTrailer: boolean,
    favoriteStyles?: string,
    watchListStyles?: string,
    trailerStyles?: string,
    openModal?: () => void
    showDetails: IShowTypes
}

const defaultStyles = 'flex justify-center items-center gap-[8px] relative z-10'

const WatchlistFavoriteButtons = ({ showDetails, openModal, isWatchTrailer, favoriteStyles = defaultStyles, watchListStyles = defaultStyles, trailerStyles = defaultStyles }: Props) => {
    const {
        isRemovedFromWatchlist, isAddedToWatchlist, handleAddOrRemoveShowInWatchlist, handleAddOrRemoveShowInFavorite, isAddedToFavorite, isRemovedFromFavorite, allFavoritesIds, allWatchlistIds } = useUserContext()
    const watchlistFavoriteStyles = `w-[180px] h-[45px] relative text-white border-[2px]  p-8 text-16 rounded-[6px] overflow-hidden border-body-color hover:border-primary transition-colors ${afterSlideStyles} ${beforeSlideStyles}`
    return (
        <>
            <button className={`${watchlistFavoriteStyles} ${(allFavoritesIds as number[]).includes(showDetails.id) ? 'bg-primary border-none' : ''}`} disabled={isAddedToFavorite || isRemovedFromFavorite}
                onClick={() => handleAddOrRemoveShowInFavorite(showDetails)}>
                <span className={`${favoriteStyles}`}>
                    {isAddedToFavorite || isRemovedFromFavorite ? <Loader smallLoader /> : (<>Add to Favorite <FaRegHeart /></>)}
                </span>
            </button>
            <button className={`${watchlistFavoriteStyles} ${(allWatchlistIds as number[]).includes(showDetails.id) ? 'bg-primary border-none' : ''}`} disabled={isRemovedFromWatchlist || isAddedToWatchlist}
                onClick={() => handleAddOrRemoveShowInWatchlist(showDetails)}>
                <span className={`${watchListStyles}`}> {isRemovedFromWatchlist || isAddedToWatchlist ? <Loader smallLoader /> : (<>Add to Watchlist <FaPlus /></>)}</span>
            </button>
            {isWatchTrailer && (
                <button className={`${watchlistFavoriteStyles}`} onClick={openModal}>
                    <span className={`${trailerStyles}`}>Watch Trailer <BiMoviePlay /> </span>
                </button>
            )}
        </>
    )
}

export default WatchlistFavoriteButtons