import { ReactNode } from "react"
import { Swiper } from "swiper/react"
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import HorizontalSwiperNavigation from "./HorizontalSwiperNavigation";

type Props = {
  swiperStyles?: string,
  children: ReactNode
  nextClasse: string,
  prevClasse: string
}

const BannerSwiperSlider = ({ nextClasse, prevClasse, swiperStyles, children }: Props) => {
  return (
    <div className="relative xl:mb-[100px] md:mb-50 mb-30 h-screen">
      <Swiper className={`${swiperStyles}  h-full`}
        loop={true}
        speed={600}
        autoplay={{ delay: 2000 }}
        navigation={{
          nextEl: `.${nextClasse}`,
          prevEl: `.${prevClasse}`,
        }}
        modules={[Navigation, Autoplay]}>
        {children}
      </Swiper>
      <HorizontalSwiperNavigation nextClasse={nextClasse}
        prevClasse={prevClasse} prevStyles="xl:left-[70px] md:left-[20px]" nextStyles="xl:right-[70px] md:right-[20px]" />
    </div>
  )
}

export default BannerSwiperSlider