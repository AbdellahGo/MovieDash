import { FaPlay, FaPlus, FaRegHeart } from "react-icons/fa6"
import { Link, useNavigate } from "react-router-dom"
import { afterSlideStyles, beforeSlideStyles, watchlistFavoriteStyles } from "../classes"
import { IoMdArrowDropdown } from "react-icons/io";
import StarRating from "./StarRating";
import { noImage } from "../assets";
import { useUserContext } from "../context/AuthContext";
type Props = {
    type: 'movie' | 'serie',
    image: string,
    id: number,
    releaseDate: string,
    title: string
    rate: number,
}


const TvMovieCard = ({ type, image, id, releaseDate, title, rate }: Props) => {
    const navigate = useNavigate()
    const {
        allFavoritesIds,
        allWatchlistIds,
        user, isRemovedFromWatchlist, isAddedToWatchlist, handleAddOrRemoveShowInWatchlist,
        handleAddOrRemoveShowInFavorite, isAddedToFavorite, isRemovedFromFavorite
    } = useUserContext()
    const showDetails = {
        userId: user.id,
        id,
        type,
        title,
        image: `https://media.themoviedb.org/t/p/original${image}`,
        rate,
        releaseDate,
    }
    return (
        <div className="rounded-[4px] p-[15px] bg-gray-900">

            <div className="hover-card relative overflow-hidden h-full rounded-[4px]">
                <div className="img-box relative h-full">
                    <img src={image ? `https://media.themoviedb.org/t/p/original${image}` : noImage} alt={type === 'movie' ? 'movie image' : 'serie image'} className="h-full transition-all w-full object-cover" />
                </div>
                <div className="card-info-block p-[15px] flex flex-col justify-end absolute  opacity-0 top-full bg-[#00000088] h-full ">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-8 relative">
                            <button className={`favorite ${(allFavoritesIds as number[]).includes(id) ? 'bg-primary border-none' : ''} ${watchlistFavoriteStyles} relative`} disabled={isAddedToFavorite || isRemovedFromFavorite}
                                onClick={() => handleAddOrRemoveShowInFavorite(showDetails)}>
                                <span className="opacity-0 text-12 absolute bg-gray-900 ml-[10px] mb-[10px] py-4 px-8 rounded-[4px] bottom-full left-1/2 -translate-x-1/2 ">
                                    Add to Favorite
                                    <IoMdArrowDropdown className="bottom-[-11.6px] text-gray-900 absolute text-20" />
                                </span>
                                <FaRegHeart />
                            </button>
                            <button className={`watchlist ${(allWatchlistIds as number[]).includes(id) ? 'bg-primary border-none' : ''} ${watchlistFavoriteStyles} relative`} disabled={isRemovedFromWatchlist || isAddedToWatchlist}
                                onClick={() => handleAddOrRemoveShowInWatchlist(showDetails)}>
                                <span className="opacity-0 text-12 absolute bg-gray-900  mb-[10px] py-4 px-8 rounded-[4px] bottom-full left-1/2 -translate-x-1/2 ">
                                    Add to Watchlist
                                    <IoMdArrowDropdown className="left-[23px] bottom-[-11.6px] text-gray-900 absolute text-20" />
                                </span>
                                <FaPlus />
                            </button>
                        </div>
                        <button className={`bg-primary w-[40px] border-1 border-primary relative overflow-hidden rounded-full h-[40px] ${afterSlideStyles} ${beforeSlideStyles}`}
                            onClick={() => navigate(`${type}-details/${id}#watch-trailer`)}>
                            <FaPlay className="mx-auto relative z-10" />
                        </button>
                    </div>
                    <div className="pt-[15px] mt-[15px] border-t-1 border-body-color">
                        <Link to={`/${type}-details/${id}`}>
                            <h5 className="capitalize text-white hover:text-primary transition-colors xl:text-[25px] md:text-[21px] text-16  font-semibold">{title}</h5>
                        </Link>
                        <span className="text-body-color text-16 font-medium">{releaseDate}</span>
                        <div className="flex items-center mt-8 gap-8 flex-wrap">
                            <StarRating rate={rate} iconStyles="text-20 text-warning-rgb" />
                            <span className="border-1 p-4 rounded-[4px] text-white text-14 font-medium">{rate?.toFixed(1)}/10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TvMovieCard