import { Swiper } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ReactNode } from "react";
import HorizontalSwiperNavigation from './HorizontalSwiperNavigation';
type Props = {
    spaceBetween: number,
    swiperStyles?: string,
    children: ReactNode
    nextClasse: string,
    prevClasse: string
}

const HorizontalSwiper = ({ spaceBetween, swiperStyles, children, nextClasse, prevClasse }: Props) => {

    return (
        <div className="relative xl:mb-[100px] md:mb-50 mb-30">
            <Swiper
                breakpoints={{
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 4 },
                    1200: { slidesPerView: 5 },
                    1400: { slidesPerView: 6 },
                }}
                freeMode={true}
                loop={true}
                spaceBetween={spaceBetween}
                navigation={{
                    nextEl: `.${nextClasse}`,
                    prevEl: `.${prevClasse}`,
                }}
                modules={[Navigation, FreeMode]}
                className={`${swiperStyles}`}>
                {children}
            </Swiper>
            <HorizontalSwiperNavigation nextClasse={nextClasse} prevClasse={prevClasse}/>
        </div>
    )
}

export default HorizontalSwiper
