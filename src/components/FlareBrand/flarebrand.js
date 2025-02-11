"use client";
import React, { useEffect, useRef } from "react";
import Project1 from "../Project1/project1";
import gsap from "gsap";
import logoAnim from "../../../public/image/Flare/LottieRaw.json"; 
import dynamic from "next/dynamic";
import "./flarebrand.css";
import Overview from "../Overview/overview";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });


const FlareBrand = ({ }) => {
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
            <div className="overview-flare-container">
                <div className="flare-left">
                    <p className="SubHead">The branding for Flare was a exciting process in understanding the design evolution of how logos can transform a brand. Into a core part of the design process of the product.</p>
                </div>
                <div className="flare-right">
                    <div className="lottie-container" ref={el => fadeRefs.current[8] = el}>
                        <Lottie
                            animationData={logoAnim}
                            loop={true}
                            style={{ width: 400, height: 300, overflow: "hidden" }}
                        />
                    </div>  
                </div>
                <p className=""></p>
            </div>
            <Overview
                Head="Design Process"
                HeadContent="Initally Flare was known as Lighthouse representing a protective object that can protect against natural disaters. But as time went on Flare emerged and came to represent a guiding light for people in wildfire prone areas."
                SubHead=""
                Top1=""
                Content1=""
                Top2=""
                Content2=""
                Top3=""
                Content3=""
                LogoAlt1="Adobe Photoshop"
                LogoAlt2="Adobe Illustrator"
                LogoAlt3=""
                LogoAlt4=""
                LogoAlt5=""

                Link1 = ""
                LinkContent1= ""
                Link2=""
                LinkContent2=""

                RightImage = "/image/LogoFlare/FWordmark.svg"
                RightVideo= ""
            />
  
            <div className="poster-container">
                <div className="tertiary-container" ref={tertiaryContainerRef}>
                
                </div>
            </div>
        </>
    )
}

export default FlareBrand;
