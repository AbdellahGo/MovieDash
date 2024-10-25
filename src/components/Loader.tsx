import { loaderIcon } from '../assets'

const Loader = () => {
  return (
    <>
        <img src={loaderIcon} alt="loaderIcon" className="mx-auto animate-spin w-[28px]" />
    </>
  )
}

export default Loader