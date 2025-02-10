import "./flare.css"
import Project1 from "../Project1/project1";
import Card from "../Card/card";

export default function Flare() {
  return (
    <>
    <Project1
        Head1="Flare"
        Head2="2024"
        Head3="BCIT - IDSP Project"
        Head4="My Role(s): Graphic Design | Developer | Producer"
    />

    <div className="case-container">
        <div className="case-container-top">
            <div className="case-left-content">
                <p className="SubSub">Wildfires are a growing concern globally, threatening lives, property, and natural ecosystems. There was a need for a user-friendly and accessible tool to help individuals and communities prepare for such emergencies effectively. Flare was created to address this gap by providing essential resources, guidance, and alerts in one cohesive app.</p>
            </div>
            <div className="case-right-image">
                <img src="/image/Flare/FlareWordmark.png"></img>
            </div>
        </div>
        <img src="/image/Flare/VarietyScreens.png" className="case-image-wide"></img>
        <div className="case-container-problem">
            <p className="Pop28 case-left-content">
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
                    
                    {/* <p className="Pop32">2. Quick and Easy Information</p>
                    <p className="Pop20">The app was designed based on the bento method to ensure information was given in clear and distinct areas.</p> */}
                </div>
            </p>

            <div className="case-right-image">
                <img src="/image/Flare/HomeScreen.png"></img>
            </div>
        </div>

        <div className="case-container-triple">
            <img src="/image/Flare/HomeScreen.png" className="case-third"></img>
            <img src="/image/Flare/DangerScreen.png" className="case-third"></img>
            <img src="/image/Flare/MapScreen.png" className="case-third"></img>
        </div>

        <div className="case-container-link">
            <div className="case-left-content">
                <p className="Pop32">2. Branding</p>
                <p className="Pop20">Flare's branding needed to be simple yet reflect Flare's wider design personality. With its bento design and the usage of rounded corners. The color choices reflected the urgent nature of the app and to mimic the color of fire.</p>
                <p className="Pop32 case-left-arrow">Read more about the Branding here <span className="arrowBack transform group-hover:translate-x-1 transition-transform duration-200">→</span></p>
                <p className="Pop32">3. Collaboration</p>
                <p className="Pop20">Managed the entire design and development process within a sprint-based workflow, balancing tight deadlines while prioritizing tasks to ensure efficient execution. Took on a leadership role within a diverse, seven-member team, fostering clear communication and collaboration across different specializations. By coordinating efforts, addressing challenges proactively, and streamlining workflows, I helped maintain project momentum and deliver high-quality results on time.</p>
            </div>
            <div className="case-right-image">
                <Card 
                    titleItem= "Flare"
                    subTitleItem= "Graphic Design"
                    cardYear= "2024"
                    cardImage= "/image/Flare/FlareIcon.png"
                    linkPath= "/Designs/FlareLogo"
                />
            </div>
        </div>

        <div className="case-container-testing"> 
            <div className="case-left-content">
                <p className="Pop32">4. User Reaseach / Testing</p>
                <p className="Pop20">Was done to understand market gaps and more specifically user needs.</p>
                <p className="Pop20 mt-4">Two personas were created to reflect the typical user that would potentially find value in Flare as useful tool.</p>
            </div> 
            <div className="flex justify-between">
                <img className="case-half" src="/image/Flare/FlarePersona-1.png"></img>
                <img className="case-half" src="/image/Flare/FlarePersona-2.png"></img>
            </div>
        </div>

        <div className="case-container-mock"> 
            <p className="Pop32">5. Prototyping</p>
            <div className="flex justify-between">
                <div className="case-half">
                    <p className="Pop20">A sitemap was created to understand how the flow of the features. With the essential features outlined and how users navigate between.</p>
                    <img className="case-figma" src="/image/Flare/Sitemap.png"></img>
                </div>
                <div className="case-half">
                    <p className="Pop20">This culminated in a hi-fi mockup to test and prototype the features before we started the coding process.</p>
                    <iframe className="case-figma" width="800" height="600" src="https://embed.figma.com/design/ZVhJP3JiZJq8jlvfgpW2LF/Flare-Overview?node-id=0-1&embed-host=share" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div className="case-container-showcase"> 
            <div className="case-left-content">
                <p className="Pop32">6. Showcasing</p>
                <p className="Pop20">Flare was then showcased to a large audience of industry professionals and government officials as part of an effort to gain support and recognition. This required extensive hours of practice to refine the presentation, effectively communicate the product’s value, and convincingly position it for potential market entry. Through this experience, I significantly improved my presentation and communication skills, gaining confidence in articulating ideas clearly and engaging with a professional audience.</p>
                <p className="Pop20 mt-6">Additionally, I designed and coded a website which highlighted the design and development process in a blog. As well as a information hub about Flare in general.</p>
                <div className="case-links">
                    <div className="links-container">
                        <a href="https://flare-wildfire-blog.vercel.app/about" target="_blank" rel="noreferrer">Visit Blog</a>
                    </div> 
                </div>
            </div>
            <div className="case-right-image">
                <img src="/image/Flare/FlareTeam.png"></img>
            </div>
        </div>

        <img src="/image/Flare/FlareBlog.png" className="case-image-wide"></img>

    </div>
    </>

  );
}
