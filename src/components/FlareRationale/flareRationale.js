"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./flareRationale.css"

const FlareRationale = () => {
  const sliderRef = useRef(null);
  const timelineRef = useRef(null);

  const rationalePoints = [
    {
        "id": 1,
        "title": "Grid System",
        "description": "The logo integrates a structured grid, symbolizing maps and organization. Subtle grid alignment reflects navigation tools and topographical precision.",
        "image": "/image/LogoFlare/FlareSkele.png"
    },
    {
        "id": 2,
        "title": "Dynamic Angles",
        "description": "Angled elements suggest movement and responsiveness, mirroring the app's proactive approach to wildfire management.",
        "image": "/image/LogoFlare/FlareLines.png"
    },
    {
        "id": 3,
        "title": "Letter F",
        "description": "The core shape subtly incorporates an abstract 'F', reinforcing brand recognition while maintaining the app's visual identity.",
        "image": "/image/LogoFlare/FlareBW.png"
    },
    {
        "id": 4,
        "title": "Soft Rounded Corners",
        "description": "Smooth curves make the design approachable and user-friendly, while symbolizing community support integral to wildfire preparedness.",
        "image": "/image/LogoFlare/FlareCircles.png"
    },
    {
        "id": 5,
        "title": "Flare Symbol",
        "description": "A four-pointed flare placed in the center represents emergency alerts, guidance, and visibility to all users in crisis situations.",

        "image": "/image/LogoFlare/FlareLines.png"
    },
    {
        "id": 6,
        "title": "Color Choice",
        "description": "The bright vibrant orange symbolizes fire, warmth, and urgency of wildfire situations, allowing the logo to stand out from other apps.",
        "image": "/image/LogoFlare/FlareMain.png"
    }
  ];

  useEffect(() => {
    // Create GSAP timeline
    const ctx = gsap.context(() => {
      const points = document.querySelectorAll('.rationale-point');
      const images = document.querySelectorAll('.logo-image-container img');
      
      // Initialize all points./images as invisible
      gsap.set(points, { autoAlpha: 0, y: 20 });
      gsap.set(images, { autoAlpha: 0, scale: 0.9 });
      
      // Show the first point/image initially
      gsap.set(points[0], { autoAlpha: 1, y: 0 });
      gsap.set(images[0], { autoAlpha: 1, scale: 1 });
      
      // Create the timeline
      timelineRef.current = gsap.timeline({ repeat: -1 });
      
      rationalePoints.forEach((_, index) => {
        const nextIndex = (index + 1) % rationalePoints.length;
        
        timelineRef.current.to(points[index], {
          autoAlpha: 0,
          y: -20,
          duration: 0.7,
          ease: "power2.out"
        }, `slide${index}`);
        
        timelineRef.current.to(images[index], {
          autoAlpha: 0,
          scale: 0.9,
          duration: 0.7,
          ease: "power2.out"
        }, `slide${index}`);
        
        timelineRef.current.to(points[nextIndex], {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out"
        }, `slide${index}+=0.5`);
        
        timelineRef.current.to(images[nextIndex], {
          autoAlpha: 1,
          scale: 1,
          duration: 0.7,
          ease: "power2.out"
        }, `slide${index}+=0.5`);
        
        // Pause at each slide
        timelineRef.current.to({}, { duration: 4 }, `slide${index}+=1.2`);
      });
    }, sliderRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="logo-rationale-slider" ref={sliderRef}>
      <div className="ration-slider-container">
        <div className="logo-image-section">
          {rationalePoints.map((point) => (
            <div key={point.id} className="logo-image-container">
              <img src={point.image} alt={point.title} />
            </div>
          ))}
        </div>
        
        <div className="rationale-section">
          <h2>Flare Logo Design Rationale</h2>
          <div className="rationale-points-container">
            {rationalePoints.map((point) => (
              <div key={point.id} className="rationale-point">
                <h3 className='Pop32'>{point.title}</h3>
                <p className='Pop20'>{point.description}</p>
              </div>
            ))}
          </div>
          
          <div className="navigation-dots">
            {rationalePoints.map((point) => (
              <button
                key={point.id}
                className="nav-dot"
                onClick={() => {
                  // Stop the timeline and go to this point
                  if (timelineRef.current) {
                    timelineRef.current.pause();
                    
                    // Hide all points./images
                    const points = document.querySelectorAll('.rationale-point');
                    const images = document.querySelectorAll('.logo-image-container img');
                    
                    gsap.set(points, { autoAlpha: 0, y: 20 });
                    gsap.set(images, { autoAlpha: 0, scale: 0.9 });
                    
                    // Show selected point/image
                    gsap.to(points[point.id - 1], { autoAlpha: 1, y: 0, duration: 0.5 });
                    gsap.to(images[point.id - 1], { autoAlpha: 1, scale: 1, duration: 0.5 });
                  }
                }}
              >
                {point.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlareRationale;