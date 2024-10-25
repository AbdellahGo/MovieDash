import { useEffect } from "react"
import { HomeSeriesHeroSection, SeriesStreamingToday, TopRatedSeries, TrendingSeries, UpcomingSeries } from "../../components"

const Series = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
    return (
        <div>
            <HomeSeriesHeroSection />
            <UpcomingSeries />
            <TrendingSeries />
            <SeriesStreamingToday />
            <TopRatedSeries />
        </div>
    )
}

export default Series