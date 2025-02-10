"use client";
import Header from "@/components/Header/header";
import WRCan from "@/components/WRCan/wrcan";
import Back from "@/components/Back/back";


export default function LHpage() {

  return (
    <>
      <Header title="" />
        <div className="page-content hero-designs">
            <WRCan/>
            <Back title="Back to Designs" route="Designs" />
        </div>
    </>
  );
}