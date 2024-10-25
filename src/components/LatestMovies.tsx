import { SwiperSlide } from "swiper/react"
import HorizontalSwiper from "./HorizontalSwiper"
import SectionHeader from "./SectionHeader"
import TvMovieCard from "./TvMovieCard"
import { useGetLatestMovies } from "../lib/react-query/queries"

const LatestMovies = () => {
    const { data: latestMovies } = useGetLatestMovies()

    return (
        <div className="latest-movies-section">
            <div className="xl:px-[100px] px-[16px]">
                <SectionHeader sectionName="Latest Movies" link="/latest-movies" />
                <HorizontalSwiper spaceBetween={15} swiperStyles="bg-black flex" nextClasse='custom-next-latest-movies' prevClasse='custom-prev-latest-movies'>
                    {
                        latestMovies?.results?.slice(0, 20).map(({ id, title, release_date, poster_path, vote_average }) => (
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

export default LatestMovies