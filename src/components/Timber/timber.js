"use client";
import React, { useEffect, useRef,useState } from "react";

import Project1 from "../Project1/project1";
import "./timber.css";

import gsap from "gsap";
import Overview from "../Overview/overview";

const Timber = ({

    LogoImage1 = "/image/Tools/ID.png",
    LogoAlt1 = "indesign",
    LogoImage2 = "/image/Tools/PS.png",
    LogoAlt2 = "photoshop",
    LogoImage3 = "/image/Tools/AI.png",
    LogoAlt3 = "illsutrator",
    LogoImage4 = "/image/Tools/Figma.webp",
    LogoAlt4 = "",
    LogoImage5 = "",
    LogoAlt5 = "",

    RightImage = "./image/Timber/TimberHandMag.png",
    RightVideo = "",
}) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1200);
      };
  
      window.addEventListener("resize", handleResize);
      handleResize(); // Check initial screen size
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    const fadeRefs = useRef([]);

    useEffect(() => {
        gsap.set(fadeRefs.current, {
            y: 75,
            opacity: 0
        });

        const handleScroll = () => {
            fadeRefs.current.forEach((ref) => {
                const rect = ref.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    gsap.to(ref, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power4.out"
                    });
                } else {
                    gsap.to(ref, {
                        y: 75,
                        opacity: 0,
                        duration: 1,
                        ease: "power4.out"
                    });
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>

            <Project1
                Head1 = "Timber"
                Head2 = "2024" 
                Head3 = "Magazine Design" 
                Head4 = "My Role(s): Editorial Design, Research, Layout Design"
            />

            <Overview 
                Head="Overview"
                HeadContent = "Timber explores the intersection of design and editorial content through both print and digital magazine formats, examining wooden architecture and environmental narratives from concept to execution."
                Top1 = "Logo Design"
                Content1 = "The logo's staggered, layered design elements mirror stacked timber and architectural forms, reinforcing the magazine's focus on wooden architecture. A contemporary sans-serif typeface ensures optimal readability while maintaining strong architectural presence in the visual identity."
                Top2 = "Color Choices"
                Content2 = "The color palette employs a warm blue to evoke calmness, stability, and trust - qualities that reflect the endurance of wooden structures and the natural world. Light orange accents represent energy, warmth, and urgency, speaking to the threat of wildfires. This blue-orange complementary pairing, frequently found in nature, creates a striking visual balance and delivers strong emotional impact."
                Top3 = "Layout Design"
                Content3 = "The page layouts balance aesthetic appeal with functional readability through clean, structured design principles. A carefully crafted framework seamlessly integrates textual and visual elements, creating an immersive magazine experience that serves both form and function."
                LogoImage1 = {LogoImage1}
                LogoAlt1={LogoAlt1}
                LogoImage2={LogoImage2}
                LogoAlt2={LogoAlt2}
                LogoImage3={LogoImage3}
                LogoAlt3={LogoAlt3}
                LogoImage4={LogoImage4}
                LogoAlt4={LogoAlt4}
                LogoImage5={LogoImage5}
                LogoAlt5={LogoAlt5}

                Link1 = ""
                LinkContent1=""
                Link2 = ""
                LinkContent2 = ""

                RightImage={RightImage}
                RightVideo={RightVideo}
            />

            <div className="timber-container">
                <h4 className="SubHead">Digital Version</h4>
                {isMobile && <p className="horizontal-view Pop20">Best viewed horizontally</p>}
                <iframe 
                    src="https://indd.adobe.com/embed/44584cf8-4349-4ad7-b5fb-497ac28fd021?startpage=1&allowFullscreen=true" 
                    className="timber-frame" 
                    frameborder="0" 
                    allowfullscreen=""
                ></iframe>
            </div>   

            <div className="timber-container">
                <h4 className="SubHead">Spreads of the Print Version</h4>
                <img 
                    src="/image/Timber/TimberSpreadMag.png"
                    width={400} height={400}
                    className="timber-spread"
                />
            </div>
     
        </>
    )
}

export default Timber;