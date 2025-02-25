"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../JamesWebb/jamesWebb.css";
import "./aboutMe.css";
import Lister from "../Lister/lister";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const visualDiary = [
  "../image/VD/VD.A.jpeg",
  "../image/VD/VD.B.jpeg",
  "../image/VD/VD.C.jpeg",
  "../image/VD/VD.D.JPG",
  "../image/VD/VD.E.jpeg",
  "../image/VD/VD.F.jpeg",
  "../image/VD/VD.G.jpeg",
  "../image/VD/VD.H.jpeg",
  "../image/VD/VD.I.jpeg",
  "../image/VD/VD.J.jpeg",
  "../image/VD/VD.K.jpeg",
  "../image/VD/VD.L.jpeg",
];

const AboutMe = () => {
  // Create refs for animation targets
  const profileRef = useRef(null);
  const aboutTextRefs = useRef([]);
  const visualDiaryRef = useRef(null);
  const masonryRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    // Initial state - set elements to be animated from
    gsap.set(profileRef.current, {
      y: 50,
      opacity: 0
    });

    gsap.set(aboutTextRefs.current, {
      y: 75,
      opacity: 0
    });

    gsap.set(visualDiaryRef.current, {
      y: 75,
      opacity: 0
    });

    gsap.set(masonryRef.current, {
      y: 100,
      opacity: 0
    });

    gsap.set(skillsRef.current, {
      y: 100,
      opacity: 0
    });

    // Animate profile picture on load
    gsap.to(profileRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    });

    // Animate about text sections with stagger
    gsap.to(aboutTextRefs.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
      delay: 0.3
    });

    // Create scroll triggers for the visual diary section
    ScrollTrigger.create({
      trigger: visualDiaryRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(visualDiaryRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        });
      },
      onLeaveBack: () => {
        gsap.to(visualDiaryRef.current, {
          y: 75,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      }
    });

    // Animate the masonry grid
    ScrollTrigger.create({
      trigger: masonryRef.current,
      start: "top 75%",
      onEnter: () => {
        gsap.to(masonryRef.current, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out"
        });
        
        // Animate individual images with stagger
        gsap.from(".masonry-item", {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.7)",
          delay: 0.2
        });
      },
      onLeaveBack: () => {
        gsap.to(masonryRef.current, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power2.in"
        });
      }
    });

    // Animate the skills section
    ScrollTrigger.create({
      trigger: skillsRef.current,
      start: "top 75%",
      onEnter: () => {
        gsap.to(skillsRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        });
        
        // Animate individual skill lists with stagger
        gsap.from(".lister-container", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.3
        });
      },
      onLeaveBack: () => {
        gsap.to(skillsRef.current, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.in"
        });
      }
    });

    // Add a scroll-based parallax effect to the profile image
    gsap.to(profileRef.current, {
      scrollTrigger: {
        trigger: ".about-container",
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      y: 30,
      rotation: 5,
      duration: 1
    });

    return () => {
      // Clean up all ScrollTriggers on component unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="about-container">
          <img
            src="/image/About/Profile.png"
            alt="picture of ben louis"
            width={100}
            height={100}
            className="about-profile"
            ref={profileRef}
          />
        <div className="about-right">
          <p className="Pop32" ref={(el) => (aboutTextRefs.current[0] = el)}>
            A little bit about me,
          </p>
          <p className="Head" ref={(el) => (aboutTextRefs.current[1] = el)}>
            I'm Ben Louis
          </p>
          <p className="Pop24" ref={(el) => (aboutTextRefs.current[2] = el)}>
            A skilled web designer and developer with a passion for sustainable design
            while being user friendly, as well as lover of the great outdoors. I
            strive to create visually captivating and solutions for all users
            while leaving a positive impact. From ideation to designing and
            marketing the final product I enjoy working collaboratively to find
            creative solutions to complex problems.
          </p>
        </div>
      </div>

      <div className="tert-container">
        <div className="tert-masonry">
          <p className="SubHead" ref={visualDiaryRef}>
            Visual Diary
          </p>
          <div ref={masonryRef}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
              gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
            >
              <Masonry>
                {visualDiary.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    style={{ width: "100%", display: "block" }}
                    className="masonry-item"
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
        <div className="about-skills-container" ref={skillsRef}>
          <Lister
            listHead="Creative"
            items={[
              "Photoshop",
              "Illustrator",
              "InDesign",
              "Premier Pro",
              "After Effects",
              "Figma",
              "Canva",
              "Typography",
              "Wire-framing",
              "Responsive Design",
              "Grid Layouts",
              "Usability Testing",
              "Interaction Design",
              "UX/UI",
            ]}
          />
          <Lister
            listHead="Coding"
            items={[
              "Front-end Coding",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind",
              "HTML",
              "CSS",
              "Bootstrap",
              "Git",
              "GSAP",
            ]}
          />
          <Lister
            listHead="Marketing"
            items={[
              "SEO/SEM Marketing",
              "Google Analytics (GA4)",
              "SWOT Analysis",
              "KPI Tracking",
              "Meta Ads Manager",
              "Email Marketing",
              "Digital Marketing Analytics",
            ]}
          />
          <Lister
            listHead="Other"
            items={[
              "Storyboarding",
              "Agile Project Management",
              "Research Skills",
              "Microsoft 365",
              "Windows",
              "Mac",
              "Money Management",
              "WHIMIS",
              "Conflict Resolution",
              "Reliable",
              "Adaptable",
              "Collaboration",
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;