import { OurPartnerStyled } from "./style";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Carousel from "@/small-component/Slider";

const OurPartner = () => { 
  const t = useTranslations('partners')
  return (
    <OurPartnerStyled>
      <div className="title">
        <Typography variant="h2">{t('title')}</Typography>
      </div>
      <Carousel />
    </OurPartnerStyled>
  );
}
export default OurPartner;