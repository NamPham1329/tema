import CardItem from "@/small-component/CardItem";
import { Grid, Typography } from "@mui/material";
import { OurgameStyled } from "./style";

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
  return (
    <OurgameStyled>
      <div className="content">
        <h2>Our Games</h2>
        <Typography variant="body1">
          As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects and magnificent animation that never cease to impress.
        </Typography>
      </div>
      <Grid container spacing={3}>
        {games.map((game, index) => (
          <Grid
            size={3}
            key={index}
            sx={{
              position: "relative",
              top: index % 4 === 1 || index % 4 === 3 ? "118px" : "0",
            }}
            className="card_item"
          >
            <CardItem game={game} />
          </Grid>
        ))}
      </Grid>
    </OurgameStyled>
  );
};
export default Ourgames;
