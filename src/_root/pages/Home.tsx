import { useEffect } from "react";
import { HomeMoviesHeroSection, UpcomingMovies, LatestMovies, TopRatedMovies, TrendingMovies, HomeSeriesHeroSection, TopRatedSeries, SeriesStreamingToday, UpcomingSeries, TrendingSeries } from "../../components";



const Home = () => {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  })
  return (
    <div >
      <HomeMoviesHeroSection/>
      <UpcomingMovies/>
      <TrendingMovies/>
      <LatestMovies/>
      <TopRatedMovies/>
      <HomeSeriesHeroSection/>
      <UpcomingSeries/>
      <TrendingSeries/>
      <SeriesStreamingToday/>
      <TopRatedSeries/>
    </div>
  )
}

export default Home