import CardItem from "@/small-component/CardItem";
import { Grid, Typography } from "@mui/material";

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
    <div className="container mx-auto px-4 py-10">
        <div>
            <h2 className="text-4xl font-bold text-center">Our Games</h2>
            <Typography variant="body1" className="text-center text-gray-500">
            As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects and magnificent animation that never cease to impress.
            </Typography>
        </div>
      <Grid container spacing={3}>
        {games.map((game, index) => (
          <Grid
            size={3}
            key={index}
            className={`${index % 4 === 1 || index % 4 === 3 ? "mt-10" : ""}`} // Dịch cột 2 và 4 xuống
          >
            <CardItem game={game} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Ourgames;
