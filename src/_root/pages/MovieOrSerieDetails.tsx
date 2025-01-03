import { useParams } from "react-router-dom"
import { useGetMovieOrSeriesDetails } from "../../lib/react-query/queries"
import { MovieSerieBannerDetails, MovieSerieDetails } from "../../components"
import { IMovieDetailsType, ISerieDetailsType } from "../../types"
import { useEffect } from "react"
import Loader from "../../components/Loader"

const MovieOrSerieDetails = ({ type }: { type: 'movie' | 'serie' }) => {
    const { id } = useParams()
    const { data: showDetails, isLoading } = useGetMovieOrSeriesDetails(type, Number(id))

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
      })
      
    if (isLoading) return <Loader bigLoader containerStyles="flex justify-center items-center h-[300px]"/>
    
    return (
        <div >
            <MovieSerieBannerDetails
            rate={showDetails!.vote_average}
            releaseDate={type === 'movie' ? (showDetails as IMovieDetailsType)?.release_date : (showDetails as ISerieDetailsType)!.first_air_date}
                type={type} id={Number(id)}
                image={showDetails!.poster_path}
                title={type === 'movie' ? (showDetails as IMovieDetailsType)!.original_title : (showDetails as ISerieDetailsType)?.name}
                description={showDetails!.overview}
                videoKey={showDetails!.videos?.results[0]?.key} />
            <MovieSerieDetails
            episodeRunTime = {type === 'serie' ? (showDetails as ISerieDetailsType)!.episode_run_time : []}
            numberOfEpisodes={type === 'serie' ? (showDetails as ISerieDetailsType)!.number_of_episodes : undefined}
            numberOfSeasons={type === 'serie' ? (showDetails as ISerieDetailsType)!.number_of_seasons : undefined}
                type={type}
                title={type === 'movie' ? (showDetails as IMovieDetailsType)!.original_title : (showDetails as ISerieDetailsType)?.name}
                runTime={type === 'movie' ? (showDetails as IMovieDetailsType)!.runtime : undefined}
                homepage={showDetails!.homepage}
                description={showDetails!.overview}
                credits={showDetails!.credits}
                releasedDate={type === 'movie' ? (showDetails as IMovieDetailsType)?.release_date : (showDetails as ISerieDetailsType)!.first_air_date}
                spokenlanguages={showDetails!.spoken_languages}
                rating={showDetails!.vote_average}
                genres={showDetails!.genres}
            />
        </div>
    )
}

export default MovieOrSerieDetails