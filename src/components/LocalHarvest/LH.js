"use client";
import React, { useEffect, useRef } from "react";
import Project1 from "../Project1/project1";
import gsap from "gsap";

import "./LH.css";
import Accordion from "../Accordion/accordion";
import Overview from "../Overview/overview";

const LH = ({ 
    LogoAlt1 = "Figma",
    LogoAlt2 = "",
    LogoAlt3 = "",
    LogoAlt4 = "",
    LogoAlt5 = "",

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
            Head1="Local Harvest"
            Head2="2024"
            Head3="BCIT - IDSP Project" 
            Head4="My Role(s): UX/UI Design" 
        />
        <Overview
            Head="Overview"
            HeadContent = "Local Harvest was a project that was created from the ground up to solve a market researched problem amongst local farmers and farmers markets in BC. It sought to connect farmers and consumers before a farmers market to pre-order their goods before their products are sold out."
            SubHead = ""
            Top1 = "Account Pages"
            Content1 = "Designed for vendor efficiency, the interface includes an intuitive left-aligned menu, task-focused screens, and action-oriented CTAs. A cohesive visual identity ensures clarity, while optimized data displays enhance usability."
            Top2 = "Market Pages"
            Content2 = "Structured for easy browsing, these pages feature an engaging visual hierarchy, familiar UI elements, and a clean layout that encourages exploration. Consistent design elements ensure a seamless user experience."
            Top3 = "Checkout Pages"
            Content3 = "A simplified, step-by-step flow enhances the checkout experience. Adaptive payment options, error-resistant forms, and transparent feedback improve usability, while a mobile-first approach ensures accessibility across devices."

            LogoAlt1={LogoAlt1}
            LogoAlt2={LogoAlt2}
            LogoAlt3={LogoAlt3}
            LogoAlt4={LogoAlt4}
            LogoAlt5={LogoAlt5}

            Link1 = "https://www.figma.com/file/yIqwI8dJfG659K9I6YGTfB/Local-Harvest-Overview?node-id=0%3A1"
            LinkContent1="View Figma File"
            Link2="https://www.figma.com/proto/EueSKezqQqyA6V9YG3tpeN/Local-Harvest?node-id=3914-4148&t=wGJjgLZEaTohdZ90-1"
            LinkContent2="View Prototype"

            RightImage = {RightImage}
            RightVideo={RightVideo}
        />
        <div className="LH-container">
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
