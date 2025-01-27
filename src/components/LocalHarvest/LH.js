"use client";
import React, { useEffect, useRef } from "react";
import Project1 from "../Project1/project1";
import gsap from "gsap";

import "./LH.css";
import Accordion from "../Accordion/accordion";

const LH = ({ 
    Head1 = "Local Harvest", 
    Head2 = "2024", 
    Head3 = "BCIT - IDSP Project", 
    Head4 = "My Role(s): UX/UI Design"
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
            <div className="overview-container" ref={el => fadeRefs.current[1] = el}>
                <div className="left-overview" ref={el => fadeRefs.current[2] = el}>
                    <p className="Head">Overview</p>
                    <p className="Pop20">Local Harvest was a project that was created from the ground up to solve a market researched problem amongst local farmers and farmers markets in BC. It sought to connect farmers and consumers before a farmers market to pre-order their goods before their products are sold out.</p>
                    <img src="/image/LHlogo.svg" alt="logo" width={800} height={100} ref={el => fadeRefs.current[3] = el} />
                    <p className="SubHead role-overview"> My Role</p>
                    <p className="Pop20">UX/UI Design: Oversaw the design of the app from start to finish.
                    </p>
                    <p className="Pop20">Design: Went through multiple rounds of app design iterations from lo-fi to hi-fi to figure out what worked best.
                    </p>
                    <p className="Pop20">User Testing: Conducted numerous testing sessions to understand and adjust the prototypes of the app to improve the flow and usability within the app.
                    </p>
                    <div className="logos-container">
                        <p className="SubHead">Tools that I used</p>
                        <div className="logos">
                            <img src="/image/figmalogo.svg" alt="logo" width={250} height={50} className="figma-logo" ref={el => fadeRefs.current[4] = el} />
                            <img src="/image/excel.png" alt="logo" width={120} height={35} className="adobe-logo" ref={el => fadeRefs.current[4] = el} />
                        </div>
                    </div>
                </div>
                <div className="right-overview" ref={el => fadeRefs.current[5] = el}>
                    <video width="500" height="800" autoPlay loop>
                        <source src="/video/lhlogging.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            
            
            <div className="tertiary-container" ref={el => fadeRefs.current[6] = el}>
                <div className="left-tertiary" ref={el => fadeRefs.current[7] = el}>
                    <p className="SubHead">Key Design Choices</p>

                    <Accordion/>                    
                </div>
                <div className="right-tertiary" ref={el => fadeRefs.current[8] = el}>
                    <div className="figma-container">
                        <iframe className="figma" src="https://embed.figma.com/design/yIqwI8dJfG659K9I6YGTfB/LH-Portfolio?node-id=0-1&embed-host=share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LH;
