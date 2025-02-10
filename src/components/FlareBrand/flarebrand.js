"use client";
import React, { useEffect, useRef } from "react";
import Project1 from "../Project1/project1";
import gsap from "gsap";
import logoAnim from "../../../public/image/Flare/LottieRaw.json"; 
import dynamic from "next/dynamic";
import "./flarebrand.css";
import Overview from "../Overview/overview";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });


const FlareBrand = ({ 
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
                Head1="Flare Branding"
                Head2="2024"
                Head3="Brand Design" 
                Head4="" 
            />
            <div className="lottie-container">
                <Lottie
                    animationData={logoAnim}
                    loop={true}
                />
            </div>
            <Overview
                Head="Overview"
                HeadContent="The branding for Flare was a exciting process in understanding the design evolution of how logos can transform a brand."
                SubHead=""
                Top1="Process"
                Content1="Initally Flare was known as Lighthouse representing a protective object that can protect against natural disaters. But as time went on Flare emerged and came to represent a guiding light for people in wildfire prone areas."
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

                RightImage = ""
                RightVideo= ""
            />
        <div className="poster-container">
            <div className="tertiary-container" ref={tertiaryContainerRef}>
                <div  ref={el => fadeRefs.current[8] = el}>
                </div>                
                <div  ref={el => fadeRefs.current[9] = el}>
                </div>
            </div>
        </div>
        </>
    )
}

export default FlareBrand;
