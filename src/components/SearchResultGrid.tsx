import { IMovieCardType, ISeriesCardType } from "../types"
import TvMovieCard from "./TvMovieCard"

type IMovieType = {
    id: number,
    release_date: string,
    title: string,
    vote_average: number,
    poster_path: string
}
type ISerieType = {
    id: number,
    first_air_date: string,
    name: string,
    vote_average: number,
    poster_path: string
}
type Props = {
    searchTerm: string
    type: 'movie' | 'serie',
    result: IMovieCardType | ISeriesCardType | undefined,
}


const SearchResultGrid = ({ type, result, searchTerm }: Props) => {

    return (
        <div className="search-result-grid-section md:pt-[50px] pt-[30px]">
            <div className="xl:px-[100px] px-[16px]">
                <h2 className="lg:text-[30px] text-24 capitalize font-medium">Search results: <span className="text-primary">{searchTerm?.split('-').join(' ')}</span></h2>
                <div className="z-30 mt-16 grid gap-20 xxl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                    {result?.results?.map((show) => (
                            <TvMovieCard key={show!.id} type={type} image={show!.poster_path} id={show!.id}
                                title={type === 'movie' ? (show as IMovieType)!.title : (show as ISerieType)!.name}
                                rate={show!.vote_average}
                                releaseDate={type === 'movie' ? (show as IMovieType)!.release_date : (show as ISerieType)!.first_air_date} />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default SearchResultGrid