import { useParams } from "react-router-dom"
import { useGetMovieOrSeriesDetails } from "../../lib/react-query/queries"

const MovieOrSerieDetails = ({type} : {type: 'movie' | 'serie'}) => {
    const {id} = useParams()
    const {data: showDetails} = useGetMovieOrSeriesDetails(type, Number(id))

    
  return (
    <div>MovieOrSerieDetails</div>
  )
}

export default MovieOrSerieDetails