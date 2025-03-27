import { Grid, Typography } from "@mui/material";
import { Fragment } from "react";

const AboutUs = () => {
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h3" component="h2">
            About Us
          </Typography>
          <Typography variant="h6" component="h3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
            amet orci. Aenean dignissim pellentesque felis.
          </Typography>
          <div className="total_users">
            <Typography variant="h4" component="h4" className="flex">
              600
              <p style={{fontSize: "12px", alignSelf: 'end'}}>M</p>
              +
            </Typography>
            <Typography variant="h6" component="h5">
              Users
            </Typography>
          </div>
          <div className="total_games">
            <Typography variant="h4" component="h4" className="flex">
              135+
            </Typography>
            <Typography variant="h6" component="h5">
              Games
            </Typography>
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <p className="text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
            amet orci. Aenean dignissim pellentesque felis.
          </p>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default AboutUs;
