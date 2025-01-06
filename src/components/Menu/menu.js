"use client";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import "./menu.css";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from 'next/navigation'; 


const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/About", label: "About" },
  { path: "/Designs", label: "Designs" },
  { path: "/Coding", label: "Coding" },
  { path: "/Production", label: "Production" },
  { path: "/Contact", label: "Contact" },

];

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
        duration: 1.25,
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
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
          <div className="menu-logo">
            <Link href="/">
              <Image src="/white-BL.svg" alt="logo" width={75} height={75} />
            </Link>
          </div>
          <div className="menu-open" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu">
                  <line x1="4" x2="20" y1="12" y2="12"/>
                  <line x1="4" x2="20" y1="6" y2="6"/>
                  <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
              <p className="extra">MENU</p>
          </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          {/* <div className="menu-logo">
            <Link href="/">
              <Image src="/image/icon_v2.png" alt="logo" width={100} height={100} />
            </Link>
          </div> */}
        <div className="menu-close underline-animation thin" onClick={toggleMenu}>
            <p className="extra">CLOSE</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
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
                <a href="https://www.instagram.com/bl.graphic/" className="underline-animation thin contact-links" target="_blank" rel="noopener noreferrer">Instagram &#8599;</a>
                <a href="https://www.linkedin.com/in/ben-louis-001116308/" className="underline-animation thin contact-links"
                target="_blank" rel="noopener noreferrer">LinkedIn &#8599;</a>
            </div>
            <div className="menu-info-col">
                <div>
                    <p className="contact-links">Reach me here directly</p>
                </div>
                <div>
                    <p className="contact-links">benlouis.contact@gmail.com</p>
                </div>
            </div>
          </div>
        </div>
        <div className="menu-preview">
            <h2>Projects</h2>
            <p>item</p>
            <p>item</p>
            <p>item</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;