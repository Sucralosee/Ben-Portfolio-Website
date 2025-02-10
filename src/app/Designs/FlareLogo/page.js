"use client";
import Header from "@/components/Header/header";
import Back from "@/components/Back/back";
import Flare from "@/components/Flare/flare";

export default function FlareLogo() {

  return (
    <>
      <Header title="" />
        <div className="page-content hero-designs">
            <Flare/>
            <Back title="Back to Projects" route="Projects" />

        </div>
    </>
  );
}