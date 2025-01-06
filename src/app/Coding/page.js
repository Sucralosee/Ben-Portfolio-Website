import Image from "next/image";
import Header from "@/components/Header/header";

import Menu from "@/components/Menu/menu";

export const metadata = {
  title: "BL Porfolio | Coding",
  description: "A page of Development projects for Ben Louis",
};


export default function Coding() {
  return (
    <>
      <Header title="Coding" />
      <div className="page-content hero-development">
      </div>
    </>
  );
}
