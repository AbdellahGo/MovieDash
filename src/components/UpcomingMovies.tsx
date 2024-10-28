import HorizontalSwiper from "./HorizontalSwiper"
import SectionHeader from "./SectionHeader"
import { SwiperSlide } from "swiper/react"
import TvMovieCard from "./TvMovieCard"
import { useGetUpcomingMovies } from "../lib/react-query/queries"

const UpcomingMovies = () => {
    const { data: upcomingMovies } = useGetUpcomingMovies()
    

    return (
        <div className="upcoming-movies-section" id="upcoming">
            <div className="xl:px-[100px] px-[16px]">
                <SectionHeader sectionName="Upcoming Movies" link="/search?show=movie&category=upcoming" />
                <HorizontalSwiper spaceBetween={15} swiperStyles="bg-black flex" nextClasse='custom-next-upcoming-movies' prevClasse='custom-prev-upcoming-movies'>
                    {
                        upcomingMovies?.results?.slice(0, 20).map(({ id, title, release_date, poster_path, vote_average }) => (
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

export default UpcomingMovies