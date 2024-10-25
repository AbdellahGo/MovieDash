import { SwiperSlide } from "swiper/react"
import BannerSwiperSlider from "./BannerSwiperSlider"
import BannerSlide from "./BannerSlide"
import { useGetPopularSeries } from "../lib/react-query/queries"

const HomeSeriesHeroSection = () => {
    const { data: populare } = useGetPopularSeries()
    return (
        <div className="home-hero-section">
            <BannerSwiperSlider swiperStyles='flex' nextClasse='custom-next-popular-series' prevClasse='custom-prev-popular-series'>
                {populare?.results?.slice(0, 10).map(({ id, name, first_air_date, overview, vote_average, genre_ids, poster_path }) => (
                    <SwiperSlide key={id}>
                        <BannerSlide type='serie' id={id} releaseDate={first_air_date} title={name} description={overview} rate={vote_average} genreIds={genre_ids} image={poster_path} />
                    </SwiperSlide>
                ))}
            </BannerSwiperSlider>
        </div>
    )
}

export default HomeSeriesHeroSection