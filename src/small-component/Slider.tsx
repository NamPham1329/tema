"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function GameSlider() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div className="container mx-auto p-5">
      <Slider {...settings}>
        <div className='item_slider'>
            <Image
              src="/images/logo/Rectangle 57.svg"
              width={260}
              height={100}
              alt={""}
            />
        </div>
        <div className='item_slider'>
            <Image
              src="/images/logo/Rectangle 58.svg"
              width={260}
              height={100}
              alt={""}
            />
        </div>
        <div className='item_slider'>
            <Image
              src="/images/logo/Rectangle 59.svg"
              width={260}
              height={100}
              alt={""}
            />
        </div>
        <div className='item_slider'>
            <Image
              src="/images/logo/Rectangle 60.svg"
              width={260}
              height={100}
              alt={""}
            />
        </div>
        <div className='item_slider'>
            <Image
              src="/images/logo/Rectangle 61.svg"
              width={260}
              height={100}
              alt={""}
            />
        </div>
        <div className='item_slider'>
            <Image
              src="/images/logo/Rectangle 62.svg"
              width={260}
              height={100}
              alt={""}
            />
        </div>
        <div className='item_slider'>
            <Image
              src="/images/logo/Rectangle 63.svg"
              width={260}
              height={100}
              alt={""}
            />
        </div>
      </Slider>
    </div>
  );
}
