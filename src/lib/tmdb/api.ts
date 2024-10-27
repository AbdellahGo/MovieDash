import axios from "axios"
import { GenresType, IMovieBannerType, IMovieCardType, IMovieDetailsType, ISerieDetailsType, ISeriesBannerType, ISeriesCardType } from "../../types"

const BASE_URL = 'https://api.themoviedb.org/3'

const axiosInstance = axios.create({ baseURL: BASE_URL })

const headers = {
    Authorization: import.meta.env.VITE_TMDB_API_KEY
}


//? Genres end point

export async function getMovieOrSeriesGenres(type: 'movie' | 'serie'): Promise<GenresType | undefined> {
    try {
        return (await axiosInstance.get(`${BASE_URL}${type === 'movie' ? '/genre/movie/list' : '/genre/tv/list'}`, { headers })).data
    } catch (error) {
        console.log(error);
    }
}

//? movies end points

export async function getPopularMovies(): Promise<IMovieBannerType | undefined> {
    try {
        return (await axiosInstance.get(`${BASE_URL}/movie/popular`, { headers })).data
    } catch (error) {
        console.log(error);
    }
}

export async function getUpcomingMovies(): Promise<IMovieCardType | undefined> {
    try {
        return (await axiosInstance.get(`${BASE_URL}/movie/upcoming`, { headers })).data
    } catch (error) {
        console.log(error);
    }
}

export async function getTrendingMovies(): Promise<IMovieCardType | undefined> {
    try {
        return (await axiosInstance.get(`${BASE_URL}/trending/movie/day`, { headers })).data
    } catch (error) {
        console.log(error);
    }
}
export async function getLatestMovies(): Promise<IMovieCardType | undefined> {
    try {
        return (await axiosInstance.get(`${BASE_URL}/discover/movie`, { headers })).data
    } catch (error) {
        console.log(error);
    }
}

export async function getTopRatedMovies(): Promise<IMovieCardType | undefined> {
    try {
        return (await axiosInstance.get(`${BASE_URL}/movie/top_rated`, { headers })).data
    } catch (error) {
        console.log(error);
    }
}

export async function getNowPlayingMovies(): Promise<IMovieCardType | undefined> {
    try {
        return (await axiosInstance.get(`${BASE_URL}/movie/now_playing`, { headers })).data
    } catch (error) {
        console.log(error);
    }
}


//? Series end points
export async function getPopularSeries(): Promise<ISeriesBannerType | undefined> {
    try {
        return (await axiosInstance.get(`${BASE_URL}/tv/popular?with_original_language=en&with_origin_country=US`, { headers })).data
    } catch (error) {
        console.log(error);
    }
}
export async function getUpcomingSeries(): Promise<ISeriesCardType | undefined> {
    try {
        return (await axiosInstance.get(`${BASE_URL}/discover/tv?with_original_language=en&with_origin_country=US&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}`, { headers })).data
    } catch (error) {
        console.log(error);
    }
}

export async function getTrendingSeries(): Promise<ISeriesCardType | undefined> {
    try {
        return (await axiosInstance.get(`${BASE_URL}/tv/day?with_original_language=en&with_origin_country=US`, { headers })).data
    } catch (error) {
        console.log(error);
    }
}

export async function getStreamingTodaySeries(): Promise<ISeriesCardType | undefined> {
    try {
        return (await axiosInstance.get(`${BASE_URL}/tv/airing_today?with_original_language=en&with_origin_country=US`, { headers })).data
    } catch (error) {
        console.log(error);
    }
}
export async function getTopRatedSeries(): Promise<ISeriesCardType | undefined> {
    try {
        return (await axiosInstance.get(`${BASE_URL}/tv/top_rated?with_original_language=en&with_origin_country=US`, { headers })).data
    } catch (error) {
        console.log(error);
    }
}

//? movie and series details end point
export async function getMovieOrSerieDetails(type: 'movie' | 'serie', id: number): Promise<(IMovieDetailsType | ISerieDetailsType) | undefined> {
    try {
        return (await axiosInstance.get(`${BASE_URL}/${type === 'movie' ? 'movie' : 'tv'}/${id}?append_to_response=videos,credits`, { headers })).data
    } catch (error) {
        console.log(error);

    }

}



//? Search form movies or series end point
export async function getMoviesOrSeriesBySearch(page: number, searchTerm: string, showType: 'movie' | 'serie', categories: string, genresIds: number[]): Promise<IMovieCardType | ISeriesCardType | undefined> {
    try {
        if (searchTerm.length < 1 && categories.length < 1 && genresIds.length < 1) {
            return (await axiosInstance.get(`${BASE_URL}/trending/${showType === 'movie' ? 'movie' : 'tv'}/day?page=${page}`, { headers })).data
        }
        if (categories.length > 0) {
            return (await axiosInstance.get(`${BASE_URL}/${showType === 'movie' ? 'movie' : 'tv'}/${categories}?page=${page}`, { headers })).data
        }
        if (genresIds.length > 0) {
            return (await axiosInstance.get(`${BASE_URL}/discover/${showType === 'movie' ? 'movie' : 'tv'}?with_genres=${genresIds.join(',')}&page=${page}`, { headers })).data
        }
        if (searchTerm.length > 0) {
            return (await axiosInstance.get(`${BASE_URL}/search/${showType === 'movie' ? 'movie' : 'tv'}?query=${searchTerm}&page=${page}`, { headers })).data
        }
    } catch (error) {
        console.log(error);
    }
}