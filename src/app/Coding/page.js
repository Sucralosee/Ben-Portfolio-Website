import Image from "next/image";
import Header from "@/components/Header/header";
import General from "@/components/General/General";

export const metadata = {
  title: "BL Porfolio | Coding",
  description: "A page of Development projects for Ben Louis",
};

const Coding = ({ }) => {
  return (
    <>
      <Header title="Coding" />
      <div className="page-content hero-development">
        <h3>A look at some of the projects that I have worked on during</h3>
        <General 
          Topic1="Front-End Dev" 
          Topic2="Flare" 
          Topic3="Developer" 
          Topic4="Flare Blog" 
          Topic5="UX/UI Dev" 
          Topic6="WaddleOn" 
        />
        <General 
          Topic1="Front-End Dev" 
          Topic2="Flare" 
          Topic3="Developer" 
          Topic4="Flare Blog" 
          Topic5="UX/UI Dev" 
          Topic6="WaddleOn" 
        />
      </div>
    </>
  );
}

export default Coding;