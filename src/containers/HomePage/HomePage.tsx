import AboutUs from "@/component/Aboutus";
import Banner from "@/component/Banner";
import Ourgames from "@/component/Ourgame";
import OurPartner from "@/component/OurPartner";
import Pinmap from "@/component/Pinmap";
import { Grid } from "@mui/material";
import React from "react";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <Grid className="banner w-screen" container>
        <Banner />
      </Grid>
      <Grid container className="about_us" justifyContent={'center'}>
        <AboutUs />
      </Grid>
      <Grid container className="pin_map" justifyContent={'center'}>
        <Pinmap />
      </Grid>
      <Grid container className="our_games">
        <Ourgames />
      </Grid>
      <Grid container className="our_partner">
        <OurPartner />
      </Grid>
    </Fragment>
  );
};
export default HomePage;
