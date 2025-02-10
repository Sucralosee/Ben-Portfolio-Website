"use client";
import { useEffect } from "react";
import Header from "@/components/Header/header";
import Card from "@/components/Card/card";

const cardsData = [
  {
    titleItem: "Flare",
    subTitleItem: "Designer | Dev",
    cardYear: "2024",
    cardImage: "./image/Flare/HomeScreen.png",
    linkPath: "/Projects/FlareIDSP"
  },
  
  
];

export default function Projects() {
  return (
    <>
      <Header title="Projects" />
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