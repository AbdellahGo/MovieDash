import React, { createContext, useContext, useEffect, useState } from "react";
import { IContextType, IUser } from "../types";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../lib/appwrite/api";
import { useAddShowtoFavorite, useAddShowtoWatchlist, useGetFavorite, useGetWatchlist, useRemoveShowFromFavorite, useRemoveShowFromWatchlist } from "../lib/react-query/queries"
import { IShowTypes } from "../types"
import { toast } from "react-toastify"

export const INITIAL_USER = {
    id: '',
    name: '',
    username: '',
    email: '',
    imageUrl: '',
}

const INITIAL_STATE = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => { },
    setIsAuthenticated: () => { },
    checkAuthUser: async () => false as boolean,
    handleAddOrRemoveShowInWatchlist: async () => { },
    isAddedToWatchlist: false,
    isRemovedFromWatchlist: false,
    handleAddOrRemoveShowInFavorite: async () => { },
    isAddedToFavorite: false,
    isRemovedFromFavorite: false,
    allFavoritesIds: [0],
allWatchlistIds: [0],
};

const AuthContext = createContext<IContextType>(INITIAL_STATE)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [allFavoritesIds, setAllFavoritesIds] = useState<number[]>([])
    const [allWatchlistIds, setAllWatchlisteIds] = useState<number[]>([])
    const navigate = useNavigate()
    const [user, setUser] = useState<IUser>(INITIAL_USER)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    //? watchlist
    const { data: watchlistData } = useGetWatchlist(user.id)
    const { mutateAsync: addToWatchlist, isPending: isAddedToWatchlist } = useAddShowtoWatchlist()
    const { mutateAsync: removeFromWatchlist, isPending: isRemovedFromWatchlist } = useRemoveShowFromWatchlist()
    //? favorite
    const { data: favoriteData } = useGetFavorite(user.id)
    const { mutateAsync: addToFavorite, isPending: isAddedToFavorite } = useAddShowtoFavorite()
    const { mutateAsync: removeFromFavorite, isPending: isRemovedFromFavorite } = useRemoveShowFromFavorite()


    const handleAddOrRemoveShowInWatchlist = async (show: IShowTypes) => {
        if ((watchlistData?.documents?.length ?? 0) > 0) {
            const showExists = watchlistData?.documents?.find((item) => item?.id === show.id)
            if (showExists) {
                const removeShow = await removeFromWatchlist(String(showExists.$id));
                if (removeShow) {
                    toast.success(`${show.title} Has Been Removed From Your Watchlist.`);
                } else {
                    toast.error(`Sorry, A Problem Occurred. Try Again Later.`);
                }
                return
            }
        }
        const addShow = await addToWatchlist(show);
        if (addShow) {
            toast.success(`${show.title} Has Been Added To Your Watchlist.`);
        } else {
            toast.error(`Sorry, A Problem Occurred. Try Again Later.`);
        }
    };
    const handleAddOrRemoveShowInFavorite = async (show: IShowTypes) => {
        if ((favoriteData?.documents?.length ?? 0) > 0) {
            const showExists = favoriteData?.documents?.find((item) => item?.id === show.id)
            if (showExists) {
                const removeShow = await removeFromFavorite(String(showExists.$id));
                if (removeShow) {
                    toast.success(`${show.title} Has Been Removed From Your Favorites.`);
                } else {
                    toast.error(`Sorry, A Problem Occurred. Try Again Later.`);
                }
                return
            }
        }
        const addShow = await addToFavorite(show);
        if (addShow) {
            toast.success(`${show.title} Has Been Added To Your Favorites.`);
        } else {
            toast.error(`Sorry, A Problem Occurred. Try Again Later.`);
        }
    };


    const checkAuthUser = async () => {
        setIsLoading(true)
        try {
            const currentAccount = await getCurrentUser()
            if (currentAccount) {
                setUser({
                    id: currentAccount.$id,
                    name: currentAccount.name,
                    username: currentAccount.username,
                    email: currentAccount.email,
                    imageUrl: currentAccount.imageUrl,
                })
                setIsAuthenticated(true)
                return true
            }
            return false
        } catch (error) {
            console.error(error)
            return false
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        const watchlist = watchlistData?.documents?.map(({ id }) => Number(id)) || [];
        setAllWatchlisteIds(watchlist);
    
        const favorite = favoriteData?.documents?.map(({ id }) => Number(id)) || [];
        setAllFavoritesIds(favorite);
    }, [watchlistData, favoriteData])



    useEffect(() => {
        const cookieFallback = localStorage.getItem('cookieFallback')
        if (
            cookieFallback === "[]" ||
            cookieFallback === null ||
            cookieFallback === undefined
        ) {
            navigate("/sign-in")
        }
        checkAuthUser();
    }, [])



    const value = {
        user,
        setUser,
        isLoading,
        isAuthenticated,
        setIsAuthenticated,
        checkAuthUser,
        handleAddOrRemoveShowInWatchlist,
        isAddedToWatchlist,
        isRemovedFromWatchlist,
        handleAddOrRemoveShowInFavorite,
        isAddedToFavorite,
        isRemovedFromFavorite,
        allFavoritesIds,
        allWatchlistIds,
    }

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider



export const useUserContext = () => useContext(AuthContext)