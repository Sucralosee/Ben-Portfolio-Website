"use client";
import React, { useEffect, useRef, useState } from "react";
import Project1 from "../Project1/project1";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "./wrcan.css";
import Overview from "../Overview/overview";

const WRCan = () => {
    const fadeRefs = useRef([]);
    const tertiaryContainerRef = useRef(null);
    const carouselRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Array of image paths for the carousel
    const carouselImages = [
        "/image/Can/WRClassic.png",
        "/image/Can/WRPeach.png",  // You'll need to replace with your actual image paths
        "/image/Can/WRMatcha.png"   // You'll need to replace with your actual image paths
    ];

    useEffect(() => {
        gsap.set(fadeRefs.current, {
            y: 75,
            opacity: 0
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

            // Add right-overview style animation for tertiary-container
            if (tertiaryContainerRef.current) {
                const containerRect = tertiaryContainerRef.current.getBoundingClientRect();
                if (containerRect.bottom < 250) {
                    gsap.to(tertiaryContainerRef.current, {
                        y: -75,
                        opacity: 0,
                        duration: 1,
                        ease: "power4.out"
                    });
                } else {
                    gsap.to(tertiaryContainerRef.current, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power4.out"
                    });
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle carousel transitions
    const nextSlide = () => {
        const nextIndex = (currentSlide + 1) % carouselImages.length;
        
        if (carouselRef.current) {
            // Animate out current slide
            gsap.to(carouselRef.current, {
                opacity: 0,
                x: -50,
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                    setCurrentSlide(nextIndex);
                    // Animate in next slide
                    gsap.fromTo(carouselRef.current, 
                        { opacity: 0, x: 50 },
                        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
                    );
                }
            });
        }
    };

    const prevSlide = () => {
        const prevIndex = (currentSlide - 1 + carouselImages.length) % carouselImages.length;
        
        if (carouselRef.current) {
            // Animate out current slide
            gsap.to(carouselRef.current, {
                opacity: 0,
                x: 50,
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                    setCurrentSlide(prevIndex);
                    // Animate in next slide
                    gsap.fromTo(carouselRef.current, 
                        { opacity: 0, x: -50 },
                        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
                    );
                }
            });
        }
    };

    return (
        <>  
            <Project1
                Head1="White Rabbit Liquer"
                Head2="2024"
                Head3="Can Design" 
                Head4="" 
            />
            <Overview
                Head="Overview"
                HeadContent="This can design series reimagines the nostalgic charm of the classic Chinese White Rabbit candy, transforming it into a trio of sophisticated alcoholic beverages. Each design captures the essence of the beloved candy while introducing a modern twist, appealing to both nostalgic adults and adventurous drinkers."
                SubHead=""
                Top1="Design Philosophy"
                Content1="The design philosophy centers on blending nostalgia with contemporary elegance. By incorporating the iconic White Rabbit imagery and typography, the cans evoke a sense of familiarity and comfort. At the same time, the sleek, modern layout and premium finishes elevate the brand, making it suitable for a sophisticated audience. The goal is to create a visual experience that feels both timeless and innovative."
                Top2=""
                Content2=""
                Top3=""
                Content3=""
                LogoAlt1="Adobe Indesign"
                LogoAlt2="Adobe Photoshop"
                LogoAlt3="Adobe Illustrator"
                LogoAlt4=""
                LogoAlt5=""

                Link1 = ""
                LinkContent1= ""
                Link2=""
                LinkContent2=""

                RightImage = "/image/Can/SingleCan.png"
                RightVideo=""
            />
            <div className="poster-container">
                <div className="tertiary-container" ref={tertiaryContainerRef}>
                    <div ref={el => fadeRefs.current[8] = el}>
                        <img src="/image/Can/WRCan-L.png" alt="White Rabbit Can Design" width={100} height={100} className="tertiary-poster"/>
                    </div>                
                </div>
            </div>
            
            <div className="poster-container">
                <div className="tertiary-container">
                    <div className="carousel-container" ref={el => fadeRefs.current[9] = el}>
                        <button 
                            className="carousel-button carousel-button-prev" 
                            onClick={prevSlide}
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        
                        <div className="carousel-image-container" ref={carouselRef}>
                            <img 
                                src={carouselImages[currentSlide]} 
                                alt={`White Rabbit Can Design ${currentSlide + 1}`} 
                                width={100} 
                                height={100} 
                                className="tertiary-poster rabbit"
                            />
                        </div>
                        
                        <button 
                            className="carousel-button carousel-button-next" 
                            onClick={nextSlide}
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                    
                    <div className="carousel-indicators">
                        {carouselImages.map((_, index) => (
                            <button
                                key={index}
                                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => {
                                    if (index !== currentSlide) {
                                        if (index > currentSlide) {
                                            gsap.to(carouselRef.current, {
                                                opacity: 0,
                                                x: -50,
                                                duration: 0.5,
                                                ease: "power2.out",
                                                onComplete: () => {
                                                    setCurrentSlide(index);
                                                    gsap.fromTo(carouselRef.current, 
                                                        { opacity: 0, x: 50 },
                                                        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
                                                    );
                                                }
                                            });
                                        } else {
                                            gsap.to(carouselRef.current, {
                                                opacity: 0,
                                                x: 50,
                                                duration: 0.5,
                                                ease: "power2.out",
                                                onComplete: () => {
                                                    setCurrentSlide(index);
                                                    gsap.fromTo(carouselRef.current, 
                                                        { opacity: 0, x: -50 },
                                                        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
                                                    );
                                                }
                                            });
                                        }
                                    }
                                }}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default WRCan;