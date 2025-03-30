"use client";

import { Box, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import { AboutUsStyled } from "./style";
import Image from "next/image";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("about_us");
  return (
    <Fragment>
      <AboutUsStyled>
        <Grid container spacing={5} size={{ xs: 12 }}>
          <Grid size={{ xs: 12, sm: 6 }} className="about_us_info">
            <Typography variant="h3" component="h2" className="about_us">
              {t("title")}
            </Typography>
            <Typography variant="h6" component="h3" className="des">
              {t("description")}
            </Typography>
            <Grid container size={12} className="statistical">
              <Grid size={{ xs: 6, md: 12 }} className="total_users">
                <div className="number-container">
                  600<span className="small-text">M</span>+
                </div>
                <Typography variant="h6" component="h5">
                  {t("users")}
                </Typography>
              </Grid>
              <Grid size={{ xs: 6, md: 12 }} className="total_games">
                <div className="number-container">135+</div>
                <Typography variant="h6" component="h5" mt={2}>
                  {t("games")}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} className="services_info_box">
            <Box className="services_info" sx={{ backgroundColor: "#EEEEEE" }}>
              <Grid size={12} container spacing={2} display="flex">
                <Grid className="icon" size={2}>
                  <div>
                    <Image
                      src="/images/icon/calendar-tick.svg"
                      alt="icon1"
                      width={24}
                      height={24.5}
                    />
                  </div>
                </Grid>
                <Grid className="service_content" size={10}>
                  <Typography variant="h6" component="h5" mb={1}>
                    {`${t("hour")}`}
                  </Typography>
                  <Typography
                    className="description"
                    variant="body1"
                    component="p"
                  >
                    {t("hour_des")}
                  </Typography>
                </Grid>
              </Grid>
              <Grid size={12} container spacing={2}>
                <Grid className="icon" size={2}>
                  <div>
                    <Image
                      src="/images/icon/pen-tool-2.svg"
                      alt="icon1"
                      width={24}
                      height={24.5}
                    />
                  </div>
                </Grid>
                <Grid className="service_content" size={10}>
                  <Typography variant="h6" component="h5" mb={1}>
                    {t("design")}
                  </Typography>
                  <Typography
                    className="description"
                    variant="body1"
                    component="p"
                  >
                    {t("design_des")}
                  </Typography>
                </Grid>
              </Grid>
              <Grid size={12} container spacing={2}>
                <Grid className="icon" size={2}>
                  <div>
                    <Image
                      src="/images/icon/people.svg"
                      alt="icon1"
                      width={24}
                      height={24.5}
                    />
                  </div>
                </Grid>
                <Grid className="service_content" size={10}>
                  <Typography variant="h6" component="h5" mb={1}>
                    {t("team")}
                  </Typography>
                  <Typography
                    className="description"
                    variant="body1"
                    component="p"
                  >
                    {t("team_des")}
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
