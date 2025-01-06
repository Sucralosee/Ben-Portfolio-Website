import Image from "next/image";
import Header from "@/components/Header/header";
import Menu from "@/components/Menu/menu";

export const metadata = {
  title: "BL Porfolio | Home",
  description: "A portfolio website for Ben Louis",
};

export default function Home() {
  return (
    <>
      {/* <Menu/> */}
      <Header title="Home" />
      <div className="page-content hero">
        {/* <h1>test</h1> */}
      </div>
    </>
 
  );
}
