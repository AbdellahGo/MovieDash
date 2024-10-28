import { SwiperSlide } from "swiper/react"
import HorizontalSwiper from "./HorizontalSwiper"
import SectionHeader from "./SectionHeader"
import TvMovieCard from "./TvMovieCard"
import {useGetUpcomingSeries } from "../lib/react-query/queries"

const UpcomingSeries = () => {
    const {data: seriesOnTheAir} = useGetUpcomingSeries()
    
  return (
    <div className="upcoming-series-section">
    <div className="xl:px-[100px] px-[16px]">
        <SectionHeader sectionName="Upcoming Series" link="/search?show=serie" />
        <HorizontalSwiper spaceBetween={15} swiperStyles="bg-black flex" nextClasse='custom-next-upcoming-series' prevClasse='custom-prev-upcoming-series'>
            {
                seriesOnTheAir?.results?.slice(0, 20).map(({ id, name, first_air_date, poster_path, vote_average }) => (
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

export default UpcomingSeries