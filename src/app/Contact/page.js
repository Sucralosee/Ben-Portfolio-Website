import Image from "next/image";
import Header from "@/components/Header/header";

import Menu from "@/components/Menu/menu";
import Foot from "@/components/Foot/foot";
import ContactMe from "@/components/ContactMe/contactMe";

export const metadata = {
  title: "BL Porfolio | Contact",
  description: "A page to contact Ben Louis",
};


export default function Contact() {
  return (
    <div className="page-container">
      <Header title="Contact Me" />
      <div className="page-content hero-contact">
        <ContactMe />
      </div>
      <Foot />
    </div>
  );
}
