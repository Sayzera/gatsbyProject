import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useSliderData from "../hooks/useSliderData";
import { Link } from "gatsby";

function WithStyles({ image, title, slug }) {
  return (
    <Link to={`urunler/?categories=${slug}`}>
      <div className="w-[115px] flex flex-col items-center justify-center">
        <img
          src={image}
          alt="Kılıçlar Hırdavat Slider"
          style={{
            border: "1px solid #e6e6e6",
            borderRadius: "50%",
            boxSizing: "border-box",
            display: "block",
            width: "68px",
            height: "68px",
            margin: 0,
            transition: "all 0.3s ease 0s",
            objectFit: "cover",
            userSelect: "none",
          }}
        />
        <p className="text-center slider-item-span font-bold">{title}</p>
      </div>
    </Link>
  );
}
export default function Slider() {
  const data = useSliderData();

  const _data = data?.edges;

  return (
    <div
      className="
      overflow-x-auto	
      "
    >
      <Carousel
        additionalTransfrom={0}
        scrollable={true}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        // customLeftArrow={<div className="custom-left-arrow"></div>}
        // customRightArrow={<div className="custom-right-arrow"></div>}
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 8,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl="false"
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {_data.map((item) => (
          <WithStyles
            key={item.node.category_name}
            image={item.node.image.asset.url}
            title={item.node.category_name}
            slug={item.node.slug.current}
          />
        ))}
      </Carousel>
    </div>
  );
}
