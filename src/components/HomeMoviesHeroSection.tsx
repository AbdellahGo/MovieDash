import { SwiperSlide } from "swiper/react"
import { BannerSlide, BannerSwiperSlider } from "."
import { useGetPopularMovies } from "../lib/react-query/queries"

const HomeMoviesHeroSection = () => {
    const { data: populare } = useGetPopularMovies()
    
    return (
        <div className="home-hero-section">
            <BannerSwiperSlider swiperStyles='flex' nextClasse='custom-next-popular-movies' prevClasse='custom-prev-popular-movies'>
                {populare?.results?.slice(0, 10).map(({ id, title, release_date, overview, vote_average, genre_ids, poster_path }) => (
                    <SwiperSlide key={id}>
                        <BannerSlide type='movie' id={id} releaseDate={release_date} title={title} description={overview} rate={vote_average} genreIds={genre_ids} image={poster_path}/>
                    </SwiperSlide>
                ))}
            </BannerSwiperSlider>
        </div>
    )
}

export default HomeMoviesHeroSection