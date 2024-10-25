import { useEffect } from "react"
import { HomeMoviesHeroSection, LatestMovies, TopRatedMovies, TrendingMovies, UpcomingMovies } from "../../components"
import { useLocation } from "react-router-dom"


const Movies = () => {
    const {hash} = useLocation() 
    
    useEffect(() => {
        if (hash) {
          const sectionId = hash.replace('#', '');
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, [hash]);
    return (
        <div>
            <HomeMoviesHeroSection />
            <UpcomingMovies />
            <TrendingMovies />
            <LatestMovies />
            <TopRatedMovies />
        </div>
    )
}

export default Movies