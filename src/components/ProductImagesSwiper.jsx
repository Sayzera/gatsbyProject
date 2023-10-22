import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// import required modules
import { Pagination, Navigation, Zoom } from "swiper/modules";
export default function ProductImagesSwiper(data) {
  const _images = data?.data?.images;

  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      zoom={true}
      navigation={true}
      modules={[Zoom, Navigation, Pagination]}
      className="mySwiper"
    >
      {_images?.map((image) => {
        return (
          <SwiperSlide key={Math.random() * 990}>
            <div className="swiper-zoom-container">
              <GatsbyImage
                image={getImage(image.asset)}
                alt="Kılıçlar Hırdavat Slider"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
