import "./flare.css"
import Project1 from "../Project1/project1";

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
                    <p className="SubHead">Developing Flare came with several design challenges and requirements:</p>
                    <p className="Pop28">1. User Centric Design</p>
                    <p className="Pop20">The app needed to be intuitive and accessible for a diverse audience, including users with little to no technical expertise.</p>
                    
                    {/* <p className="Pop28">2. Quick and Easy Information</p>
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

        </div>
    </div>
    </>

  );
}
