import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface Game {
  image: string;
  title: string;
}

const CardItem = ({ game }: { game: Game }) => {
  return (
    <Card className="relative rounded-xl overflow-hidden shadow-lg">
      <CardMedia
        component="img"
        height="250"
        image={game.image}
        alt={game.title}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      <CardContent className="game absolute bottom-4 left-4 right-4 text-white">
        <Typography variant="h5" className="font-bold name">
          {game.title}
        </Typography>
        <Typography variant="body2" className=" description text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CardItem;
