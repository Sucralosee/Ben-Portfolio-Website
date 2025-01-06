import Image from "next/image";
import Header from "@/components/Header/header";

import Menu from "@/components/Menu/menu";

export const metadata = {
  title: "BL Porfolio | Development",
  description: "A page of Development projects for Ben Louis",
};


export default function Development() {
  return (
    <div className="page-content hero-development">
      {/* <Menu /> */}
      <Header title="Development" />
    </div>
  );
}
