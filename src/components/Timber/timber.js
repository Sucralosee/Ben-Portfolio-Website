"use client";
import React, { useEffect, useRef } from "react";

import Project1 from "../Project1/project1";
import "./timber.css";

import gsap from "gsap";

const Timber = ({
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
                    Head1 = "Timber"
                    Head2 = "2024" 
                    Head3 = "BCIT - Magazine Design" 
                    Head4 = "My Role(s): Editorial Design, Research, Layout Design"
            />

            <div className="Timber-main-container" ref={el => fadeRefs.current[1] = el}>
                <div className="left-overview" ref={el => fadeRefs.current[2] = el}>
                    <p className="Head">Overview</p>
                    <p className="Pop20">Timber was a creative look into the design and copywriting experience of creating a magazine from the ground up.</p>
                    <p className="Pop20 gaps">Created for enjoyers of nature and people wanted to learn more of our relationship with wildfires </p>
                    {/* <img src="/image/LHlogo.svg" alt="logo" width={800} height={100} ref={el => fadeRefs.current[3] = el} /> */}
                    <p className="SubHead role-overview"> My Role</p>
                        <h2 className="Pop24">Editorial Design</h2>
                        <p className="Pop20 pusher">
                            Crafted the visual identity of *Timber* magazine by merging striking typography, cohesive color schemes, and compelling imagery. Ensured the design captured the essence of historic fire lookouts, creating an engaging reading experience that resonates with nature enthusiasts and history lovers.
                        </p>
                        
                        <h2 className="Pop24">Research</h2>
                        <p className="Pop20 pusher">
                            Delved into the rich history of fire lookouts, uncovering fascinating stories and details that brought *Timber* to life. Conducted meticulous research to ensure historical accuracy, blending facts with storytelling to provide a meaningful connection to these architectural icons.
                        </p>
                        
                        <h2 className="Pop24">Layout Design</h2>
                        <p className="Pop20 pusher">
                            Designed clean, visually captivating layouts that balanced aesthetics and readability. Created a structured yet creative framework to showcase *Timber's* content, seamlessly integrating text and imagery for an immersive magazine experience.
                        </p>
                    <div className="logos-container">
                        <p className="SubHead">Tools that I used</p>
                        {/* <div className="logos">
                            <img src="/image/figmalogo.svg" alt="logo" width={250} height={50} className="figma-logo" ref={el => fadeRefs.current[4] = el} />
                            <img src="/image/excel.png" alt="logo" width={120} height={35} className="adobe-logo" ref={el => fadeRefs.current[4] = el} />
                        </div> */}
                    </div>
                </div>
                <div className="right-overview" ref={el => fadeRefs.current[5] = el}>
                    <img src="/image/Timber/TimberHandMag.png" alt="logo" width={800} height={100} />
                </div>
            </div>

            <div className="timber-container">
                <img 
                    src="/image/timber/TimberSpreadMag.png"
                    // className="timber-frame"
                />
            </div>
            <div className="timber-container">
                <iframe 
                    src="https://indd.adobe.com/embed/44584cf8-4349-4ad7-b5fb-497ac28fd021?startpage=1&allowFullscreen=true" 
                    className="timber-frame" 
                    frameborder="0" 
                    allowfullscreen=""
                ></iframe>
            </div>        
        </>
    )
}

export default Timber;