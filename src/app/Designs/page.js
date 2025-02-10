"use client";
import { useEffect } from "react";
import Header from "@/components/Header/header";
import Card from "@/components/Card/card";

const cardsData = [
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
    cardImage: "./image/Timber/TimberHandMag.png",
    linkPath: "/Designs/TimberMag"
  },
  {
    titleItem: "Local Harvest",
    subTitleItem: "UX / UI Design",
    cardYear: "2024",
    cardImage: "./image/LH-image/HomeLH.png",
    linkPath: "/Designs/LHpage",
  },  
  {
    titleItem: "White Rabbit Liquer",
    subTitleItem: "Can Design",
    cardYear: "2024",
    cardImage: "./image/Can/WRCan.png",
    linkPath: "/Designs/WhiteRabbit"
  },
  
];

export default function Designs() {
  return (
    <>
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
    </>
  );
}