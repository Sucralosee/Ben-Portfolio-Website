import Header from "@/components/Header/header";

import LH from "@/components/LocalHarvest/LH";
import Back from "@/components/Back/back";

export default function Projects() {
  return (
    <>
      <Header title="Projects" />
      <div className="page-content hero-projects">
        <LH />
      </div>
    </>
  );
}
