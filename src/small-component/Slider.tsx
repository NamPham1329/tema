"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useMediaQuery, useTheme } from "@mui/material";

const Carousel = () => {
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="carouselWrapper">
      <Swiper
        slidesPerView={isMobile ? 3 : 5}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <Image
            src="/images/logo/Rectangle 57.svg"
            width={260}
            height={100}
            alt={""}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image
            src="/images/logo/Rectangle 58.svg"
            width={260}
            height={100}
            alt={""}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image
            src="/images/logo/Rectangle 59.svg"
            width={260}
            height={100}
            alt={""}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image
            src="/images/logo/Rectangle 60.svg"
            width={260}
            height={100}
            alt={""}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image
            src="/images/logo/Rectangle 61.svg"
            width={260}
            height={100}
            alt={""}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image
            src="/images/logo/Rectangle 62.svg"
            width={260}
            height={100}
            alt={""}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image
            src="/images/logo/Rectangle 63.svg"
            width={260}
            height={100}
            alt={""}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
