"use client";
import { useEffect } from "react";
import Header from "@/components/Header/header";

import Card from "@/components/Card/card";


export default function Designs() {

  return (
    <>
      <Header title="Design" />
        <div className="page-content hero-designs">
          <div className="containerOfCards">
            <Card 
                titleItem="Japanese Classics"
                subTitleItem="Magazine Design"
                cardYear="2024"

                cardImage="./image/Posters/Poster-Skyline.png"
                
                linkPath="/Designs/JapaneseClassics"
              />
              <Card 
                titleItem="Japanese Classics"
                subTitleItem="Magazine Design"
                cardYear="2024"

                cardImage="./image/Posters/Poster-Skyline.png"
                
                linkPath="/Designs/JapaneseClassics"
              />
          </div>

      </div>
    </>
  );
}