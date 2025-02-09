"use client";
import React, { useEffect, useRef } from "react";
import Project1 from "../Project1/project1";
import gsap from "gsap";

import "./poster.css";
import Overview from "../Overview/overview";

const Poster = ({ 
    LogoImage1 = "/image/Tools/PS.png",
    LogoAlt1 = "Photoshop",
    LogoImage2 = "/image/Tools/AI.png",
    LogoAlt2 = "illustrator",
    LogoImage3 = "",
    LogoAlt3 = "",
    LogoImage4 = "",
    LogoAlt4 = "",
    LogoImage5 = "",
    LogoAlt5 = "",

    RightImage = "/image/Posters/SingleRX7.png",
    RightVideo = ""
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
                Head1="Japanese Classics"
                Head2="2024"
                Head3="Automotive Poster Series" 
                Head4="" 
            />
            <Overview
                Head="Overview"
                HeadContent="This poster series captures the spirit of three Japanese automotive icons through distinct visual storytelling. Each design employs a carefully selected color palette - a deep red for the mysterious Nissan Skyline, a vibrant yellowish-orange for the humble Suzuki Carry, and a bold purple for the revolutionary Mazda RX-7."
                Top1="Design Philosophy"
                Content1="The design approach emphasizes minimalism while preserving the essential character of each vehicle. The compositions strip away extraneous details to focus on the distinctive lines and shapes that make each car instantly recognizable. Every element serves to highlight the unique characteristics and defining features of these automotive legends."
                Top2="Color Selection"
                Content2="The color palette serves as a fundamental storytelling element. Purple underscores the RX-7's legendary status, while the yellowish-orange reflects the Suzuki Carry's utilitarian charm and workmanlike character. The deep red chosen for the Skyline embodies its mysterious allure and performance heritage."
                Top3="Technical Execution"
                Content3="The design process in Photoshop prioritizes clean, precise linework that harmonizes with the carefully chosen color schemes. The resulting compositions resonate with both casual observers and dedicated car enthusiasts, effectively communicating the unique appeal of these iconic vehicles."
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
                LinkContent1= ""
                Link2=""
                LinkContent2=""

                RightImage = {RightImage}
                RightVideo={RightVideo}
            />
        <div className="poster-container">
            <div className="tertiary-container" ref={tertiaryContainerRef}>
                <div  ref={el => fadeRefs.current[8] = el}>
                    <img src="/image/Posters/ThreeFence.png" alt="?" width={100} height={100} className="tertiary-poster"/>
                </div>                
                <div  ref={el => fadeRefs.current[9] = el}>
                    <img src="/image/Posters/DualCarPoster.png" alt="?" width={100} height={100} className="tertiary-poster"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Poster;
