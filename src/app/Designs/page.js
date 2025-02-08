"use client";
import { useEffect } from "react";
import Header from "@/components/Header/header";

import Menu from "@/components/Menu/menu";
import Poster from "@/components/Poster/poster";
import Card from "@/components/Card/card";


export default function Designs() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Header title="Design" />
        <div className="page-content hero-designs">

        <Card 
            titleItem="Japanese Classics"
            subTitleItem="Magazine Design"
            cardYear="2024"

            cardImage="./image/Posters/Poster-Skyline.png"
            
            linkPath="/Designs/JapaneseClassics"
          />
      </div>
    </>
  );
}