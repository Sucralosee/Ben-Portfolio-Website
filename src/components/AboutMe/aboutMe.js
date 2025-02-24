"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../JamesWebb/jamesWebb.css";
import "./aboutMe.css"
import Lister from "../Lister/lister";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

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

]

const AboutMe = () => {
  return (
    <>
        <div className="about-container">
            <div className="">
                <img
                    src="../image/About/profile.png"
                    alt="picture of ben louis"
                    className="about-profile"
                />
            </div>
            <div className="about-right">
              <p className="Pop32">A little bit about me,</p>
              <p className="Head">I'm Ben Louis</p>
              <p className="Pop32">A skilled web designer and developer with a passion for sustainable design while being user friendly, as well as lover of the great outdoors. I strive to create visually captivating and solutions for all users while leaving a positive impact. From ideation to designing and marketing the final product I enjoy working collaboratively to find creative solutions to complex problems.</p>
            </div>
        </div>

        <div className="tert-container">
          <div className="tert-masonry">
            <p className="SubHead">Visual Diary</p>
            <ResponsiveMasonry
                  columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200: 4}}
                gutterBreakpoints={{350: "12px", 750: "16px", 900: "24px"}}
            >
                <Masonry>
                  {visualDiary.map((image, i) => (
                      <img
                          key={i}
                          src={image}
                          style={{width: "100%", display: "block"}}
                      />
                  ))}
                </Masonry>
            </ResponsiveMasonry>
          </div>
          <div className="about-skills-container" >
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