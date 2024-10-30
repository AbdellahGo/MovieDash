export type INewUser = {
    name: string;
    email: string;
    username: string;
    password: string;
}

export type IUser = {
    id: string;
    name: string;
    username: string;
    email: string;
    imageUrl: string;
};

export type IContextType = {
    user: IUser;
    isLoading: boolean;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    checkAuthUser: () => Promise<boolean>;
    handleAddOrRemoveShowInWatchlist: (show: IShowTypes) => Promise<void>
    isAddedToWatchlist: boolean,
    isRemovedFromWatchlist: boolean,
    handleAddOrRemoveShowInFavorite: (show: IShowTypes) => Promise<void>
    isAddedToFavorite: boolean,
    isRemovedFromFavorite: boolean,
    allFavoritesIds: number[] | []
allWatchlistIds: number[] | []
};

//? movies Type
export type IMovieBannerType = {
    results: {
        id: number,
        release_date: string,
        title: string,
        overview: string,
        vote_average: number,
        genre_ids: number[],
        poster_path: string
    }[]
}

export type IMovieCardType = {
    results: {
        id: number,
        release_date: string,
        title: string,
        vote_average: number,
        poster_path: string
    }[]
}

export type GenresType = {
    genres: {
        id: number,
        name: string
    }[]
}

//? Series Type

export type ISeriesBannerType = {
    results: {
        id: number,
        first_air_date: string,
        name: string,
        overview: string,
        vote_average: number,
        genre_ids: number[],
        poster_path: string
    }[]
}

export type ISeriesCardType = {
    results: {
        id: number,
        first_air_date: string,
        name: string,
        vote_average: number,
        poster_path: string
    }[]
}


//? Movie and Serie Details Type
export type IMovieDetailsType = {
    id: number,
    original_title: string,
    genres: { id: number, name: string }[],
    homepage: string,
    origin_country: string[],
    spoken_languages: { english_name: string }[],
    overview: string,
    poster_path: string,
    release_date: string,
    runtime: number,
    vote_average: number,
    videos: {
        results: { key: string }[]
    },
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
}

export type ISerieDetailsType = {
    id: number,
    name: string,
    genres: { id: number, name: string }[],
    homepage: string,
    origin_country: string[],
    spoken_languages: { english_name: string }[],
    overview: string,
    poster_path: string,
    first_air_date: string,
    episode_run_time: number[],
    vote_average: number,
    number_of_episodes: number,
    number_of_seasons: number,
    videos: {
        results: { key: string }[]
    },
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
}


export type IShowTypes = {
    id: number,
    userId: string,
    type: 'movie' | 'serie',
    title: string,
    image: string,
    rate: number,
    releaseDate: string,
}