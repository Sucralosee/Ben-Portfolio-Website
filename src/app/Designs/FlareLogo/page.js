"use client";
import Header from "@/components/Header/header";
import Back from "@/components/Back/back";
import FlareBrand from "@/components/FlareBrand/flarebrand";
import Foot from "@/components/Foot/foot";

export default function FlareLogo() {

  return (
    <div className="page-container">
      <Header title="" />
        <div className="page-content hero-designs">
            <FlareBrand/>
            <Back title="Back to Flare Case Study" route="Projects/FlareIDSP" />
            <Back title="Back to Designs" route="Designs" />
        </div>
      <Foot />
    </div>
  );
}