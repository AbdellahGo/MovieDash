import { mapSrc } from "../constants"

const Map = () => {
  return (
    <div>
        <iframe src={mapSrc} loading="lazy" className="w-full h-[600px]" allowFullScreen></iframe>
    </div>
  )
}

export default Map