"use client";
import React, { useEffect, useRef } from "react";
import Project1 from "../Project1/project1";
import gsap from "gsap";

import "./poster.css";
import Overview from "../Overview/overview";

const Poster = ({ 
    LogoImage1 = "/image/Tools/PS.png",
    LogoAlt1 = "Photoshop",
    LogoImage2 = "",
    LogoAlt2 = "",
    LogoImage3 = "",
    LogoAlt3 = "",
    LogoImage4 = "",
    LogoAlt4 = "",
    LogoImage5 = "",
    LogoAlt5 = "",

    Link1 = "",
    LinkContent1 = "",

    RightImage = "/image/Posters/SingleRX7.png",
    RightVideo = ""
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
                Head1="Japanese Classics"
                Head2="2024"
                Head3="Automotive Poster Series" 
                Head4="" 
            />
        <div className="poster-container">
            <Overview
                Head="Overview"
                HeadContent="In this poster series, I set out to capture the spirit of three Japanese automotive icons that have always fascinated me. I wanted to tell the story of each vehicle through a distinct color palette - a deep red for the mysterious Nissan Skyline, a vibrant yellowish-orange for the humble Suzuki Carry, and a bold purple for the revolutionary Mazda RX-7."
                SubHead=""
                Top1="Design Philosophy"
                Content1="I approached each design with the goal of stripping away the unnecessary while preserving the soul of each vehicle. For me, it was crucial to capture those distinctive lines and shapes that make each car instantly recognizable. I spent considerable time studying the unique characteristics of each vehicle to ensure I could represent them in their most pure form."
                Top2="Color Selection"
                Content2="The color choices were intentional - I selected purple to emphasize the RX-7's legendary status, yellowish-orange to reflect the Suzuki Carry's utilitarian charm and workmanlike character, and purple to embody the RX-7's passionate engineering and performance heritage."
                Top3="Creative Process"
                Content3="Working in Photoshop, I focused on achieving clean, precise linework that would complement the color schemes.  My goal was to create pieces that would speak to both casual observers and dedicated car enthusiasts, capturing what makes these vehicles special to so many people."

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
                {/* <div className="left-tertiary" ref={el => fadeRefs.current[7] = el}>
                    <p className="Head">Key Design Choices</p>
                </div> */}
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
