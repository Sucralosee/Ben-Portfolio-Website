"use client";
import Header from "@/components/Header/header";
import WRCan from "@/components/WRCan/wrcan";
import Back from "@/components/Back/back";
import Foot from "@/components/Foot/foot";
import Overview from "@/components/Overview/overview";
import Project1 from "@/components/Project1/project1";


export default function WOT() {

  return (
    <div className="page-container">
        <Back title="Back to Designs" route="Designs" />
            <div className="page-content hero-designs">
            <div>
                <Project1
                    Head1="Wheel of Time Blog"
                    Head2="2024"
                    Head3=""
                    Head4="WordPress Web Design "
                />
                <Overview
                    Head=""
                    HeadContent=""
                    SubHead="As a long-time fan of The Wheel of Time by Robert Jordan, I embarked on a project to create a website dedicated to this iconic fantasy series."
                    Top1="Project Goals"
                    Content1="The main goal of the project was to design a visually engaging website that captured the epic scope and deep lore of The Wheel of Time. I wanted to create a platform that could organize and present character profiles, book summaries, and key locations in a way that felt immersive and accessible. Additionally, this project allowed me to experiment with WordPress themes, plugins, and customizations, ensuring that the site was not only visually appealing but also functional and easy to navigate."
                    Top2="What I Accomplished"
                    Content2="Customizing a WordPress theme to align with the aesthetics of the series. I also integrated various plugins to enhance the site’s interactivity, including features like an interactive map. Beyond design, I focused on optimizing the site for SEO and performance, ensuring fast loading times."
                    Top3=""
                    Content3=""
                    LogoAlt1="WordPress"
                    LogoAlt2="Adobe Photoshop"
                    LogoAlt3=""
                    LogoAlt4=""
                    LogoAlt5=""
                    RightImage="../image/WOT/WOTBlog.png"
                    RightVideo=""
                    Link1="https://theeyeoftheworld.altervista.org/"
                    LinkContent1="Link to the Blog"
                    Link2=""
                    LinkContent2=""
                />
            </div>
            <img src="../image/WOT/BlogLanding.png" className="overview-container case-image-wide " ></img>
            <img src="../image/WOT/BlogDown.png" className="overview-container case-image-wide " ></img>
            <Back title="Back to Designs" route="Designs" />
        </div>
        <Foot />
    </div>
  );
}