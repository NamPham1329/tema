import AboutUs from "@/component/Aboutus";
import Banner from "@/component/Banner";
import Ourgames from "@/component/Ourgame";
import OurPartner from "@/component/OurPartner";
import Pinmap from "@/component/Pinmap";
import { Grid } from "@mui/material";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <Grid className="banner bg-cyan-500 w-full" container>
        <Banner />
      </Grid>
      <Grid container className="about_us">
        <AboutUs />
      </Grid>
      <Grid container className="pin_map">
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
