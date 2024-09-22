import { ID, Query } from "appwrite";
import { INewUser } from "../../types";
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