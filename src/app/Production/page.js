"use client"

import Header from "@/components/Header/header";
import Foot from "@/components/Foot/foot";
import Card from "@/components/Card/card";

const cardsData = [
  {
    titleItem: "Flare Promotional Video",
    subTitleItem: "Video / Audio / Color Editing",
    cardYear: "2024",
    cardImage: "./image/Flare/Flare-PP.png",
    linkPath: "/Production/FlareVideo"
  },
  {
    titleItem: "James Web Space Telescope ",
    subTitleItem: "Motion Graphics / Asset Creation",
    cardYear: "2024",
    cardImage: "./image/JWST/JWST-AE.png",
    linkPath: "/Production/JWST"
  },
  
  
];

export default function Production() {
  return (
    <div className="page-container">
      <Header title="Production" />
      <div className="page-content hero-contact">
        <div className="containerOfCards">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                titleItem={card.titleItem}
                subTitleItem={card.subTitleItem}
                cardYear={card.cardYear}
                cardImage={card.cardImage}
                linkPath={card.linkPath}
              />
            ))}

          </div>

      </div>
      <Foot />
    </div>
  );
}
