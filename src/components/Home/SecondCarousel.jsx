"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SecondCarousel = () => {
  const images = [
    { id: 1, src: "/suit1.jpg", alt: "Light Brown Suit" },
    { id: 2, src: "/suit2.jpg", alt: "Medium Brown Suit" },
    { id: 3, src: "/suit3.jpg", alt: "Black Suit" },
    { id: 4, src: "/suit4.jpg", alt: "Green Suit" },
  ];

  return (
    <div>
      <p className="p-2 text-2xl font-semibold text-center text-orange-500">
        Products In Sale
      </p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={4}
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
            <div className="text-red-500 font-semibold text-center">
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "contain",
                  backgroundColor: "#E07A5F",
                  color: "#FFFFFF",
                }}
              />
              20% off
            </div>
            <p
              style={{
                textAlign: "center",
                color: "#3D3D3D",
                marginTop: "10px",
              }}
            >
              {item.alt}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SecondCarousel;
