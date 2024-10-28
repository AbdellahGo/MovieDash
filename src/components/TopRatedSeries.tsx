import { SwiperSlide } from "swiper/react"
import HorizontalSwiper from "./HorizontalSwiper"
import SectionHeader from "./SectionHeader"
import TvMovieCard from "./TvMovieCard"
import { useGetTopRatedSeries } from "../lib/react-query/queries"

const TopRatedSeries = () => {
    const {data: TopRatedSeries} = useGetTopRatedSeries() 
    return (
        <div className="top-rated-series-section">
            <div className="xl:px-[100px] px-[16px]">
                <SectionHeader sectionName="Top Rated Series" link="/search?show=serie&category=top_rated" />
                <HorizontalSwiper spaceBetween={15} swiperStyles="bg-black flex" nextClasse='custom-next-top-rated-series' prevClasse='custom-prev-top-rated-series'>
                    {
                        TopRatedSeries?.results?.slice(0, 20).map(({ id, name, first_air_date, poster_path, vote_average }) => (
                            <SwiperSlide key={id}>
                                <TvMovieCard type='serie' image={poster_path} id={id} title={name} releaseDate={first_air_date} rate={vote_average} />
                            </SwiperSlide>
                        ))
                    }
                </HorizontalSwiper>
            </div>
        </div>
    )
}

export default TopRatedSeries