"use client";
import React, { useEffect, useRef } from "react";
import Project1 from "../Project1/project1";
import gsap from "gsap";

import "./LH.css";
import Accordion from "../Accordion/accordion";
import Overview from "../Overview/overview";

const LH = ({ 
    Head1 = "Local Harvest", 
    Head2 = "2024", 
    Head3 = "BCIT - IDSP Project", 
    Head4 = "My Role(s): UX/UI Design",

    Head = "Overview",
    HeadContent = "Local Harvest was a project that was created from the ground up to solve a market researched problem amongst local farmers and farmers markets in BC. It sought to connect farmers and consumers before a farmers market to pre-order their goods before their products are sold out.",
    SubHead = "",
    Top1 = "Logo Design",
    Content1 = "The staggered, layered effect resembles stacked timber or architectural elements, reinforcing the magazine's focus on wooden architecture. The sans-serif typeface is clean and contemporary, ensuring readability while maintaining a strong, architectural presence.",
    Top2 = "Color Choices",
    Content2 = "Blue represents the sky, mountains, and stability of wooden structures.Orange evokes warmth, fire, and energy, possibly referencing fire lookouts, the autumn hues of timber, or the craftsmanship of woodworking.",
    Top3 = "Layout Design",
    Content3 = "Designed clean, visually captivating layouts that balanced aesthetics and readability. Created a structured yet creative framework to showcase Timber content, seamlessly integrating text and imagery for an immersive magazine experience.",

    LogoImage1 = "/image/Tools/figmalogo.svg",
    LogoAlt1 = "figma",
    LogoImage2 = "",
    LogoAlt2 = "",
    LogoImage3 = "",
    LogoAlt3 = "",
    LogoImage4 = "",
    LogoAlt4 = "",
    LogoImage5 = "",
    LogoAlt5 = "",

    Link1 = "https://www.figma.com/file/yIqwI8dJfG659K9I6YGTfB/Local-Harvest-Overview?node-id=0%3A1",
    LinkContent1 = "View Figma File",

    RightImage = "",
    RightVideo = "./video/lhlogging.mp4"
}) => {
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
                Head1={Head1} 
                Head2={Head2} 
                Head3={Head3} 
                Head4={Head4} 
            />
        <div className="LH-container" ref={el => fadeRefs.current[0] = el}>
            <Overview
                Head={Head}
                HeadContent = {HeadContent}
                SubHead = {SubHead}
                Top1 = {Top1}
                Content1 = {Content1}
                Top2 = {Top2}
                Content2 = {Content2}
                Top3 = {Top3}
                Content3 = {Content3}

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

                Link1 = {Link1}
                LinkContent1={LinkContent1}

                RightImage = {RightImage}
                RightVideo={RightVideo}
            />
            <div className="tertiary-container" ref={el => fadeRefs.current[6] = el}>
                <div className="left-tertiary" ref={el => fadeRefs.current[7] = el}>
                    <p className="Head">Key Design Choices</p>
                    <Accordion/>                    
                </div>
                <div className="right-tertiary" ref={el => fadeRefs.current[8] = el}>
                    <div className="figma-container">
                        <iframe className="figma" src="https://embed.figma.com/design/yIqwI8dJfG659K9I6YGTfB/Local-Harvest-Overview?node-id=0-1&embed-host=share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LH;
