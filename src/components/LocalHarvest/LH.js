import Project1 from "../Project1/project1";

import "./LH.css";

const LH = ({ 
    Head1 = "Local Harvest", 
    Head2 = "2024", 
    Head3 = "BCIT - IDSP Project", 
    Head4 = "My Role(s): UX/UI Design"
}) => {
    return (
        <>  
            <Project1
                Head1={Head1} 
                Head2={Head2} 
                Head3={Head3} 
                Head4={Head4} 
            />
        <div className="LH-container">
            <div className="overview-container">
                <div className="left-overview">
                    <p className="Head">Overview</p>
                    <p className="Pop20">Local Harvest was a project that was created from the ground up to solve a market researched problem amongst local farmers and farmers markets in BC. It sought to connect farmers and consumers before a farmers market to pre-order their goods before their products are sold out.</p>
                    <image src="/image/LHlogo.png" alt="logo" width={100} height={100} />
                    <p className="SubHead"> My Role</p>
                    <p className="Pop20">UX/UI Design: Oversaw the design of the app from start to finish.
                    </p>
                    <p className="Pop20">Design: Went through multiple rounds of app design iterations from lo-fi to hi-fi to figure out what worked best.
                    </p>
                    <p className="Pop20">User Testing: Conducted numerous testing sessions to understand and adjust the prototypes of the app to improve the flow and usability within the app.
                    </p>
                    <div>
                        <p className="SubHead">Tools</p>
                        <ul>
                            <li className="Pop20">Figma</li>
                        </ul>
                    </div>
                </div>
                <div className="right-overview">
                    <video width="500" height="800" autoPlay loop>
                        <source src="/video/lhlogging.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
        </>
    )
}

export default LH;