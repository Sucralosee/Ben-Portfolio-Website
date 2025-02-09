"use client";
import Header from "@/components/Header/header";
import Poster from "@/components/Poster/poster";


export default function JapaneseClassics() {

  return (
    <>
      <Header title="Design" />
        <div className="page-content hero-designs">
        <Poster/>
      </div>
    </>
  );
}