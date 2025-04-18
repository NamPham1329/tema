"use client";

import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import InputV2 from "@/small-component/InputV2";
import { Fragment } from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations()
  return (
    <Fragment>
      <div className="footer bg-stone-900 h-2/5">
        <Grid container size={12} spacing={5}>
          <Grid className="logo_social" size={{ xs: 12, md: 5 }}>
            <div>
              <Image
                className="logo_footer"
                src={"images/White_logo.svg"}
                width={164}
                height={96}
                alt={""}
              />
              <div className="icon_social">
                <TwitterIcon />
                <FacebookIcon />
                <InstagramIcon />
              </div>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 3.5 }} className={"contact"}>
            <Typography className="name_section">{t('common.address')}</Typography>
            <div className="address">
              <div className="icon">
                <FmdGoodIcon />
              </div>
              <div className="specific_address">
                <Typography>
                  Valletta Buildings, South Street, Valletta - VLT 1103 Malta,
                  US
                </Typography>
                <Typography>
                  {t('common.detail_address')}
                </Typography>
              </div>
            </div>
            <div className="phone">
              <div className="icon">
                <PhoneAndroidIcon />
              </div>
              <div className="specific_address">
                <Typography>
                  {"(+1) 555-0108-000 or (+236) 555-0108"}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 3.5 }} className={"contact"}>
            <Typography className="name_section">{t('common.subscribe')}</Typography>
            <div className="title">
              <Typography>
              {t('common.subscribe_des')}
              </Typography>
            </div>
            <InputV2 variantType={"outlined"} />
          </Grid>
        </Grid>
      </div>
      <div className="copy_right">
        <Typography className="text-center">2017 Copyright. Policy.</Typography>
      </div>
    </Fragment>
  );
};
export default Footer;
