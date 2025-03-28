import Image from "next/image";
import { PinmapStyled } from "./style";
import { Grid } from "@mui/material";

const Pinmap = () => {
  return (
    <PinmapStyled>
      <Grid container className="pin_map">
        <div className="image_top">
          <Image
            src="/images/Illustrator.svg"
            alt="pinmap"
            width={1920}
            height={1080}
          />
        </div>
        <div className="map">
          <Image
            src="/images/Pin-map.svg"
            alt="pinmap"
            width={1920}
            height={1080}
          />
        </div>
      </Grid>

    </PinmapStyled>
  );
};
export default Pinmap;
