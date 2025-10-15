"use client";
import { useEffect } from "react";
import Header from "@/components/Header/header";
import Card from "@/components/Card/card";
import Foot from "@/components/Foot/foot";

const cardsData = [
  {
    titleItem: "Flare Branding",
    subTitleItem: "Brand Design",
    cardYear: "2024",
    cardImage: "./image/LogoFlare/FlareLogoMockup.png",
    linkPath: "/Designs/FlareLogo"
  },
  {
    titleItem: "Japanese Classics",
    subTitleItem: "Poster Design",
    cardYear: "2024",
    cardImage: "./image/Posters/Poster-Skyline.png",
    linkPath: "/Designs/JapaneseClassics"
  },
  {
    titleItem: "Timber",
    subTitleItem: "Magazine Design",
    cardYear: "2024",
    cardImage: "./image/Timber/timberMockup-S.png",
    linkPath: "/Designs/TimberMag"
  },
  // {
  //   titleItem: "Wheel of Time Blog",
  //   subTitleItem: "WordPress Design",
  //   cardYear: "2024",
  //   cardImage: "./image/WOT/WOTBlog.png",
  //   linkPath: "/Designs/WOT"
  // },
  {
    titleItem: "Local Harvest",
    subTitleItem: "UX / UI Design",
    cardYear: "2024",
    cardImage: "./image/LH-image/HomeLH.png",
    linkPath: "/Designs/LHpage",
  },  
  {
    titleItem: "White Rabbit Liqueur",
    subTitleItem: "Can Design",
    cardYear: "2024",
    cardImage: "./image/Can/WRCan-S.png",
    linkPath: "/Designs/WhiteRabbit"
  },


  
];

export default function Designs() {
  return (
    <div className="page-container">
      <Header title="Designs" />
      <div className="page-content hero-designs">
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