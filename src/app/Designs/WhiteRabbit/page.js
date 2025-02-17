"use client";
import Header from "@/components/Header/header";
import WRCan from "@/components/WRCan/wrcan";
import Back from "@/components/Back/back";
import Foot from "@/components/Foot/foot";


export default function LHpage() {

  return (
    <div className="page-container">
            <Back title="Back to Designs" route="Designs" />
            <div className="page-content hero-designs">
            <WRCan/>
            <Back title="Back to Designs" route="Designs" />
        </div>
        <Foot />
    </div>
  );
}