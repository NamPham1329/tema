"use client"

import { Box, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import { AboutUsStyled } from "./style";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Fragment>
      <AboutUsStyled>
        <Grid container spacing={5} size={{ xs: 12 }}>
          <Grid size={{ xs: 12, sm: 6 }} className="about_us_info">
            <Typography variant="h3" component="h2" className="about_us">
              About Us
            </Typography>
            <Typography variant="h6" component="h3" className="des">
              Browse our selection of free online games and have a great time without leaving the site! Our Kids Games option also includes game reviews, extensive game cheats and walkthroughs, and much more. We have exclusive free downloads, videos, and articles as well. Etech reviews the most popular kids games from all the most popular video gaming platforms, so you don’t need to search around for fun anywhere else on the Internet. Explore a whole new world of gaming on Etech.
            </Typography>
            <div className="total_users">
              <Typography variant="h4" className="flex">
                600
                <p>M</p>
                +
              </Typography>
              <Typography variant="h6" component="h5">
                Users
              </Typography>
            </div>
            <div className="total_games">
              <Typography variant="h4" className="flex">
                135+
              </Typography>
              <Typography variant="h6" component="h5">
                Games
              </Typography>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} className="services_info_box">
            <Box className="services_info" sx={{ backgroundColor: "#EEEEEE" }}>
              <Grid size={12} container spacing={2} display="flex">
                <Grid className='icon' size={2}>
                  <div>
                    <Image src="/images/icon/calendar-tick.svg" alt="icon1" width={24} height={24.5} />
                  </div>
                </Grid>
                <Grid className='service_content' size={10}>
                  <Typography variant="h6" component="h5" mb={1}>
                    24 - Hour
                  </Typography>
                  <Typography className="description" variant="body1" component="p">
                    24/7 access ensures operators' businesses runs smoothly all year long.
                  </Typography>
                </Grid>
              </Grid>
              <Grid size={12} container spacing={2}>
                <Grid className='icon' size={2}>
                  <div>
                    <Image src="/images/icon/pen-tool-2.svg" alt="icon1" width={24} height={24.5} />
                  </div>
                </Grid>
                <Grid className='service_content' size={10}>
                  <Typography variant="h6" component="h5" mb={1}>
                    Design
                  </Typography>
                  <Typography className="description" variant="body1" component="p">
                    Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay.
                  </Typography>
                </Grid>
              </Grid>
              <Grid size={12} container spacing={2}>
                <Grid className='icon' size={2}>
                  <div>
                    <Image src="/images/icon/people.svg" alt="icon1" width={24} height={24.5} />
                  </div>
                </Grid>
                <Grid className='service_content' size={10}>
                  <Typography variant="h6" component="h5" mb={1}>
                    Team
                  </Typography>
                  <Typography className="description" variant="body1" component="p">
                    Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </AboutUsStyled>
    </Fragment>
  );
};
export default AboutUs;
