"use client";
import Header from "@/components/Header/header";
import Timber from "@/components/Timber/timber";
import Back from "@/components/Back/back";
import Foot from "@/components/Foot/foot";

export default function TimberMag() {

  return (
    <div className="page-container">
      <Header title="" />
        <div className="page-content hero-designs">
            <Timber/>
            <Back title="Back to Designs" route="Designs" />

        </div>
      <Foot />
    </div>
  );
}