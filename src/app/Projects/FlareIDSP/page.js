"use client";
import Header from "@/components/Header/header";
import Back from "@/components/Back/back";
import Flare from "@/components/Flare/flare";

export default function FlareIDSP() {

  return (
    <div className="page-container">
      <Header title="" />
      <div className="page-content hero-designs">
        <Flare />
        <Back title="Back to Projects" route="Projects" />
      </div>
      <Foot />
    </div>
  );
}