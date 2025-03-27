"use client";

import { Grid } from "@mui/material";
import CountdownTimer from "./component/CountdownTimer";
import InputAdornments from "@/small-component/Input";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { StyledBanner } from "@/styles";
import React from "react";

const Banner = () => {
  return (
    <StyledBanner>
      <Grid
        className="banner w-full"
        container
        size={12}
        style={{ paddingTop: "132px" }}
      >
        <CountdownTimer />
        <InputAdornments
          endAdornment={<ArrowForwardIcon />}
          placeholder={"Enter your email"}
          label={undefined}
        />
      </Grid>
    </StyledBanner>
  );
};
export default Banner;
