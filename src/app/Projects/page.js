import Header from "@/components/Header/header";

import Project1 from "@/components/Project1/project1";

import LH from "@/components/LocalHarvest/LH";
import Timber from "@/components/Timber/timber";

export default function Projects() {
  return (
    <>
      <Header title="Projects" />
      <div className="page-content hero-projects">
            
        <LH />
        <Timber />
      </div>
    </>
  );
}
