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