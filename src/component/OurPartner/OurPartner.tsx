import GameSlider from "@/small-component/Slider";

const OurPartner = () => { 
    const listItem = [
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
  return (
    <div>
      <GameSlider listItem={listItem}/>
    </div>
  );
}
export default OurPartner;