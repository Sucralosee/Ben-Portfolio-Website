"use client";
import React, { useEffect, useRef } from "react";
import Header from "@/components/Header/header";
import styles from "./page.css";
import { gsap } from "gsap";
import Card from "@/components/Card/card";

export default function Home() {
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
            stagger: 0.1 
          });
        } else {
          gsap.to(ref, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            stagger: 0.1 
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
      {/* <Menu/> */}
      <Header title="Home" />
      <div className="page-content hero">
        <div className="flex flex-col items-center text-center">
          <h2 className="Head" ref={el => fadeRefs.current[0] = el}>Hello there,</h2>
          <h1 className="SuprHead" ref={el => fadeRefs.current[1] = el}>I'm Ben Louis</h1>
          <h2 className="SuprHead"ref={el => fadeRefs.current[2] = el}>a digital designer</h2>
          <h5 className="mt-24 SubSub home-extra-text" ref={el => fadeRefs.current[3] = el}>
            I've gained a versatile skillset from working on a variety  
            <br />
            of projects. As well as a burning passion for learning!
          </h5>
          <h5 className="mt-24 SubSub" ref={el => fadeRefs.current[4] = el}>
            Explore my work and get in touch with me
          </h5>
          <svg ref={el => fadeRefs.current[5] = el} xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-down scroll mt-6"><path d="M8 18L12 22L16 18"/><path d="M12 2V22"/></svg>
        </div>

        <div className="scrolled">
          <Card 
            titleItem="Japanese Classics"
            subTitleItem="Magazine Design"
            cardYear="2024"

            cardImage="./image/Posters/Poster-Skyline.png"
            
            linkPath="/Designs"
          />
        </div>
      </div>
    </>
  );
}
