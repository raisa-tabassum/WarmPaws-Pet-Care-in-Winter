import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 3000 }}
      loop={true}
      navigation={true}
      //   pagination={{ clickable: true }}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <img
          src="https://cdn-fastly.petguide.com/media/2024/11/07/22551/how-do-i-keep-my-cat-warm-this-winter.jpg?size=1200x628"
          className="w-full h-[500px] md:h-[650px] object-cover"
          alt="slide 1"
        />
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <img
          src="https://newagepet.com/cdn/shop/articles/cat-jan25nl.jpg?v=1755713383&width=1100"
          className="w-full h-[500px] md:h-[650px] object-cover"
          alt="slide 1"
        />
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <img
          src="https://cdn-fastly.petguide.com/media/2025/10/21/00121/vet-bills-got-you-worried-tips-to-help-fund-emergency-pet-care.jpg?size=720x845&nocrop=1"
          className="w-full h-[500px] md:h-[650px] object-cover"
          alt="slide 1"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
