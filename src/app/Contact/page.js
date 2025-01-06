import Image from "next/image";
import Header from "@/components/Header/header";

import Menu from "@/components/Menu/menu";

export const metadata = {
  title: "BL Porfolio | Contact",
  description: "A page to contact Ben Louis",
};


export default function Contact() {
  return (
    <>
      <Header title="Contact Me" />
      <div className="page-content hero-contact">
      </div>
    </>
  );
}
