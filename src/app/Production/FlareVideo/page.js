"use client";
import Header from "@/components/Header/header";
import Back from "@/components/Back/back";
import FlareBrand from "@/components/FlareBrand/flarebrand";
import Foot from "@/components/Foot/foot";
import FlarePromo from "@/components/FlarePromo/flarePromo";

export default function FlareVideo() {

  return (
    <div className="page-container">
        <Back title="Back to Production" route="Production" />
        <div className="page-content hero-designs">
        <FlarePromo />
        <Back title="Back to Production" route="Production" />
        </div>
      <Foot />
    </div>
  );
}