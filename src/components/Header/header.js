"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

import "./header.css";

const Header = ({ title = "Header" }) => {
  const titleRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    // Initial state
    gsap.set(titleRef.current, {
      y: 75,
      opacity: 0
    });

    // Create timeline
    tl.current = gsap.timeline({ paused: true })
      .to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out"
      });

    // Play the timeline on mount
    tl.current.play();

    const handleScroll = () => {
      if (window.scrollY > 20) {
        gsap.to(titleRef.current, {
          y: -75,
          opacity: 0,
          duration: 1,
          ease: "power4.out"
        });
      } else {
        gsap.to(titleRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out"
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header-container">
    <Link href={`/${title}`} className="header-title">
      <h1 ref={titleRef}>{title}</h1>
    </Link>
  </div>
  );
}

export default Header;