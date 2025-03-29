"use client"; // Đảm bảo component chạy trên Client

import CardItem from "@/small-component/CardItem";
import { Grid, Typography } from "@mui/material";
import { OurgameStyled } from "./style";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const games = [
  { title: "E-Space", image: "/images/card/Bitmap.svg" },
  { title: "Kingland", image: "/images/card/Bitmap (3).svg" },
  { title: "The Last Game", image: "/images/card/Bitmap (6).svg" },
  { title: "G-Dragon", image: "/images/card/Bitmap (9).svg" },
  { title: "Pirates", image: "/images/card/Bitmap (1).svg" },
  { title: "Witch Party", image: "/images/card/Bitmap (4).svg" },
  { title: "Rocky", image: "/images/card/Bitmap (7).svg" },
  { title: "Blue Fire", image: "/images/card/Bitmap (10).svg" },
  { title: "Magic Tree", image: "/images/card/Bitmap (2).svg" },
  { title: "Aborigines", image: "/images/card/Bitmap (5).svg" },
  { title: "Cinderella", image: "/images/card/Bitmap (8).svg" },
  { title: "Egypt Game", image: "/images/card/Bitmap (11).svg" },
];

const Ourgames = () => {
  const t = useTranslations("our_games");

  // ✅ Dùng useState để lưu trạng thái màn hình
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Dùng useEffect để kiểm tra kích thước màn hình (chỉ chạy trên Client)
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    checkScreenSize(); // Kiểm tra ngay khi component mount
    window.addEventListener("resize", checkScreenSize); // Lắng nghe sự thay đổi kích thước

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup event listener
  }, []);

  return (
    <OurgameStyled>
      <div className="content">
        <h2>{t("title")}</h2>
        <Typography variant="body1">{t("our_games_des")}</Typography>
      </div>
      <Grid container spacing={3}>
        {games.map((game, index) => {
          const isOffset = index % 4 === 1 || index % 4 === 3;
          return (
            <Grid
              size={{ xs: 6, sm: 3 }}
              key={index}
              sx={{
                position: "relative",
                top: isOffset ? (isMobile ? "36px" : "118px") : "0",
              }}
              className="card_item"
            >
              <CardItem game={game} />
            </Grid>
          );
        })}
      </Grid>
    </OurgameStyled>
  );
};

export default Ourgames;
