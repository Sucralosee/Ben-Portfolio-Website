"use client";
import React, { useEffect, useRef } from "react";
import "./page.css";
import { gsap } from "gsap";
import BigCard from "@/components/BigCard/bigCard";
import { ScrollTrigger } from 'gsap/all';
import { MoveDown } from 'lucide-react';
import Foot from "@/components/Foot/foot";

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
    xPercent.current += 0.1 * direction.current;
    
    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (slider.current && firstText.current && secondText.current) {
      gsap.set([firstText.current, secondText.current], { xPercent: 0 });

      const scrollTrigger = ScrollTrigger.create({
        trigger: document.documentElement,
        scrub: 0.75,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          direction.current = e.direction * -1;
        }
      });

      animate();

      return () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
        scrollTrigger.kill();
      };
    }
  }, []);

  return (
    <div className="page-container">
      <div className="page-content hero-page">
        <div className="intro-container">
          <div className="intro-content">
            <h1 className="xxlHead intro-ben" ref={el => fadeRefs.current[0] = el}>
              Hello, I'm Ben<span className="small-bullet">*</span>
            </h1>
            <div className="intro-beneath">
              <div className="intro-joke" ref={el => fadeRefs.current[1] = el}>
                <p className="Pop24">Portfolio website</p>
                {/* <p className="Pop24">*actually this is a portfolio</p>
                <p className="Pop24">but was made by ben louis</p>
                <p className="Pop24">anyways, </p> */}
              </div>
              <div className="intro-sum">
                <p className="Pop24" ref={el => fadeRefs.current[2] = el}>Designer</p>
                <p className="Pop24" ref={el => fadeRefs.current[3] = el}>Developer</p>
                <p className="Pop24" ref={el => fadeRefs.current[4] = el}>Marketer</p>
              </div>
            </div>
          </div>
          <div className="intro-next">
            <h5 className="mt-4 SubSub" ref={el => fadeRefs.current[5] = el}>
              explore my work and get in touch with me!
            </h5>
            <MoveDown className="scroll mt-6" size={64} ref={el => fadeRefs.current[6] = el} />
          </div>
          <div className="slider-container">
            <div ref={slider} className="slider">
              <p className="xxlHead" ref={firstText}>Marketer &#8226; Developer &#8226; Designer &#8226; </p>
              <p className="xxlHead" ref={secondText}>Marketer &#8226; Developer &#8226; Designer &#8226; </p>
            </div>
          </div>
        </div>

        <div className="feature-container">
          <p className="Head">Featured Work</p>
          <p className="Pop20">A lil appetizer</p>

          <BigCard 
            titleItem="Flare"
            subTitleItem="BCIT - IDSP Project"
            cardYear="2024"
            bcDesc=""
            cardImage="./image/Flare/VarietyScreens.png"
            linkPath="/Projects/FlareIDSP"
            isRightImage={false} 
            className="scroll-BigCard"
          />
           <BigCard 
            titleItem="Timber"
            subTitleItem="Magazine Design"
            cardYear="2024"
            bcDesc=""
            cardImage="./image/Timber/TimberSpreadMag.jpg"
            linkPath="/Designs/TimberMag"
            isRightImage={true} 
            className="scroll-BigCard"
          />
          <BigCard 
            titleItem="Japanese Classics"
            subTitleItem="Poster Design"
            cardYear="2024"
            bcDesc=""
            cardImage="./image/Posters/ThreeFence.png"
            linkPath="/Designs/JapaneseClassics"
            isRightImage={false} 
            className="scroll-BigCard"
          />
        </div>
      </div>
      <Foot />
    </div>
  );
}
