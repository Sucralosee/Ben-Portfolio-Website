"use client";
import React from "react";
import "./foot.css";
import Link from "next/link";
import { MoveUp } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const menuLinks = [
  { path: "/Designs", label: "Designs" },
  { path: "/Projects", label: "Projects" },
  { path: "/Production", label: "Production" },
  { path: "/Contact", label: "Contact" },
  { path: "/About", label: "About" },
];

export default function Foot() {
  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: 0,
      ease: "power4.inOut"
    });
  };

  return (
    <>
      <div className="footer-outer-container">
        <div className="footer-left-container">
          <div>
            <p className="SuprHead Light-Text">Let's Get in Touch!</p>
            <div className="menu-info">
                <div className="menu-info-col Light-Text">
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
                    <a className="contact-links" href="mailto:benlouis.contact@gmail.com">benlouis.contact@gmail.com</a>
                </div>
                </div>
            </div>
          </div>
          
          <p className="Light-Text ">© {new Date().getFullYear()} Ben Louis. All rights reserved.</p>
        </div>
        <div className="footer-right-container">
          <p className="SuprHead Light-Text">Site Map</p>
          <div className="footer-links">
            {menuLinks.map((link, index) => (
              <div className="footer-link-item" key={index}>
                <Link href={link.path} className="underline-animation thin contact-links">
                  {link.label}
                </Link>
              </div>
            ))}
            <div className="footer-link-item back-to-top">
              <button 
                onClick={scrollToTop} 
                className="Pop20 contact-links underline-animation thin contact-links back-to-top-button"
              >
                Back to Top
                <MoveUp 
                  size={48}
                  className="back-to-top-icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}