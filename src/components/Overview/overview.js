"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import "./overview.css";

const Overview = ({ 
    Head = "Head",
    HeadContent = "HeadContent",
    SubHead = "SubHead",
    Top1 = "Top1",
    Content1 = "Content1",
    Top2 = "Top2",
    Content2 = "Content2",
    Top3 = "Top3",
    Content3 = "Content3",
    LogoImage1 = "LogoImage1",
    LogoAlt1 = "LogoAlt1",
    LogoImage2 = "LogoImage2",
    LogoAlt2 = "LogoAlt2",
    LogoImage3 = "LogoImage3",
    LogoAlt3 = "LogoAlt3",
    LogoImage4 = "LogoImage4",
    LogoAlt4 = "LogoAlt4",
    LogoImage5 = "LogoImage5",
    LogoAlt5 = "LogoAlt5",
    
    Link1 = "Link1",
    LinkContent1 = "LinkContent1",

    RightImage = "RightImage",
    RightVideo = "RightVideo"
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
        <div className="overview-container" ref={el => fadeRefs.current[1] = el}>
            <div className="left-overview" ref={el => fadeRefs.current[2] = el}>
                <p className="Head">{Head}</p>
                <p className="Pop20">{HeadContent}</p>
                {/* <img src="/image/LHlogo.svg" alt="logo" width={800} height={100} ref={el => fadeRefs.current[3] = el} /> */}
                <p className="SubHead role-overview">{SubHead}</p>
                <h2 className="Pop24">{Top1}</h2>
                <p className="Pop20 ML1">{Content1}
                </p>

                <h2 className="Pop24">{Top2}</h2>
                <p className="Pop20 ML1">
                    {Content2}
                </p>

                <h2 className="Pop24">{Top3}</h2>
                <p className="Pop20 ML1">
                    {Content3}
                </p>
                <div className="logos-container">
                    <p className="SubHead">Tools used</p>
                    <div className="logos">
                        {LogoImage1 && <img src={LogoImage1} alt={LogoAlt1} width={200} height={50} className="figma-logo" ref={el => fadeRefs.current[0] = el} />}
                        {LogoImage2 && <img src={LogoImage2} alt={LogoAlt2} width={200} height={50} className="figma-logo" ref={el => fadeRefs.current[1] = el} />}
                        {LogoImage3 && <img src={LogoImage3} alt={LogoAlt3} width={200} height={50} className="figma-logo" ref={el => fadeRefs.current[2] = el} />}
                        {LogoImage4 && <img src={LogoImage4} alt={LogoAlt4} width={200} height={50} className="figma-logo" ref={el => fadeRefs.current[3] = el} />}
                        {LogoImage5 && <img src={LogoImage5} alt={LogoAlt5} width={200} height={50} className="figma-logo" ref={el => fadeRefs.current[4] = el} />}
                    </div>
                </div>
                <div className="links-container">
                    <a href={Link1} target="_blank" rel="noreferrer">{LinkContent1}</a>
                </div>
            </div>
            <div className="right-overview" ref={el => fadeRefs.current[5] = el}>
                {RightImage && <img src={RightImage} width={800} height={100} ref={el => fadeRefs.current[3] = el} />}
            <video width="500" height="800" autoPlay loop>
                    <source src={RightVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

        </div>
    )
}

export default Overview;