"use client";
import Header from "@/components/Header/header";
import Back from "@/components/Back/back";
import Flare from "@/components/Flare/flare";
import Foot from "@/components/Foot/foot";

export default function FlareIDSP() {

  return (
    <div className="page-container">
            <Back title="Back to Designs" route="Projects" />
            <div className="page-content hero-designs">
        <Flare />
        <Back title="Back to Projects" route="Projects" />
      </div>
      <Foot />
    </div>
  );
}