"use client";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import "./menu.css";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from 'next/navigation'; 
import { AlignJustify } from 'lucide-react';


const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/Designs", label: "Designs" },
  { path: "/Projects", label: "Projects" },
  { path: "/Production", label: "Production" },
  { path: "/Contact", label: "Contact" },
  { path: "/About", label: "About" },
];
// { path: "/Coding", label: "Coding" },


const Menu = () => {
  const container = useRef();

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(() => {
    // Initial state
    gsap.set(".menu-overlay", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
    });
  
    gsap.set(".menu-link-item-holder", {
      y: 75,
      opacity: 0
    });
  
    // Create timeline
    tl.current = gsap.timeline({ paused: true })
      .to(".menu-overlay", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", // Reverse direction
        duration: 1.75,
        ease: "power4.inOut"
      })
      .to(".menu-link-item-holder", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out"
      }, "-=0.75");
  
  }, { scope: container });

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div 
      className="menu-container" 
      ref={container}
      id="navbar"
    >
      <div className="menu-bar">
          <div className="menu-logo">
            <Link href="/">
              <Image src="/white-BL.svg" alt="logo" width={50} height={50} className="menu-logo"/>
            </Link>
          </div>
          <div className="menu-open underline-animation thin" onClick={toggleMenu}>
            <AlignJustify className="hamburger" width={48}/>
              <p className="extra">MENU</p>
          </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-close underline-animation thin" onClick={toggleMenu}>
              <p className="extra">CLOSE</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x hamburger"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </div>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link 
                    href={link.path} 
                    className={`menu-link underline-animation ${
                      pathname === link.path ? 'active' : ''
                    }`}
                  >
                    {link.label}
                    <div className="label-underline"></div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="https://www.instagram.com/bl.graphic/" className="underline-animation thin contact-links social-link" target="_blank" rel="noopener noreferrer">
                Instagram<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>
              </a>
              <div></div>
              <a href="https://www.linkedin.com/in/ben-louis-001116308/" className="underline-animation thin contact-links social-link" target="_blank" rel="noopener noreferrer">
                LinkedIn<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>
              </a>
            </div>
            <div className="menu-info-col">
                <div>
                    <p className="contact-links">Reach me here directly</p>
                </div>
                <div>
                    <a className="contact-links" href="mailto:benlouis.contact@gmail.com" >benlouis.contact@gmail.com</a>
                </div>
            </div>
          </div>
        </div>
        <div className="menu-preview">
            <h2 className="menu-project-head"></h2>
            {/* <p>item</p>
            <p>item</p>
            <p>item</p> */}
        </div>
      </div>
    </div>
  );
};

export default Menu;