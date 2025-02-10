"use client";
import Header from "@/components/Header/header";
import Poster from "@/components/Poster/poster";
import Back from "@/components/Back/back";


export default function JapaneseClassics() {

  return (
    <>
      <Header title="" />
        <div className="page-content hero-designs">
        <Poster/>
        <Back title="Back to Designs" route="Designs" />
      </div>
    </>
  );
}