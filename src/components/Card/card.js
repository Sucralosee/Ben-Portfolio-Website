import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import "./card.css"

const Card = ({
  titleItem = "titleItem",
  subTitleItem = "subTitleItem",
  cardYear = "cardYear",
  cardImage = "cardImage",
  linkPath = "",
}) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const extraContentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    const image = imageRef.current;
    const title = titleRef.current;
    const extraContent = extraContentRef.current;

    // Create hover animation timeline
    const hoverTl = gsap.timeline({ paused: true });
    hoverTl
      .to(image.parentElement, {
        backgroundColor: 'var(--color-L-BG-25)',
        margin: 0,
        duration: 0.3,
        ease: 'power2.inOut'
      })
      .to(title, {
        left: '1rem',
        duration: 0.3,
        ease: 'power2.inOut'
      }, 0)
      // .to(extraContent, {
      //   height: 0,
      //   duration: 0.3,
      //   margin: 0,
      //   ease: 'power2.inOut'
      // }, 0)
      .to(card, {
        height: 'auto',
        duration: 0.3,
        ease: 'power2.inOut'
      }, 0);

    // Mouse move animation
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(image, {
        x: x,
        y: y,
        xPercent: -50,
        yPercent: -50,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    const handleMouseEnter = () => {
      hoverTl.play();
      gsap.to(image, {
        opacity: 1,
        scale: 1,
        duration: 0.3
      });
    };

    const handleMouseLeave = () => {
      hoverTl.reverse();
      gsap.to(image, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        onComplete: () => {
          // Reset position when hidden
          gsap.set(image, { x: 0, y: 0 });
        }
      });
    };

    // Add event listeners to container instead of card
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="card-container ">
      <img
        ref={imageRef}
        src={cardImage}
        className="absolute pointer-events-none opacity-0 object-cover z-10 card-image glow"
        width={100}
        height={100}
        alt={titleItem}
      />
      <Link href={linkPath}>
        <div ref={cardRef} className="card-inner-container">
          <p ref={titleRef} className="Headless">
            {titleItem}
          </p>
          <div ref={extraContentRef} className="card-extra">
            <p className="Pop32">{subTitleItem}</p>
            <p className="Pop20">{cardYear}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;