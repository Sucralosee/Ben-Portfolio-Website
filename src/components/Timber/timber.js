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
                HeadContent = "Timber was a creative look into the design and copywriting experience of creating a magazine from the ground up. For both a print version and a digital version"
                SubHead = ""
                Top1 = "Logo Design"
                Content1 = "The staggered, layered effect of the logo resembles stacked timber or architectural elements. I did this to reinforce the magazine's focus on wooden architecture. Additionally, the sans-serif typeface is clean and contemporary, ensuring readability while maintaining a strong, architectural presence."
                Top2 = "Color Choices"
                Content2 = "The warm blue I chose is often associated with calmness, stability, and trust, reflecting the resilience of wooden structures and the natural world. The light orange I used represents energy, warmth, and urgency, making it a fitting choice to convey the threat of wildfires. The blue-orange contrast is one of the most striking complementary color pairings, and is commonly used in nature and design to create visual balance and strong emotional impact. "
                Top3 = "Layout Design"
                Content3 = "I designed the pages to be clean, visually captivating layouts that balanced aesthetics and readability. I created a structured yet creative framework to showcase Timber content, seamlessly integrating text and imagery for an immersive magazine experience."

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