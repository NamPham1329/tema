"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function GameSlider({ listItem }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="container mx-auto p-5">
      <Slider {...settings}>
        <div>
            <Image
              src="/images/logo/Rectangle 57.svg"
              width={100}
              height={100}
              alt={""}
            />
        </div>
        <div>
            <Image
              src="/images/logo/Rectangle 58.svg"
              width={100}
              height={100}
              alt={""}
            />
        </div>
        <div>
            <Image
              src="/images/logo/Rectangle 59.svg"
              width={100}
              height={100}
              alt={""}
            />
        </div>
        <div>
            <Image
              src="/images/logo/Rectangle 60.svg"
              width={100}
              height={100}
              alt={""}
            />
        </div>
        <div>
            <Image
              src="/images/logo/Rectangle 61.svg"
              width={100}
              height={100}
              alt={""}
            />
        </div>
        <div>
            <Image
              src="/images/logo/Rectangle 62.svg"
              width={100}
              height={100}
              alt={""}
            />
        </div>
        <div>
            <Image
              src="/images/logo/Rectangle 63.svg"
              width={100}
              height={100}
              alt={""}
            />
        </div>
      </Slider>
    </div>
  );
}
