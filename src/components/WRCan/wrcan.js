"use client";
import React, { useEffect, useRef } from "react";
import Project1 from "../Project1/project1";
import gsap from "gsap";

import "./wrcan.css";
import Overview from "../Overview/overview";

const WRCan = ({ 
}) => {
    const fadeRefs = useRef([]);
    const tertiaryContainerRef = useRef(null);

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

            // Add right-overview style animation for tertiary-container
            if (tertiaryContainerRef.current) {
                const containerRect = tertiaryContainerRef.current.getBoundingClientRect();
                if (containerRect.bottom < 250) {
                    gsap.to(tertiaryContainerRef.current, {
                        y: -75,
                        opacity: 0,
                        duration: 1,
                        ease: "power4.out"
                    });
                } else {
                    gsap.to(tertiaryContainerRef.current, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power4.out"
                    });
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>  
             <Project1
                Head1="White Rabbit Liquer"
                Head2="2024"
                Head3="Can Design" 
                Head4="" 
            />
            <Overview
                Head="Overview"
                HeadContent="This can design series reimagines the nostalgic charm of the classic Chinese White Rabbit candy, transforming it into a trio of sophisticated alcoholic beverages. Each design captures the essence of the beloved candy while introducing a modern twist, appealing to both nostalgic adults and adventurous drinkers."
                SubHead=""
                Top1="Design Philosophy"
                Content1="The design philosophy centers on blending nostalgia with contemporary elegance. By incorporating the iconic White Rabbit imagery and typography, the cans evoke a sense of familiarity and comfort. At the same time, the sleek, modern layout and premium finishes elevate the brand, making it suitable for a sophisticated audience. The goal is to create a visual experience that feels both timeless and innovative."
                Top2=""
                Content2=""
                Top3=""
                Content3=""
                LogoAlt1="Adobe Indesign"
                LogoAlt2="Adobe Photoshop"
                LogoAlt3="Adobe Illustrator"
                LogoAlt4={LogoAlt4}
                LogoAlt5={LogoAlt5}

                Link1 = ""
                LinkContent1= ""
                Link2=""
                LinkContent2=""

                RightImage = "/image/Can/SingleCan.png"
                RightVideo=""
            />
            <div className="poster-container">
                <div className="tertiary-container" ref={tertiaryContainerRef}>
                    <div  ref={el => fadeRefs.current[8] = el}>
                        <img src="/image/Can/WRCan.png" alt="?" width={100} height={100} className="tertiary-poster"/>
                    </div>                
                </div>
            </div>

        </>
    )
}

export default WRCan;
