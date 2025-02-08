"use client";
import { useEffect } from "react";
import Header from "@/components/Header/header";

import Menu from "@/components/Menu/menu";
import Poster from "@/components/Poster/poster";


export default function JapaneseClassics() {
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
        <Poster/>
      </div>
    </>
  );
}