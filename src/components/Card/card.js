import React, { useEffect, useRef } from 'react';
import Link from "next/link";
import "./card.css";
import { gsap } from 'gsap';

const Card = ({
  titleItem = "titleItem",
  subTitleItem = "subTitleItem",
  cardYear = "cardYear",
  cardImage = "cardImage",
  linkPath = "",
}) => {
  const cardRef = useRef(null);
  const imageContainerRef = useRef(null);
  const extraContentRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const imageContainer = imageContainerRef.current;
    const extraContent = extraContentRef.current;
    const title = titleRef.current;

    const tl = gsap.timeline({ paused: true });
    
    tl.to(imageContainer, {
      margin: 0,
      duration: 0.3,
      ease: 'power2.inOut'
    })
    .to(title, {
      margin: '0.5rem 1rem',
      duration: 0.3,
      ease: 'power2.inOut'
    }, 0)
    .to(extraContent, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      margin: 0,
      ease: 'power2.inOut'
    }, 0)
    .to(card, {
        height: 'auto',
        duration: 0.3,
        ease: 'power2.inOut'
      }, 0)
    ;

    // Add hover events
    card.addEventListener('mouseenter', () => tl.play());
    card.addEventListener('mouseleave', () => tl.reverse());

    // Cleanup
    return () => {
      card.removeEventListener('mouseenter', () => tl.play());
      card.removeEventListener('mouseleave', () => tl.reverse());
    };
  }, []);

  return (
    <Link href={linkPath}>
      <div ref={cardRef} className="card-container">
        <div ref={imageContainerRef} className="card-image-container">
          <img 
            src={cardImage} 
            className="card-image"
            width={100} 
            height={100}
            alt={titleItem}
          />
        </div>
        <p ref={titleRef} className="card-title SubSub Light-Text bold">
          {titleItem}
        </p>
        <div ref={extraContentRef} className="card-extra">
          <p className="card-subTitle">{subTitleItem}</p>
          <p className="card-subsubTitle Pop20 Light-Text">{cardYear}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;