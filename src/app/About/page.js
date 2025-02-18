import Image from "next/image";
import Header from "@/components/Header/header";

import Menu from "@/components/Menu/menu";
import Foot from "@/components/Foot/foot";
import AboutMe from "@/components/AboutMe/aboutMe";

export const metadata = {
  title: "BL Porfolio | About",
  description: "About Ben Louis",
};


export default function About() {
  return (
    <div className="page-container">
      <Header title="About Me" />
      <div className="page-content hero-about">
        <AboutMe/>
      </div>
      <Foot />
    </div>
  );
}
