import { SwiperSlide } from "swiper/react"
import { useGetTopRatedMovies } from "../lib/react-query/queries"
import HorizontalSwiper from "./HorizontalSwiper"
import SectionHeader from "./SectionHeader"
import TvMovieCard from "./TvMovieCard"

const TopRatedMovies = () => {
    const {data: topRated} = useGetTopRatedMovies()

  return (
    <div className="top-reated-movies-section" id="top-rated">
    <div className="xl:px-[100px] px-[16px]">
        <SectionHeader sectionName="Top Rated Movies" link="/top-rated-movies" />
        <HorizontalSwiper spaceBetween={15} swiperStyles="bg-black flex" nextClasse='custom-next-top-rated-movies' prevClasse='custom-prev-top-rated-movies'>
            {
                topRated?.results?.slice(0, 20).map(({ id, title, release_date, poster_path, vote_average }) => (
                    <SwiperSlide key={id}>
                        <TvMovieCard type='movie' image={poster_path} id={id} title={title} releaseDate={release_date} rate={vote_average} />
                    </SwiperSlide>
                ))
            }
        </HorizontalSwiper>
    </div>
</div>
  )
}

export default TopRatedMovies