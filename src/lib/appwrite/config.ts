import { Account, Avatars, Client, Databases } from "appwrite";



export const appwriteConfig = {
    url: import.meta.env.VITE_APPWRITE_URL,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    favoritesCollectionId: import.meta.env.VITE_APPWRITE_FAVORITES_COLLECTION_ID,
    watchListCollectionId: import.meta.env.VITE_APPWRITE_WATCHLIST_COLLECTION_ID,
  };
  



export const client = new Client()

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client)
export const database = new Databases(client)
export const avatars = new Avatars(client);
