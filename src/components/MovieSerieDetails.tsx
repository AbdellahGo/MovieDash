import { imdbLogo, noImage } from "../assets"
import { FaRegCalendar, FaRegStar } from "react-icons/fa6";
import { IoLanguageSharp } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { MdOutlineLocalMovies } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
import { BsGlobe } from "react-icons/bs";
import StarRating from "./StarRating";
import Genres from "./Genres";
import { useEffect, useState } from "react";
type Props = {
    type: 'movie' | 'serie'
    description: string
    credits: {
        cast: {
            id: number,
            name: string,
            profile_path: string
            character: string
            credit_id: string
        }[]
        crew: {
            id: number,
            name: string,
            profile_path: string,
            credit_id: string,
            job: string
        }[]
    },
    numberOfEpisodes: number | undefined,
    numberOfSeasons: number | undefined,
    episodeRunTime: number[] | undefined,
    runTime: number | undefined,
    title: string,
    homepage: string,
    releasedDate: string
    spokenlanguages: { english_name: string }[],
    rating: number
    genres: { id: number, name: string }[],
}
const MovieSerieDetails = ({ homepage, runTime, title, type, numberOfEpisodes, numberOfSeasons, episodeRunTime, description, credits, releasedDate, spokenlanguages, rating, genres }: Props) => {
    const [genreIds, setGenreIds] = useState<number[]>([])

    const genresDisassembly = () => {
        let genresIds: number[] = []
        for (let i = 0; i < genres.length; i++) {
            genresIds.push(genres[i]?.id)
        }
        setGenreIds(genresIds)
    }

    useEffect(() => {
        if (genres) {
            genresDisassembly()
        }
    }, [genres])

    return (
        <div className="movie-serie-details-section xl:my-[100px] md:my-[50px] my-[30px]">
            <div className="xl:px-[100px] px-[16px] ">
                <div className="flex md:flex-row flex-col gap-20 items-start">
                    <div className="xxl:w-[70%] lg:w-[60%] md:w-1/2 w-full flex flex-col gap-20">
                        <div className="bg-gray-900 p-20 rounded-[8px] border-1 border-border-color">
                            <h4 className="text-18 font-medium text-white">Overview</h4>
                            <p className="mt-8 text-body-color max-w-[1000px]">{description}</p>
                        </div>
                        <div className="bg-gray-900 p-20 rounded-[8px] border-1 border-border-color">
                            <h4 className="text-18 font-medium text-white ">Cast</h4>
                            <ul className="cast-list mt-16 flex gap-20 overflow-x-auto">
                                {credits?.cast?.map(({name, profile_path, character }, i) => (
                                    <li className="shrink-0" key={i}>
                                        <img src={profile_path ? `https://media.themoviedb.org/t/p/original/${profile_path}` : noImage} alt="cast image"
                                            className="rounded-[8px] w-[100px] h-[100px] object-cover" />
                                        <h5 className="text-14 mt-8 text-white font-medium w-[100px]">{name}</h5>
                                        <h5 className="text-14 text-body-color font-medium w-[100px] mb-8">{character}</h5>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gray-900 p-20 rounded-[8px] border-1 border-border-color">
                            <h4 className="text-18 font-medium text-white ">Crow</h4>
                            <ul className="cast-list mt-16 flex gap-20 overflow-x-auto">
                                {credits?.crew?.map(({ name, profile_path, job }, i) => (
                                    <li className="shrink-0" key={i}>
                                        <img src={profile_path ? `https://media.themoviedb.org/t/p/original/${profile_path}` : noImage} alt="cast image"
                                            className="rounded-[8px] w-[100px] h-[100px] object-cover" />
                                        <h5 className="text-14 mt-8 text-white font-medium w-[100px]">{name}</h5>
                                        <h5 className="text-14 text-body-color font-medium w-[100px] mb-8">{job}</h5>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="xxl:w-[30%] lg:w-[40%] md:w-1/2 w-full">
                        <div className="bg-gray-900 p-20 rounded-8 border-1 rounded-[8px] border-border-color flex flex-col gap-20">
                            <h4 className="flex capitalize items-center gap-6 text-18 font-medium text-white">
                                <FaRegCalendar /> Released Date:
                                <span className="text-16 font-bold text-primary">{releasedDate}</span>
                            </h4>
                            {type === 'movie' && (
                                <h4 className="flex capitalize items-center gap-6 text-18 font-medium text-white">
                                    <MdOutlineTimer /> Run Time:
                                    <span className="text-16 font-bold text-primary normal-case">{runTime}min</span>
                                </h4>
                            )}
                            {type === 'serie' && (
                                <>
                                    <h4 className="flex capitalize items-center gap-6 text-18 font-medium text-white">
                                        <MdOutlineLocalMovies /> Seasons:
                                        <span className="text-16 font-bold text-primary">{numberOfSeasons}</span>
                                    </h4>
                                    <h4 className="flex capitalize items-center gap-6 text-18 font-medium text-white">
                                        <BiMoviePlay /> Episodes:
                                        <span className="text-16 font-bold text-primary">{numberOfEpisodes}</span>
                                    </h4>
                                    <h4 className="flex capitalize items-center gap-6 text-18 font-medium text-white">
                                        <MdOutlineTimer />Run Time:
                                        <span className="text-16 font-bold text-primary normal-case">{episodeRunTime![0]}min</span>
                                    </h4>
                                </>
                            )}
                            <div>
                                <h4 className="flex capitalize items-center gap-6 text-18 font-medium text-white">
                                    <IoLanguageSharp /> Spoken Languages:
                                </h4>
                                <ul className="mt-8 flex flex-wrap items-center">
                                    {spokenlanguages?.map(({ english_name }, i) => (
                                        <li key={i} className="border-1 w-fit px-8 py-4 rounded-[4px] bg-black border-border-color">
                                            {english_name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-wrap items-center gap-8">
                                <h4 className="flex capitalize items-center gap-6 text-18 font-medium text-white ">
                                    <FaRegStar /> Rating:
                                </h4>
                                <StarRating rate={rating} starBoxStyles="flex items-center gap-4" iconStyles="text-18 text-warning-rgb" />
                                <div className="flex items-center gap-8">
                                    <span className="border-1 border-border-color bg-black py-4 px-8 rounded-[4px] ">{rating.toFixed(1)}/10
                                    </span>
                                    <img src={imdbLogo} alt="imdb Logo" className="h-[60px]" />
                                </div>
                            </div>
                            <div>
                                <h4 className="flex capitalize items-center gap-6 text-18 font-medium text-white ">
                                    <TbCategory /> Genres:
                                </h4>
                                <Genres genreIds={genreIds} type={type} genresBoxStyles="flex flex-wrap w-fit items-center gap-8 mt-8" genreStyles="py-4 px-8 border-1 bg-black rounded-[4px] border-border-color" />
                            </div>
                            {homepage && (
                                <div>
                                    <h4 className="flex capitalize items-center gap-6 text-18 font-medium text-white ">
                                        <BsGlobe /> Website:
                                        <a href={homepage} target="_blank" className="text-16 font-bold text-primary">{title}</a>
                                    </h4>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieSerieDetails