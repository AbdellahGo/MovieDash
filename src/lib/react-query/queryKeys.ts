export enum QUERY_KEYS {
    // ? MOVIES KEYS
    GET_TOP_RATED_MOVIES = 'GetTopRatedMovies',
    GET_MOVIE_GENRES = 'getMovieGenres',
    GET_POPULAR_MOVIES = 'getPopularMovies',
    GET_UPCOMING_MOVIES = 'getUpcomingMovies',
    GET_LATEST_MOVIES = 'getLatestMovies',
    GET_NOW_PLAYING_MOVIES = 'getNowPlayingMovies',
    GET_TRENDING_MOVIES = 'getTrendingMovies',
    // ? SERIES KEYS
    GET_POPULAR_SERIES = 'getPopularSeries',
    GET_UPCOMING_SERIES = 'getUpcomingSeries',
    GET_TRENDING_SERIES = 'getTrendingSeries',
    GET_TOP_RATED_SERIES = 'getTopRatedSeries',
    GET_STREAMING_TODAY_SERIES = 'getStreamingTodaySeries',
    // ? MOVIE AND SERIE DETAILS KEY
    GET_MOVIE_OR_SERIES_DETAILS = 'getMovieOrSerieDetails',
    // ? MOVIE AND SERIE Search KEY
    GET_MOVIES_OR_SERIES_BY_SEARCH = 'getMoviesOrSeriesBySearch',
    //? WATCHLIST And FAVORITE key
    WATCHLIST = 'watchlist',
    FAVORITE = 'favorite',
}

export const moviesAndSSeriesKeys = [
    QUERY_KEYS.GET_TOP_RATED_MOVIES,
    QUERY_KEYS.GET_MOVIE_GENRES,
    QUERY_KEYS.GET_POPULAR_MOVIES,
    QUERY_KEYS.GET_UPCOMING_MOVIES,
    QUERY_KEYS.GET_LATEST_MOVIES,
    QUERY_KEYS.GET_NOW_PLAYING_MOVIES,
    QUERY_KEYS.GET_TRENDING_MOVIES,
    QUERY_KEYS.GET_POPULAR_SERIES,
    QUERY_KEYS.GET_UPCOMING_SERIES,
    QUERY_KEYS.GET_TRENDING_SERIES,
    QUERY_KEYS.GET_TOP_RATED_SERIES,
]