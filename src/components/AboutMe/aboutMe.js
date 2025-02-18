"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../JamesWebb/jamesWebb.css";
import "./aboutMe.css"

const AboutMe = () => {
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
        <div className="about-container">
            <div className="">
                <img
                    src="./image/About/profile.png"
                    alt="picture of ben louis"
                    width={100}
                    height={100}
                    className="about-profile"
                />
            </div>
            <div className="about-right">
              <p className="Pop32">A little bit about me,</p>
              <p className="Head">I'm Ben Louis</p>
              <p className="Pop32">A skilled web designer and developer with a passion for sustainable design while being user friendly, as well as lover of the great outdoors. I strive to create visually captivating and solutions for all users while leaving a positive impact. From ideation to designing and marketing the final product I enjoy working collaboratively to find creative solutions to complex problems.</p>
            </div>
        </div>

        <div className="tert-container">
            <div className="tert-top-container" ref={el => fadeRefs.current[6] = el}>

            </div>
            
            <div className="tert-mockup" ref={mockupRef}>
            <p className="Pop32 mb-2">
                Began as a storyboard to understand how the video was shot and edited. This allowed the team to organize the entire process in an clear manner.
            </p>
            <img 
                src="/image" 
                width={100} 
                height={100} 
                className="tert-image"
                alt="After Effects Project"
            />
            </div>
            <div className="tert-mockup" ref={mockupRef}>
                <>
                </>
            </div>
        </div>
    </>
  );
};

export default AboutMe;