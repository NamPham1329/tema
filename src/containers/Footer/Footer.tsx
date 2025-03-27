import { Container, Grid } from "@mui/material"
import Image from "next/image"

const Footer = () => {
    return (
        <div className="bg-stone-900 h-2/5">
            <Container>
                <Grid container>
                    <Grid item xs={3}>
                        <Image src={'images/logo.svg'} width={130} height={130} alt={""}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default Footer
