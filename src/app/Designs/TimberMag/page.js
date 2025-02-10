"use client";
import Header from "@/components/Header/header";
import Timber from "@/components/Timber/timber";
import Back from "@/components/Back/back";

export default function TimberMag() {

  return (
    <>
      <Header title="" />
        <div className="page-content hero-designs">
            <Timber/>
            <Back title="Back to Designs" route="Designs" />

        </div>
    </>
  );
}