"use client";
import Foot from "@/components/Foot/foot";
import Header from "@/components/Header/header";
import JamesWebb from "@/components/JamesWebb/jamesWebb";
import Back from "@/components/Back/back";


export default function JWST() {

  return (
    <div className="page-container">
        <Back title="Back to Production" route="Production" />
        <div className="page-content hero-designs">
          <JamesWebb />
          <Back title="Back to Production" route="Production" />

        </div>
      <Foot />
    </div>
  );
}