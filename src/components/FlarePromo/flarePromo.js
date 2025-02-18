"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../JamesWebb/jamesWebb.css";
import Overview from "../Overview/overview";
import Project1 from "../Project1/project1";

const FlarePromo = () => {
  gsap.registerPlugin(ScrollTrigger);
  
  const fadeRefs = useRef([]);
  const videoRef = useRef(null);
  const mockupRef = useRef(null);
  const tripleRef = useRef(null);

  useEffect(() => {
    gsap.set(fadeRefs.current, {
      y: 75,
      opacity: 0
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".tert-container",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(".tert-top-container", {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    ScrollTrigger.create({
      trigger: videoRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => videoRef.current?.play(),
      onLeave: () => videoRef.current?.pause(),
      onEnterBack: () => videoRef.current?.play(),
      onLeaveBack: () => videoRef.current?.pause(),
    });

    gsap.from(".tert-mockup", {
      scrollTrigger: {
        trigger: ".tert-mockup",
        start: "top center+=100",
        toggleActions: "play none none reverse"
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from(".tert-triple img", {
      scrollTrigger: {
        trigger: ".tert-triple",
        start: "top center+=100",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.2)"
    });

    gsap.from(".Pop32", {
      scrollTrigger: {
        trigger: ".Pop32",
        start: "top center+=150",
        toggleActions: "play none none reverse"
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });

    const handleScroll = () => {
      fadeRefs.current.forEach((ref) => {
        if (!ref) return;
        
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
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Project1
        Head1="Flare Promotional Video"
        Head2="2024"
        Head3=""
        Head4="Motion Graphics / Asset Creation"
      />
      <Overview
        Head=""
        HeadContent=""
        SubHead="A promotional video to give a brief introduction to Flare - a wildfire preperation app. Using various editing techniques t such as sharp cuts to highlight the anxiety of a wildfire scenario and the benefits that Flare could provide."
        Top1=""
        Content1=""
        Top2=""
        Content2=""
        Top3=""
        Content3=""
        LogoAlt1="Adobe Premiere Pro"
        LogoAlt2=""
        LogoAlt3=""
        LogoAlt4=""
        LogoAlt5=""
        RightImage=""
        RightVideo=""
        Link1=""
        LinkContent1=""
        Link2=""
        LinkContent2=""
      />
      <div className="tert-container">
        <div className="tert-top-container" ref={el => fadeRefs.current[6] = el}>
          <video 
            ref={videoRef}
            src="/video/flarevid.mp4" 
            type="video/mp4" 
            width="100" 
            height="100"
            className="tert-video" 
            autoPlay 
            controls
            muted 
          />
        </div>
        <div className="tert-mockup" ref={mockupRef}>
          <p className="Pop32 mb-2">
            Began as a storyboard to understand how the video was shot and edited. This allowed the team to organize the entire process in an clear manner.
          </p>
          <img 
            src="/image/Flare/FlareStoryBoard.png" 
            width={100} 
            height={100} 
            className="tert-image"
            alt="After Effects Project"
          />
        </div>
        <div className="tert-mockup" ref={mockupRef}>
          <p className="Pop32 mb-2">
            Created in Adobe Premiere Pro to take advantage of the audio, color, and editing capabilites.
          </p>
          <img 
            src="/image/Flare/Flare-PP.png" 
            width={100} 
            height={100} 
            className="tert-image"
            alt="Flare Premiere Pro Project"
          />
        </div>
        {/* <div className="tert-triple" ref={tripleRef}>
          <p className="Pop32 mb-2">
            All assets were created in Adobe Illustrator to ensure scalability of the content.
          </p>
          <img 
            src="/image/JWST/JWST-AI.png" 
            width={100} 
            height={100} 
            className="tert-image-40"
            alt="Illustrator Asset 1"
          />
          <img 
            src="/image/JWST/UHZI-AI.png" 
            width={100} 
            height={100} 
            className="tert-image-40"
            alt="Illustrator Asset 2"
          />
        </div> */}
      </div>
    </>
  );
};

export default FlarePromo;