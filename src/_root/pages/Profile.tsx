import { useEffect, useState } from "react"
import { Favorites, ProfileDetails, Watchlist } from "../../components"

const Profile = () => {
    const [watchlistOrFavorites, setWatchlistOrFavorites] = useState<'watchlist' | 'favorites'>('watchlist')
    const buttonStyles = 'py-8 px-20 text-body-color text-16 hover:text-white transition-colors font-medium relative group'
    const spanStyles = `group-hover:w-full  transition-all absolute h-[4px] bg-primary bottom-0 left-0`
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
        <div className="profile-page xl:pb-[100px] md:pb-[50px] pb-30">
            <ProfileDetails />
            <div className="xl:px-[100px] px-16">
                <div className="flex items-center justify-center mb-8 gap-20">
                    <button className={`${buttonStyles}`}
                        onClick={() => setWatchlistOrFavorites('watchlist')}>
                        Watchlist
                        <span className={`${spanStyles} ${watchlistOrFavorites === 'watchlist' ? 'w-full' : 'w-0'}`} />
                    </button>
                    <button className={`${buttonStyles}`}
                        onClick={() => setWatchlistOrFavorites('favorites')}>
                        Favorites
                        <span className={`${spanStyles} ${watchlistOrFavorites === 'favorites' ? 'w-full' : 'w-0'}`} />
                    </button>
                </div>
                <div>
                    <div className="flex items-center my-24">
                        <h5 className="md:text-[21px] text-white capitalize">{watchlistOrFavorites === 'watchlist' ? 'My Watchlist' : 'My Favorites'}</h5>
                    </div>
                    {watchlistOrFavorites === 'watchlist' && (
                        <Watchlist />
                    )}
                    {watchlistOrFavorites === 'favorites' && (
                        <Favorites />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile