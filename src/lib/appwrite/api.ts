import { ID, Query } from "appwrite";
import { INewUser, IShowTypes } from "../../types";
import { account, appwriteConfig, avatars, database } from "./config";

export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name)

        if (!newAccount) throw Error

        const avatarUrl = avatars.getInitials(user.name)

        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username: user.username,
            imageUrl: avatarUrl,
        })

        return newUser
    } catch (error) {
        console.log(error);
        return error
    }
}

export async function signInAccount(user: { email: string, password: string }) {
    try {
        const session = await account.createEmailPasswordSession(user.email, user.password)
        return session
    } catch (error) {
        console.log(error);

    }
}

//! save user to db

export async function saveUserToDB(user: {
    accountId: string,
    name: string,
    email: string,
    username: string,
    imageUrl: URL,
}) {
    try {
        const newUser = await database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user
        )
        return newUser
    } catch (error) {
        console.log(error);

    }

}

//! get account
export async function getAccount() {
    try {
        const currentAccount = await account.get();

        return currentAccount;
    } catch (error) {
        console.log(error);
    }
}


// ============================== GET USER
export async function getCurrentUser() {
    try {
        const currentAccount = await getAccount();

        if (!currentAccount) throw Error;

        const currentUser = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal("accountId", currentAccount.$id)]
        );

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

// ============================== SIGN OUT
export async function signOutAccount() {
    try {
        const session = await account.deleteSession("current");
        return session;
    } catch (error) {
        console.log(error);
    }
}



//? ============================== Add show to watchlist and favorite

export async function addShowToWatchlist(show: IShowTypes) {
    try {
        const addToWatchlist = await database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.watchListCollectionId,
            ID.unique(),
            {
                creator: show.userId,
                id: show.id,
                type: show.type,
                title: show.title,
                image: show.image,
                rate: show.rate,
                releaseDate: show.releaseDate,
            }
        )
        return addToWatchlist
    } catch (error) {
        console.log(error);
    }
}
export async function addShowToFavorite(show: IShowTypes) {
    try {
        const addToFavorite = await database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.favoritesCollectionId,
            ID.unique(),
            {
                creator: show.userId,
                id: show.id,
                type: show.type,
                title: show.title,
                image: show.image,
                rate: show.rate,
                releaseDate: show.releaseDate,
            }
        )
        return addToFavorite
    } catch (error) {
        console.log(error);
    }
}
//? ============================== Get watchlist or favorite

export async function getWatchlist(userId: string) {
    try {
        const getWatchlist = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.watchListCollectionId,
            [Query.equal("creator", userId), Query.orderDesc("$createdAt")]
        )
        if (!getWatchlist) throw Error
        return getWatchlist
    } catch (error) {
        console.log(error);
    }
}

export async function getFavorite(userId: string) {
    try {
        const getFavorite = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.favoritesCollectionId,
            [Query.equal("creator", userId), Query.orderDesc("$createdAt")]
        )
        if (!getFavorite) throw Error
        return getFavorite
    } catch (error) {
        console.log(error);
    }
}

//? ============================== Remove show from watchlist or Favorite

export async function removeShowFromWatchlist(showId: string) {
    if (!showId) return
    try {
        const statusCode = await database.deleteDocument(
            appwriteConfig.databaseId,
            appwriteConfig.watchListCollectionId,
            showId
        )
        if (!statusCode) throw Error

        return {status: "Ok"}
    } catch (error) {
        console.log(error);
    }
}

export async function removeShowFromFavorite(showId: string) {
    if (!showId) return
    try {
        const statusCode = await database.deleteDocument(
            appwriteConfig.databaseId,
            appwriteConfig.favoritesCollectionId,
            showId
        )
        if (!statusCode) throw Error

        return {status: "Ok"}
    } catch (error) {
        console.log(error);
    }
}