"use client";

import { Grid } from "@mui/material";
import CountdownTimer from "./component/CountdownTimer";
import { StyledBanner } from "@/styles";
import React from "react";

const Banner = () => {
  return (
    <StyledBanner>
      <Grid
        className="banner w-full"
        container
        size={12}
      >
        <CountdownTimer />
      </Grid>
    </StyledBanner>
  );
};
export default Banner;
