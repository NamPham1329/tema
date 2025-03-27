'use client'

import { Grid } from "@mui/material"
import CountdownTimer from "./component/CountdownTimer"
import InputAdornments from "@/small-component/Input"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const Banner = () => {
    return (
        <Grid className="banner bg-cyan-500 w-full" container xs={12}>
            <CountdownTimer />
            <InputAdornments endAdornment={(<ArrowForwardIcon />)} placeholder={'Enter your email'}/>
        </Grid>
    )
}
export default Banner
