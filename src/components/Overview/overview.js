"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import "./overview.css";

export default function Overview({ 
    Head = "Head",
    HeadContent = "HeadContent",
    SubHead = "SubHead",
    Top1 = "Top1",
    Content1 = "Content1",
    Top2 = "Top2",
    Content2 = "Content2",
    Top3 = "Top3",
    Content3 = "Content3",
    LogoAlt1 = "LogoAlt1",
    LogoAlt2 = "LogoAlt2",
    LogoAlt3 = "LogoAlt3",
    LogoAlt4 = "LogoAlt4",
    LogoAlt5 = "LogoAlt5",
    
    Link1 = "Link1",
    LinkContent1 = "LinkContent1",
    Link2 = "Link2",
    LinkContent2 = "LinkContent2",

    RightImage = "RightImage",
    RightVideo = "RightVideo"
}) {
    const containerRef = useRef(null);
    const fadeRefs = useRef([]);
    const rightOverviewRef = useRef(null);    
    const tl = useRef();

    useEffect(() => {
        gsap.set(fadeRefs.current, {
            y: 75,
            opacity: 0
        });

        tl.current = gsap.timeline({ paused: true })
            .to(fadeRefs.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power4.out",
                stagger: 0.1
            });

        tl.current.play();

        const handleScroll = () => {
            fadeRefs.current.forEach((ref, index) => {
                const rect = ref.getBoundingClientRect();
                if (rect.bottom < 75) {
                    gsap.to(ref, {
                        y: -75,
                        opacity: 0,
                        duration: 1,
                        ease: "power4.out",
                        stagger: 0.8 * index
                    });
                } else {
                    gsap.to(ref, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power4.out",
                        stagger: 0.8 * index
                    });
                }
            });

            // Separate logic for right-overview section
            if (rightOverviewRef.current) {
                const overviewRect = rightOverviewRef.current.getBoundingClientRect();
                if (overviewRect.bottom < 250) {
                    gsap.to(rightOverviewRef.current, {
                        y: -75,
                        opacity: 0,
                        duration: 1,
                        ease: "power4.out"
                    });
                } else {
                    gsap.to(rightOverviewRef.current, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power4.out"
                    });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="overview-container" ref={containerRef}>
            <div className="left-overview">
                <p className="Head" ref={el => fadeRefs.current[0] = el}>{Head}</p>
                <p className="Pop20" ref={el => fadeRefs.current[1] = el}>{HeadContent}</p>
                <p className="SubHead role-overview" ref={el => fadeRefs.current[2] = el}>{SubHead}</p>
                <h2 className="Pop24" ref={el => fadeRefs.current[3] = el}>{Top1}</h2>
                <p className="Pop20 ML1" ref={el => fadeRefs.current[4] = el}>{Content1}</p>
                <h2 className="Pop24" ref={el => fadeRefs.current[5] = el}>{Top2}</h2>
                <p className="Pop20 ML1" ref={el => fadeRefs.current[6] = el}>{Content2}</p>
                <h2 className="Pop24" ref={el => fadeRefs.current[7] = el}>{Top3}</h2>
                <p className="Pop20 ML1" ref={el => fadeRefs.current[8] = el}>{Content3}</p>
                <div className="logos-container" ref={el => fadeRefs.current[9] = el}>
                    <p className="SubHead">Tools used</p>
                    <div className="logos">
                        {LogoAlt1 && <p className="logo Pop20" ref={el => fadeRefs.current[10] = el}>{LogoAlt1}</p>}
                        {LogoAlt2 && <p className="logo Pop20" ref={el => fadeRefs.current[11] = el}>{LogoAlt2}</p>}
                        {LogoAlt3 && <p className="logo Pop20" ref={el => fadeRefs.current[12] = el}>{LogoAlt3}</p>}
                        {LogoAlt4 && <p className="logo Pop20" ref={el => fadeRefs.current[13] = el}>{LogoAlt4}</p>}
                        {LogoAlt5 && <p className="logo Pop20" ref={el => fadeRefs.current[14] = el}>{LogoAlt5}</p>}
                    </div>
                </div>
                {Link1 && <div className="links-container">
                    <a href={Link1} target="_blank" rel="noreferrer">{LinkContent1}</a>
                </div> }
                {Link2 && <div className="links-container">
                    <a href={Link2} target="_blank" rel="noreferrer">{LinkContent2}</a>
                </div> }
            </div>
            <div className="right-overview" ref={rightOverviewRef}>
                {RightImage && <img src={RightImage} className="right-image" width={100} height={100}/>}
                {RightVideo && <video src={RightVideo} type="video/mp4" width="500" height="800" autoPlay loop muted> </video> }
            </div>

        </div>
    )
}