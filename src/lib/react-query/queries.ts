import { useMutation, useQuery } from "@tanstack/react-query"
import { INewUser } from "../../types"
import { createUserAccount, signInAccount, signOutAccount } from "../appwrite/api"
import { QUERY_KEYS } from "./queryKeys"
import { getLatestMovies, getMovieOrSerieDetails, getMovieOrSeriesGenres, getMoviesOrSeriesBySearch, getNowPlayingMovies, getPopularMovies, getPopularSeries, getStreamingTodaySeries, getTopRatedMovies, getTrendingMovies, getUpcomingMovies, getUpcomingSeries } from "../tmdb/api"
// AppWrite queries
export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
}

export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: { email: string, password: string }) => signInAccount(user)
    })
}

export const useSignOutAccount = () => {
    return useMutation({
        mutationFn: signOutAccount,
    });
};

//!! TMDB API queries
// ?Movies API queries

export const useGetMovieOrSiresGenres = (type: 'movie' | 'serie') => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_MOVIE_GENRES, type],
        queryFn: () => getMovieOrSeriesGenres(type),
    })
}

export const useGetPopularMovies = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_POPULAR_MOVIES],
        queryFn: getPopularMovies,
    })
}

export const useGetUpcomingMovies = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_UPCOMING_MOVIES],
        queryFn: getUpcomingMovies,
    })
}

export const useGetTrendingMovies = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_TRENDING_MOVIES],
        queryFn: getTrendingMovies,
    })
}

export const useGetLatestMovies = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_LATEST_MOVIES],
        queryFn: getLatestMovies,
    })
}


export const useGetTopRatedMovies = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_TOP_RATED_MOVIES],
        queryFn: getTopRatedMovies,
    })
}

export const useGetNowPlayingMovies = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_NOW_PLAYING_MOVIES],
        queryFn: getNowPlayingMovies,
    })
}

// ? Series Api Queries

export const useGetPopularSeries = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_POPULAR_SERIES],
        queryFn: getPopularSeries,
    })
}

export const useGetUpcomingSeries = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_UPCOMING_SERIES],
        queryFn: getUpcomingSeries,
    })
}

export const useGetTrendingSeries = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_TRENDING_SERIES],
        queryFn: getUpcomingSeries,
    })
}

export const useGetStreamingTodaySeries = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_STREAMING_TODAY_SERIES],
        queryFn: getStreamingTodaySeries,
    })
}

export const useGetTopRatedSeries = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_TOP_RATED_SERIES],
        queryFn: getPopularSeries,
    })
}

// ? movie and serie details Api Querie

export const useGetMovieOrSeriesDetails = (type: 'movie' | 'serie', id: number) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_MOVIE_OR_SERIES_DETAILS],
        queryFn: () => getMovieOrSerieDetails(type, id),
    })
}

//? Search form movies or series Querie
export const useGetMoviesOrSeriesBySearch = (page: number, searchTerm: string, showType: 'movie' | 'serie', categories: string, genresIds: string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_MOVIES_OR_SERIES_BY_SEARCH, searchTerm, page, showType, categories, genresIds],
        queryFn: () => getMoviesOrSeriesBySearch(page, searchTerm, showType, categories, genresIds),
    })
}