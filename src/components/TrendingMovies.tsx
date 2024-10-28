import { SwiperSlide } from "swiper/react"
import HorizontalSwiper from "./HorizontalSwiper"
import SectionHeader from "./SectionHeader"
import TvMovieCard from "./TvMovieCard"
import { useGetTrendingMovies } from "../lib/react-query/queries"

const TrendingMovies = () => {
    const {data: TreandingMovies} = useGetTrendingMovies()

    return (
        <div className="treding-movies-section" id="trending">
            <div className="xl:px-[100px] px-[16px]">
                <SectionHeader sectionName="Treding Movies" link="/search?show=movie" />
                <HorizontalSwiper spaceBetween={15} swiperStyles="bg-black flex" nextClasse='custom-next-treding-movies' prevClasse='custom-prev-treding-movies'>
                    {
                        TreandingMovies?.results?.slice(0, 20).map(({ id, title, release_date, poster_path, vote_average }) => (
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

export default TrendingMovies