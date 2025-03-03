// import { useEffect, useState } from "react";
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

function UpperCarousel() {
  const images = [
    { id: 1, src: "/suit1.jpg", alt: "Image 1" },
    { id: 2, src: "/suit2.jpg", alt: "Image 2" },
    { id: 3, src: "/suit1.jpg", alt: "Image 3" },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      <button
        className="swiper-button-prev custom-prev"
        style={{ color: "#E07A5F" }}
      ></button>
      <button
        className="swiper-button-next custom-next"
        style={{ color: "#E07A5F" }}
      ></button>

      {images.map((item) => (
        <SwiperSlide key={item.id}>
          <img
            src={item.src}
            alt={item.alt}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "contain",
              backgroundColor: "#E6D5B8",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default UpperCarousel;
