import GameSlider from "@/small-component/Slider";
import { OurPartnerStyled } from "./style";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const OurPartner = () => { 
  const t = useTranslations('partners')
  return (
    <OurPartnerStyled>
      <div className="title">
        <Typography variant="h2">{t('title')}</Typography>
      </div>
      <GameSlider />
    </OurPartnerStyled>
  );
}
export default OurPartner;