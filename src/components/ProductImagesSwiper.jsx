import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";

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
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img
                src={image.asset.url}
                alt="Kılıçlar Hırdavat Slider"
                className="mim-w-[300px] min-h-[456px]  "
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
