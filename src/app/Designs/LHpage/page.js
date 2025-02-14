"use client";
import Header from "@/components/Header/header";
import LH from "@/components/LocalHarvest/LH";
import Back from "@/components/Back/back";
import Foot from "@/components/Foot/foot";


export default function LHpage() {

  return (
    <div className="page-container">
      <Header title="" />
        <div className="page-content hero-designs">
            <LH/>
            <Back title="Back to Designs" route="Designs" />
        </div>
        <Foot />
    </div>
  );
}