import Image from "next/image";
import Header from "@/components/Header/header";

import Menu from "@/components/Menu/menu";

export const metadata = {
  title: "BL Porfolio | Production",
  description: "A page to contact Ben Louis",
};


export default function Production() {
  return (
    <>
      <Header title="Production" />
      <div className="page-content hero-contact">
      </div>
    </>
  );
}
