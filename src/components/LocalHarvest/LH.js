"use client";
import React, { useEffect, useRef } from "react";
import Project1 from "../Project1/project1";
import gsap from "gsap";

import "./LH.css";

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
                    <p className="Head">Key Design Choices</p>
                    <p className="SubHead">Account Page</p>
                    <p className="Pop20 pop-gap">The design of the vendor account page emphasizes simplicity and clarity to ensure seamless navigation for users managing their marketplace presence. Each section is thoughtfully structured to provide quick access to essential features like order management, product inventory, and vendor profile customization.</p>
                    <h3 className="Pop28 pop-gap">Streamlined Navigation</h3>
                    <p className="Pop20">Designed an intuitive, left-aligned menu hierarchy to provide vendors quick access to essential tools, such as "Edit Vendor Page," "Add Products," and "Inventory," ensuring effortless usability.</p>
                    <h3 className="Pop28 pop-gap">Cohesive Visual Identity</h3>
                    <p className="Pop20">Crafted a professional interface using clean typography, intuitive icons, and balanced spacing to enhance clarity and brand consistency.</p>
                    <h3 className="Pop28 pop-gap">Task-Focused Screens</h3>
                    <p className="Pop20">Developed user-centered workflows with dedicated screens for specific actions, like updating branding or managing products, enabling efficiency and reducing cognitive load.</p>
                    <h3 className="Pop28 pop-gap">Action-Oriented CTAs</h3>
                    <p className="Pop20">Incorporated bold, strategically placed buttons like "Save Changes" and "Add Product" to guide user interactions seamlessly.</p>
                    <h3 className="Pop28 pop-gap">Optimized Data Display</h3>
                    <p className="Pop20">Prioritized essential information such as order details and inventory counts with structured layouts, improving scannability and comprehension.</p>
                </div>
                <div className="right-tertiary" ref={el => fadeRefs.current[8] = el}>
                    <div className="carousel">
                        <img src="/image/LH-image/LH-Acc6.png" alt="main local harvest account page" width={500} height={800} ref={el => fadeRefs.current[9] = el} />
                        <img src="/image/LH-image/LH-Acc5.png" alt="main local harvest account page" width={500} height={800} ref={el => fadeRefs.current[10] = el} />
                        <img src="/image/LH-image/LH-Acc4.png" alt="main local harvest account page" width={500} height={800} ref={el => fadeRefs.current[11] = el} />
                        <img src="/image/LH-image/LH-Acc3.png" alt="main local harvest account page" width={500} height={800} ref={el => fadeRefs.current[12] = el} />
                        <img src="/image/LH-image/LH-Acc1.png" alt="main local harvest account page" width={500} height={800} ref={el => fadeRefs.current[13] = el} />
                        <img src="/image/LH-image/LH-Acc.png" alt="main local harvest account page" width={500} height={800} ref={el => fadeRefs.current[14] = el} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LH;
