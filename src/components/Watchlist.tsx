import { IoInformationCircle } from "react-icons/io5"
import { useUserContext } from "../context/AuthContext"
import { useGetWatchlist } from "../lib/react-query/queries"
import TvMovieCard from "./TvMovieCard"
import Loader from "./Loader"

const Watchlist = () => {
    const { user } = useUserContext()
    const { data: watchlist, isLoading } = useGetWatchlist(user.id)
    if (isLoading) return <Loader bigLoader containerStyles="flex justify-center h-[300px] items-center" />
    return (
        <div className="xl:px-[100px] px-[16px]">
            {(watchlist?.documents?.length ?? 0) < 0 && !isLoading ? (
                <p className="flex items-center justify-center gap-4 text-18 font-medium capitalize text-body-color"><IoInformationCircle className="text-20" /> you don't have any Watchlist</p>
            ) : (
                <div className="z-30 mt-16 grid gap-20 xxl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
                    {watchlist?.documents?.map((show) => (
                        <TvMovieCard key={show!.id} type={show?.type} image={show!.image} id={show!.id}
                            title={show!.title}
                            rate={show!.rate}
                            releaseDate={show!.releaseDate} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Watchlist