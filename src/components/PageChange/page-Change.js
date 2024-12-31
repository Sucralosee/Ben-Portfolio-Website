'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
  const pageRef = useRef(null);
  const pathname = usePathname();
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    setIsFirstMount(false);
  }, []);

  useEffect(() => {
    if (isFirstMount) {
      // Initial mount animation
      const tl = gsap.timeline();
      
      gsap.set(pageRef.current, {
        x: window.innerWidth * 1.5,
        scale: 0.8,
        transformOrigin: '50% 50%',
        autoAlpha: 1
      });

      tl.to(pageRef.current, {
        x: 0,
        duration: 0.5,
        ease: 'power4.out'
      }).to(pageRef.current, {
        scale: 1,
        duration: 1,
        ease: 'power4.out'
      });
    }
  }, [isFirstMount]);

  useEffect(() => {
    if (!isFirstMount) {
      // Path change animation
      const tl = gsap.timeline();
      
      // Exit animation
      tl.to(pageRef.current, {
        autoAlpha: 0,
        duration: 1,
        ease: 'power4.out'
      }).set(pageRef.current, {
        x: window.innerWidth * 1.5,
        scale: 0.8,
        transformOrigin: '50% 50%'
      }).to(pageRef.current, {
        autoAlpha: 1,
        x: 0,
        duration: 0.5,
        ease: 'power4.out'
      }).to(pageRef.current, {
        scale: 1,
        duration: 1,
        ease: 'power4.out'
      });
    }
  }, [pathname, isFirstMount]);

  return (
    <div ref={pageRef} className="page-transition-wrapper">
      {children}
    </div>
  );
};

export default PageTransition;