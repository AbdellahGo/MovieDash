import { imdbLogo, texure } from "../assets"
import { FaPlus, FaRegHeart } from "react-icons/fa6";
import { IoPlayOutline } from "react-icons/io5";
import { afterSlideStyles, beforeSlideStyles } from "../classes";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import Genres from "./Genres";


type Props = {
  id: number,
  releaseDate: string,
  title: string,
  description: string,
  rate: number,
  genreIds: number[],
  image: string
  type: 'movie' | 'serie'
}

const BannerSlide = ({ type, id, releaseDate, title, description, rate, genreIds, image }: Props) => {
  const watchlistFavoriteStyles = `relative text-white border-[2px] p-8 text-16 rounded-[6px] overflow-hidden border-body-color hover:border-primary transition-colors ${afterSlideStyles} ${beforeSlideStyles}`

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full">
        <span className="absolute top-0 left-0 w-full h-full"
          style={{ backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(20, 20, 20, 0.9) 15%, rgba(83, 100, 141, 0) 100%)' }} />
        <img src={`https://media.themoviedb.org/t/p/original${image}`} alt="" className="w-full object-cover h-full" />
      </div>
      <div className={`xl:px-[100px] md:px-50 px-30 relative h-full bg-[#00000022]`}>
        <div className="flex xl:items-center xl:flex-row flex-col Mxl:justify-center h-full gap-40">
          <div className="xl:w-7/12 w-full">
            <Link to={`${type}-details/${id}`}>
              <h1 className="hover:text-primary transition-colors md:min-w-max capitalize text-[#FFFFFF00] bg-clip-text leading-normal lg:text-[80px] md:text-[55px] text-30 font-extrabold RightAnimate"
                style={{ backgroundImage: `url(${texure})` }}>
                {title}
              </h1>
            </Link>
            <div className="flex md:items-center md:flex-row flex-col gap-y-16 RightAnimate-two">
              <div className="flex items-center">
                <StarRating rate={rate} />
                <span className="ml-8 text-white text-14 font-medium">{rate.toFixed(1)}/10</span>
                <span className="ml-8">
                  <img src={imdbLogo} alt="imdbLogo" className="w-50 h-50" />
                </span>
              </div>
              <div className="flex items-center Msm:flex-wrap gap-y-16">
                <Genres genreIds={genreIds} type={type}
                  genresBoxStyles='font-medium overflow-x-auto text-16 md:px-16 Mmd:pr-16 flex items-center gap-[10px] genres-container'
                  genreStyles='rounded-[4px] uppercase text-white p-8 bg-secondary-bg min-w-max' />
                <p className="text-14 font-semibold text-primary min-w-max ">Release Date: <span className="text-body-color">{releaseDate}</span></p>
              </div>
            </div>
            <p className="w-[600px] text-body-color max-w-full my-16 text-16 RightAnimate-three">
              {description}
            </p>
            <div className="flex items-center gap-8 RightAnimate-four flex-wrap">
              <button className={`${watchlistFavoriteStyles}`}>
                <span className="flex items-center gap-[8px] relative z-10 ">Add to Favorite <FaRegHeart /></span>
              </button>
              <button className={`${watchlistFavoriteStyles}`}>
                <span className="flex items-center gap-[8px] relative z-10">Add to Watchlist <FaPlus /></span>
              </button>
            </div>
          </div>
          <div className="xl::w-5/12 w-full">
            <button className="group flex items-center w-full xl:justify-center gap-18 RightAnimate-five">
              <span className="group-hover:border-primary transition-colors flex items-center justify-center xl:w-80 md:w-60 w-50 xl:h-80 md:h-60 h-50 md:border-[4px] border-[3px] xl:text-50 md:text-40 text-30 rounded-full">
                <IoPlayOutline className="group-hover:text-primary transition-colors" />
              </span>
              <span className="text-20 tracking-[4px] font-medium uppercase align-middle block group-hover:text-primary transition-colors">Wath Trailer</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )

}
export default BannerSlide