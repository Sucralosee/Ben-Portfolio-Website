import Image from "next/image";
import Header from "@/components/Header/header";

import Menu from "@/components/Menu/menu";

export const metadata = {
  title: "BL Porfolio | About",
  description: "About Ben Louis",
};


export default function About() {
  return (
    <>
      <Header title="About Me" />
      <div className="page-content hero-about">
      </div>
    </>
  );
}
