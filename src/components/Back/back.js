"use client"

import Link from 'next/link';
import "./back.css";
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const Back = ({ title, route }) => {
  const titleRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;

    // Split text into spans
    const text = titleRef.current;
    const chars = text.textContent.split('');
    text.textContent = '';
    chars.forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      text.appendChild(span);
    });

    // Create timeline but don't play it yet
    timelineRef.current = gsap.timeline({ paused: true })
      .fromTo(
        text.children,
        {
          color: 'currentColor'
        },
        {
          color: 'var(--color-primary)',
          duration: 0.1,
          stagger: 0.05,
          ease: 'power2.inOut'
        }
      );

    // Add hover events
    const handleEnter = () => timelineRef.current.play();
    const handleLeave = () => timelineRef.current.reverse();

    text.addEventListener('mouseenter', handleEnter);
    text.addEventListener('mouseleave', handleLeave);

    // Cleanup
    return () => {
      text.removeEventListener('mouseenter', handleEnter);
      text.removeEventListener('mouseleave', handleLeave);
      timelineRef.current.kill();
    };
  }, [title]);

  return (
    <div className="w-full py-4">
      <Link href={`/${route}`} className="arrow-container group">
        <h1 className="SubHead" ref={titleRef}>{title}</h1>
        <span className="arrowBack transform group-hover:translate-x-1 transition-transform duration-200">
          →
        </span>
      </Link>
    </div>
  );
};

export default Back;