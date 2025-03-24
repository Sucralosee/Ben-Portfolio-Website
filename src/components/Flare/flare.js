import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./flare.css";
import Project1 from "../Project1/project1";
import Card from "../Card/card";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Flare() {
  // Create refs for animated elements
  const containerRef = useRef(null);
  const headerSectionRefs = useRef([]);
  const imageRefs = useRef([]);
  const contentSectionRefs = useRef([]);
  const cardRefs = useRef([]);
  const personasRefs = useRef([]);
  const sitemapRef = useRef(null);
  const figmaRef = useRef(null);
  const showcaseRefs = useRef([]);
  const tlMain = useRef();

  useEffect(() => {
    // Set initial states for all animated elements
    gsap.set([...headerSectionRefs.current, ...imageRefs.current, ...contentSectionRefs.current, ...cardRefs.current, ...personasRefs.current, sitemapRef.current, figmaRef.current, ...showcaseRefs.current], {
      y: 75,
      opacity: 0
    });

    // Main timeline for initial load animations
    tlMain.current = gsap.timeline({ paused: true })
      .to(headerSectionRefs.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1
      })
      .to(imageRefs.current[0], {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out"
      }, "-=0.5");

    // Start the animation
    tlMain.current.play();

    // Create scroll triggers for different sections
    contentSectionRefs.current.forEach((ref, index) => {
      ScrollTrigger.create({
        trigger: ref,
        start: "top 80%",
        onEnter: () => {
          gsap.to(ref, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out"
          });
        },
        onLeaveBack: () => {
          gsap.to(ref, {
            y: 75,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
          });
        }
      });
    });

    // Animate triple images section
    imageRefs.current.forEach((ref, index) => {
      if (index > 0) { // Skip the first image which is already animated
        ScrollTrigger.create({
          trigger: ref,
          start: "top 85%",
          onEnter: () => {
            gsap.to(ref, {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: index * 0.2,
              ease: "power4.out"
            });
          },
          onLeaveBack: () => {
            gsap.to(ref, {
              y: 75,
              opacity: 0,
              duration: 1,
              ease: "power4.out"
            });
          }
        });
      }
    });

    // Card animation
    ScrollTrigger.create({
      trigger: cardRefs.current[0],
      start: "top 80%",
      onEnter: () => {
        gsap.to(cardRefs.current[0], {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out"
        });
      },
      onLeaveBack: () => {
        gsap.to(cardRefs.current[0], {
          y: 75,
          opacity: 0,
          duration: 1,
          ease: "power4.out"
        });
      }
    });

    // Personas animation with stagger
    ScrollTrigger.create({
      trigger: personasRefs.current[0],
      start: "top 85%",
      onEnter: () => {
        gsap.to(personasRefs.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power4.out"
        });
      },
      onLeaveBack: () => {
        gsap.to(personasRefs.current, {
          y: 75,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power4.out"
        });
      }
    });

    // Sitemap and Figma animations
    [sitemapRef.current, figmaRef.current].forEach((ref, index) => {
      ScrollTrigger.create({
        trigger: ref,
        start: "top 80%",
        onEnter: () => {
          gsap.to(ref, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.3,
            ease: "power4.out"
          });
        },
        onLeaveBack: () => {
          gsap.to(ref, {
            y: 75,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
          });
        }
      });
    });

    // Showcase section animations
    ScrollTrigger.create({
      trigger: showcaseRefs.current[0],
      start: "top 80%",
      onEnter: () => {
        gsap.to(showcaseRefs.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out"
        });
      },
      onLeaveBack: () => {
        gsap.to(showcaseRefs.current, {
          y: 75,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out"
        });
      }
    });

    // Clean up ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Project1
        Head1="Flare"
        Head2="2024"
        Head3="BCIT - IDSP Project"
        Head4="My Role(s): Graphic Design | Developer | Producer"
      />

      <div className="case-container" ref={containerRef}>
        <div className="case-container-top">
          <div className="case-left-content" ref={el => headerSectionRefs.current[0] = el}>
            <p className="SubSub">Wildfires are a growing concern globally, threatening lives, property, and natural ecosystems. There was a need for a user-friendly and accessible tool to help individuals and communities prepare for such emergencies effectively. Flare was created to address this gap by providing essential resources, guidance, and alerts in one cohesive app.</p>
          </div>
          <div className="case-right-image" ref={el => headerSectionRefs.current[1] = el}>
            <img src="/image/Flare/FlareWordmark.png"></img>
          </div>
        </div>
        
        <img src="/image/Flare/VarietyScreens.png" className="case-image-wide" ref={el => imageRefs.current[0] = el}></img>
        
        <div className="case-container-problem">
          <div className="Pop28 case-left-content" ref={el => contentSectionRefs.current[0] = el}>
            <span>Flare was designed to tackle key challenges in wildfire preparedness, emphasizing accessibility, clarity, and usability.</span>{" "}
            <span className="highlight-issue">The lack of a centralized platform</span> for wildfire resources left users struggling to find clear, reliable information.{" "}
            <span className="highlight-issue">Emergency planning felt overwhelming</span>, with complex steps discouraging proactive action.{" "}
            <span>Flare simplifies this process by offering clear, actionable guidance, ensuring individuals can quickly understand what to do before, during, and after a wildfire.</span>

            <div className="case-links">
              <div className="links-container">
                <a href="https://www.flare-bc.com/" target="_blank" rel="noreferrer">Visit Site</a>
              </div> 
              <div className="links-container">
                <a href="https://github.com/noonnofus/Flare_IDSP" target="_blank" rel="noreferrer">Visit Github</a>
              </div> 
            </div>
            
            <div className="case-issues">
              <p className="Pop32 mb-6">Developing Flare came with several design Goals:</p>
              <p className="Pop32">1. User Centric Design</p>
              <p className="Pop24">The app needed to be intuitive and accessible for a diverse audience, including users with little to no technical expertise.</p>
            </div>
          </div>

          <div className="case-right-image" ref={el => contentSectionRefs.current[1] = el}>
            <img src="/image/Flare/HomeScreen.png"></img>
          </div>
        </div>

        <div className="case-container-triple">
          <img src="/image/Flare/DangerScreen.png" className="case-third" ref={el => imageRefs.current[1] = el}></img>
          <img src="/image/Flare/fullScreenMap.png" className="case-third case-seb" ref={el => imageRefs.current[2] = el}></img>
          <img src="/image/Flare/MapScreen.png" className="case-third" ref={el => imageRefs.current[3] = el}></img>
        </div>

        <div className="case-container-link">
          <div className="case-left-content" ref={el => contentSectionRefs.current[2] = el}>
            <p className="Pop32">2. Branding</p>
            <p className="Pop20">Flare's branding needed to be simple yet reflect Flare's wider design personality. With its bento design and the usage of rounded corners. The color choices reflected the urgent nature of the app and to mimic the color of fire.</p>
            <p className="Pop32 case-left-arrow">Read more about the Branding here <span className="arrowBack transform group-hover:translate-x-1 transition-transform duration-200">→</span></p>
            <p className="Pop32">3. Collaboration</p>
            <p className="Pop20">Managed the entire design and development process within a sprint-based workflow, balancing tight deadlines while prioritizing tasks to ensure efficient execution. Took on a leadership role within a diverse, seven-member team, fostering clear communication and collaboration across different specializations. By coordinating efforts, addressing challenges proactively, and streamlining workflows, I helped maintain project momentum and deliver high-quality results on time.</p>
          </div>
          <div className="case-right-image case-card-link" ref={el => cardRefs.current[0] = el}>
            <Card 
              titleItem= "Style Guide "
              subTitleItem= "Flare Branding"
              cardYear= "2024"
              cardImage= "/image/LogoFlare/FlareLogoMockup.png"
              linkPath= "/Projects/FlareLogo"
            />
          </div>
        </div>

        <div className="case-container-testing"> 
          <div className="case-left-content" ref={el => contentSectionRefs.current[3] = el}>
            <p className="Pop32">4. User Reaseach / Flow</p>
            <p className="Pop20">Was done to understand market gaps and more specifically user needs.</p>
            <p className="Pop20 mt-4">Two personas were created to reflect the typical user that would potentially find value in Flare as useful tool.</p>
          </div> 
          <div className="flex justify-between personas">
            <img className="case-half" src="/image/Flare/FlarePersona-1.png" ref={el => personasRefs.current[0] = el}></img>
            <img className="case-half" src="/image/Flare/FlarePersona-2.png" ref={el => personasRefs.current[1] = el}></img>
          </div>
          
        </div>
        <p className="Pop32" ref={el => contentSectionRefs.current[5] = el}>Competitive Analysis</p>
        <p className="Pop20" ref={el => contentSectionRefs.current[6] = el}>Through analyzing existing wildfire tracking apps, we identified key gaps in usability and engagement. While many apps provide extensive data, they often lack an intuitive user experience, making it difficult to access critical information quickly. Flare sets itself apart by prioritizing user experience, accessibility, and proactive safety measures to enhance usability and emergency preparedness. </p>
        <p className="Pop32 mt-6" ref={el => contentSectionRefs.current[5] = el}>Research Insights</p>
        <p className="Pop20" ref={el => contentSectionRefs.current[6] = el}>Users need customizable alerts based on their location and risk level to stay informed during wildfire events. Additionally, educational resources should be clear and easy to digest, ensuring users can effectively prepare before wildfires occur.</p>
        {/* ref={el => showcaseRefs.current[2] = el}
        <img src="/image/Flare/FlareUserStoryMap.png" className="case-image-wide mt-6 userStory"></img>  */}


        <div className="case-container-mock"> 
          <p className="Pop32" ref={el => contentSectionRefs.current[3] = el}>5. Site-Map</p>
          <div className="flex flex-col gap-10 mock-cont">
            <div className=".case-image-wide">
              <p className="Pop20" ref={el => contentSectionRefs.current[4] = el}>A sitemap was created to understand how the flow of the features. With the essential features outlined and how users navigate between.</p>
              <img className="case-figma" src="/image/Flare/Sitemap.png" ref={el => sitemapRef.current = el}></img>
            </div>
            <div className=".case-image-wide flare-figma">
              <p className="Pop32" ref={el => contentSectionRefs.current[5] = el}>6. Hi-Fi Mockup</p>
              <p className="Pop20" ref={el => contentSectionRefs.current[6] = el}>This culminated in a hi-fi mockup to test and prototype the features before we started the coding process.</p>
              <iframe className="case-figma" width="800" height="600" src="https://embed.figma.com/design/ZVhJP3JiZJq8jlvfgpW2LF/Flare-Overview?node-id=0-1&embed-host=share" allowFullScreen ref={el => figmaRef.current = el}></iframe>
            </div>
          </div>
        </div>

        <img src="/image/Flare/VarietyScreens.png" className="case-image-wide" ref={el => imageRefs.current[0] = el}></img>


        <div className="case-container-showcase"> 
          <div className="case-left-content" ref={el => showcaseRefs.current[0] = el}>
            <p className="Pop32">6. Showcasing</p>
            <p className="Pop20">Flare was then showcased to a large audience of industry professionals and government officials as part of an effort to gain support and recognition. This required extensive hours of practice to refine the presentation, effectively communicate the product's value, and convincingly position it for potential market entry. Through this experience, I significantly improved my presentation and communication skills, gaining confidence in articulating ideas clearly and engaging with a professional audience.</p>
            <p className="Pop20 mt-6">Additionally, I designed and coded a website which highlighted the design and development process in a blog. As well as a information hub about Flare in general.</p>
            <div className="case-links">
              <div className="links-container">
                <a href="https://flare-wildfire-blog.vercel.app/about" target="_blank" rel="noreferrer">Visit Blog</a>
              </div> 
            </div>
          </div>
          <div className="case-right-image" ref={el => showcaseRefs.current[1] = el}>
          <p className="Pop20">The Team!!! With the mayor of Burnaby</p>
            <img src="/image/Flare/FlareTeam.png"></img>
          </div>
        </div>
        
        <p className="Pop32" ref={el => showcaseRefs.current[2] = el}>The blog was designed to showcase the features and development process.</p>
        <img src="/image/Flare/FlareBlog.png" className="case-image-wide" ref={el => showcaseRefs.current[3] = el}></img>
        <img src="/image/Flare/MockupPhoneFlareCropped.png" className="case-image-wide mt-6" ref={el => showcaseRefs.current[3] = el}></img>
        <p className="Pop32">Promotional Material</p>
        <img src="/image/Flare/FlareBrochureFront.png" className="case-image-wide" ref={el => showcaseRefs.current[4] = el}></img>
        <img src="/image/Flare/FlareBrochureBack.png" className="case-image-wide mt-6" ref={el => showcaseRefs.current[4] = el}></img>
        <Card
          titleItem= "Flare Promotional Video"
          subTitleItem= "Video / Audio / Color Editing"
          cardYear= "2024"
          cardImage= "/image/Flare/Flare-PP.png"
          linkPath= "/Production/FlareVideo"
        />
      </div>
    </>
  );
}