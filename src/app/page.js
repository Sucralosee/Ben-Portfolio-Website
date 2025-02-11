"use client";
import React, { useEffect, useRef } from "react";
import Header from "@/components/Header/header";
import styles from "./page.css";
import { gsap } from "gsap";
import Card from "@/components/Card/card";
import { ScrollTrigger } from 'gsap/all';

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

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const xPercent = useRef(0);
  const direction = useRef(1);
  const animationFrameId = useRef(null);

  const animate = () => {
    if (!firstText.current || !secondText.current) return;

    if (xPercent.current < -100) {
      xPercent.current = 0;
    } else if (xPercent.current > 0) {
      xPercent.current = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent.current });
    gsap.set(secondText.current, { xPercent: xPercent.current });
    xPercent.current += 0.05 * direction.current;
    
    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (slider.current && firstText.current && secondText.current) {
      // Initialize slider position
      gsap.set([firstText.current, secondText.current], { xPercent: 0 });
      
      // Create the scroll trigger animation
      const scrollTrigger = ScrollTrigger.create({
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          direction.current = e.direction * -1;
        }
      });

      // Start the infinite scroll animation
      animate();

      // Cleanup
      return () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
        scrollTrigger.kill();
      };
    }
  }, []); // Empty dependency array since we're using refs


  return (
    <>
      {/* <Menu/> */}
      {/* <Header title="Home" /> */}
      <div className="page-content hero">
        <div className="intro-container">
          <div className="intro-content">
            <h1 className="xxlHead intro-ben" ref={el => fadeRefs.current[1] = el}>Hello, I'm Ben</h1>
            <div className="intro-sum">
              <p className="Pop24" ref={el => fadeRefs.current[2] = el}>Designer</p>
              <p className="Pop24" ref={el => fadeRefs.current[3] = el}>Developer</p>
              <p className="Pop24" ref={el => fadeRefs.current[4] = el}>Marketer</p>
            </div>
          </div>
          <div className="intro-next">
            <h5 className="mt-4 SubSub" ref={el => fadeRefs.current[5] = el}>Explore my work and get in touch with me!</h5>
            <svg ref={el => fadeRefs.current[6] = el} xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-down scroll mt-6"><path d="M8 18L12 22L16 18"/><path d="M12 2V22"/></svg>
          </div>
          <div className="slider-container">
              <div ref={slider} className="slider">
                <p className="xxlHead" ref={firstText} >Marketer &#8226; Developer &#8226; Designer &#8226; </p>
                <p className="xxlHead" ref={secondText}>Marketer &#8226; Developer &#8226; Designer &#8226; </p>
              </div>
          </div>

        </div>

        <div className="scrolled">
          {/* <Card 
            titleItem="Japanese Classics"
            subTitleItem="Magazine Design"
            cardYear="2024"

            cardImage="./image/Posters/Poster-Skyline.png"
            
            linkPath="/Designs"
            className="scroll-Card"
          /> */}
        </div>
      </div>
    </>
  );
}
