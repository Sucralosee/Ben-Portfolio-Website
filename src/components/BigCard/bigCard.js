import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { MoveRight } from "lucide-react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./bigCard.css"

gsap.registerPlugin(ScrollTrigger);

export default function BigCard({
  cardImage,
  titleItem,
  linkPath,
  subTitleItem,
  cardYear,
  isRightImage,
  bcDesc
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    if (container && image && text) {
      gsap.set(image, {
        clipPath: 'inset(0 100% 0 0)',
        opacity: 0
      });
      
      gsap.set(text, {
        opacity: 0,
        x: isRightImage ? -50 : 50
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top center",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(image, {
        clipPath: 'inset(0 0% 0 0)',
        opacity: 1,
        duration: 1.2,
        ease: "expo.out"
      })
      .to(text, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.8");
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isRightImage]);

  return (
    <div className="bc-container" ref={containerRef}>
      <div 
        className={`bc-inner-container ${isRightImage ? "flex-row-reverse" : "flex-row"}`}
        style={{ flexDirection: isRightImage ? 'row-reverse' : 'row' }}
      >
        <div className="bc-image" ref={imageRef}>
          <img 
            src={cardImage} 
            alt={titleItem}
            className="w-full h-full object-cover"
          />
        </div>
        <div 
          className={`bc-text ${isRightImage ? "items-end text-right" : "items-start text-left"}`}
          ref={textRef}
        >
          <p className="Headless">{titleItem}</p>
          <p className="Pop32">{subTitleItem} - {cardYear}</p>
          <p className="Pop20">{bcDesc}</p>
          <div className={`bc-link ${isRightImage ? "self-end" : "self-start"}`}>
            <Link href={linkPath}>
              <p className="Pop20 Light-Text bc-upper">Let's Check It Out</p>
            </Link>
            <MoveRight width={42} height={42} />
          </div>
        </div>
      </div>
    </div>
  );
}