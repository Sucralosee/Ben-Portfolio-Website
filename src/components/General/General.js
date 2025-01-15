"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import "./general.css";

const General = ({ 
    Topic1 = "Topic1", 
    Topic2 = "Topic2", 
    Topic3 = "Topic3", 
    Topic4 = "Topic4", 
    Topic5 = "Topic5", 
    Topic6 = "Topic6" }) => {
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
    <div className="general-container">
      <div className="flex flex-wrap gap-8 justify-between">
        <div className="primary-item" ref={el => fadeRefs.current[0] = el}>
          <div className="flex items-center justify-between">
            <h2 className="general-title">{Topic1}</h2>
            <h3 className="general-sub">{Topic2}</h3>
          </div>
          <div className="primary-image"></div>
        </div>        
        <div className="primary-item" ref={el => fadeRefs.current[1] = el}>
          <div className="flex items-center justify-between">
            <h2 className="general-title">{Topic3}</h2>
            <h3 className="general-sub">{Topic4}</h3>
          </div>
          <div className="primary-image"></div>
        </div>
        <div className="primary-item" ref={el => fadeRefs.current[2] = el}>
          <div className="flex items-center justify-between">
            <h2 className="general-title">{Topic5}</h2>
            <h3 className="general-sub">{Topic6}</h3>
          </div>
          <div className="primary-image"></div>
        </div>
      </div>
    </div>
  );
}

export default General;