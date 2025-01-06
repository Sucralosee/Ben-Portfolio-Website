import Image from "next/image";
import Header from "@/components/Header/header";

import Menu from "@/components/Menu/menu";

export const metadata = {
  title: "BL Porfolio | About",
  description: "About Ben Louis",
};


export default function About() {
  return (
    <div className="page-content hero-about">
      {/* <Menu /> */}
      <Header title="About" />
      <div className="folder"></div>
    </div>
  );
}
