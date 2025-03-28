"use client"

import { Grid, Typography } from "@mui/material"
import Image from "next/image"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import InputAdornments from "@/small-component/Input";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const Footer = () => {
    return (
        <div className="footer bg-stone-900 h-2/5">
            <Grid container size={12}>
                <Grid size={{ xs: 12, md: 5 }}>
                    <Image className="logo_footer" src={'images/White_logo.svg'} width={164} height={96} alt={""} />
                    <div className="icon_social">
                        <TwitterIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                    </div>
                </Grid>
                <Grid size={{ xs: 12, md: 3.5 }} className={'contact'}>
                    <Typography className="name_section">
                        Address
                    </Typography>
                    <div className="address">
                        <div className="icon_location">
                            <FmdGoodIcon />
                        </div>
                        <div className="specific_address">
                            <Typography>
                                Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US
                            </Typography>
                            <Typography>
                                20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam
                            </Typography>
                        </div>
                    </div>
                    <div className="contact">
                        <div className="phone_icon">
                            <PhoneAndroidIcon />
                        </div>
                        <div className="specific_address">
                            <Typography>
                                {'(+1) 555-0108-000 or (+236) 555-0108'}
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid size={{ xs: 12, md: 3.5 }} className={'contact'}>
                    <Typography className="name_section">
                        Subscribe
                    </Typography>
                    <div className="title">
                        <Typography>
                            Subscribe to our newsletter and be the first to know about our updates
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default Footer
