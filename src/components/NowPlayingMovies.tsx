import SectionHeader from './SectionHeader'
import HorizontalSwiper from './HorizontalSwiper'
import { SwiperSlide } from 'swiper/react'
import TvMovieCard from './TvMovieCard'
import { useGetNowPlayingMovies } from '../lib/react-query/queries'

const NowPlayingMovies = () => {
    const { data: nowPlayingMovies, isLoading} = useGetNowPlayingMovies()
    if (isLoading) return '...loading'

    return (
        <div className="now-playing-movies-section">
            <div className="xl:px-[100px] px-[16px]">
                <SectionHeader sectionName="Now Playing Movies" link="/now-playing-movies" />
                <HorizontalSwiper spaceBetween={15} swiperStyles="bg-black flex" nextClasse='custom-next-now-playing' prevClasse='custom-prev-now-playing'>
                    {
                        nowPlayingMovies?.results?.slice(0, 20).map(({ id, title, release_date, poster_path, vote_average }) => (
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

export default NowPlayingMovies