"use client";

import { Typography } from "@mui/material";
import { StyledBanner } from "@/styles";
import React from "react";
import Timer from "./component/Timer";
import { useTranslations } from "next-intl";
import InputV2 from "@/small-component/InputV2";
import Image from "next/image";

const Banner = () => {
  const t = useTranslations();
  return (
    <StyledBanner>
      <div className="banner w-full">
        <Typography variant="h3" className="banner_title">
          {t("common.we_getting_ready")}
        </Typography>
        <div>
          <Timer duration={30 * 24 * 60 * 60 * 1000} />
          <div className="send_mail">
            <Typography
              variant="body1"
              className="description mt-6 text-center"
              sx={{ mb: 4 }}
            >
              {t("common.we_will_back")}
            </Typography>
            <InputV2 />
          </div>
        </div>
        <div
          className="image"
          style={{
            width: "fit-content",
            position: "absolute",
            bottom: "-140px",
          }}
        >
          <Image
            src="/images/ong tien 1.svg"
            alt="banner"
            width={860}
            height={860}
          />
        </div>
        {/* <CountdownTimer /> */}
      </div>
    </StyledBanner>
  );
};
export default Banner;
