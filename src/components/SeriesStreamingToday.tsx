import { SwiperSlide } from "swiper/react"
import { useGetStreamingTodaySeries } from "../lib/react-query/queries"
import HorizontalSwiper from "./HorizontalSwiper"
import SectionHeader from "./SectionHeader"
import TvMovieCard from "./TvMovieCard"

const SeriesStreamingToday = () => {
    const {data: seriesStreamingToday} = useGetStreamingTodaySeries() 
  return (
    <div className="streaming-today-series-section">
    <div className="xl:px-[100px] px-[16px]">
        <SectionHeader sectionName="Today's Streaming Series" link="/search?show=serie&category=airing_today" />
        <HorizontalSwiper spaceBetween={15} swiperStyles="bg-black flex" nextClasse='custom-next-streaming-today-series' prevClasse='custom-prev-streaming-today-series'>
            {
                seriesStreamingToday?.results?.slice(0, 20).map(({ id, name, first_air_date, poster_path, vote_average }) => (
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

export default SeriesStreamingToday