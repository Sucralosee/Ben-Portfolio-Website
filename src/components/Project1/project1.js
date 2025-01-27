"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import "./project1.css";

const Project1 = ({ 
    Head1 = "Head1", 
    Head2 = "Head2", 
    Head3 = "Head3", 
    Head4 = "Head4"
 }) => {
  const tl = useRef(null);
  const fadeRefs = useRef([]);

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
        if (rect.top < 100) { 
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
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="project-container">
        <div className="project-header-container">
            <div className="top-head" ref={el => fadeRefs.current[0] = el}>
            <div className="name-head">
                <p className="SuprHead">{Head1}</p>
                <p className="SubHead head-date top-head-pad">{Head2}</p>
            </div>
            <div className="place-head">
                <p className="SubHead top-head-pad">{Head3}</p>
            </div>
            </div>
            <div className="bot-head" ref={el => fadeRefs.current[1] = el}>
            <div className="SubHead role-head">{Head4}</div>
            </div>
        </div>
    </div>
  );
}

export default Project1;