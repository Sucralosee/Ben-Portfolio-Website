"use client";
import React, { useEffect } from 'react';
import Project1 from "../Project1/project1";

import "./LH.css";

const LH = ({ 
    Head1 = "Local Harvest", 
    Head2 = "2024", 
    Head3 = "BCIT - IDSP Project", 
    Head4 = "My Role(s): UX/UI Design"
}) => {
    useEffect(() => {
        const images = document.querySelectorAll('.carousel img');
        
        images.forEach((img, index) => {
            img.addEventListener('mouseover', () => {
                images.forEach(i => {
                    i.style.zIndex = 0; // Reset z-index for all images
                    i.style.filter = 'brightness(50%)'; // Darken all images
                });
                img.style.zIndex = 1; // Bring the hovered image to the front
                img.style.filter = 'brightness(100%)'; // Make the hovered image fully bright
            });

            img.addEventListener('click', () => {
                images.forEach(i => {
                    i.style.zIndex = 0; // Reset z-index for all images
                    i.style.filter = 'brightness(50%)'; // Darken all images
                });
                img.style.zIndex = 1; // Bring the clicked image to the front
                img.style.filter = 'brightness(100%)'; // Make the clicked image fully bright
            });
        });
    }, []);

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
                    <img src="/image/LHlogo.svg" alt="logo" width={800} height={100} />
                    <p className="SubHead role-overview"> My Role</p>
                    <p className="Pop20">UX/UI Design: Oversaw the design of the app from start to finish.
                    </p>
                    <p className="Pop20">Design: Went through multiple rounds of app design iterations from lo-fi to hi-fi to figure out what worked best.
                    </p>
                    <p className="Pop20">User Testing: Conducted numerous testing sessions to understand and adjust the prototypes of the app to improve the flow and usability within the app.
                    </p>
                    <div>
                        <p className="SubHead">Tools that were used</p>
                        <img src="/image/figmalogo.svg" alt="logo" width={250} height={50} className="figma-logo"/>
                    </div>
                </div>
                <div className="right-overview">
                    <video width="500" height="800" autoPlay loop>
                        <source src="/video/lhlogging.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div className="tertiary-container">
                <div className="left-tertiary">
                    <p className="Head">Key Design Choices</p>
                    <p className="SubHead">Account Page</p>
                    <p className="Pop20">The design of the vendor account page emphasizes simplicity and clarity to ensure seamless navigation for users managing their marketplace presence. Each section is thoughtfully structured to provide quick access to essential features like order management, product inventory, and vendor profile customization.</p>
                    
                </div>
                <div className="right-tertiary">
                    <div className="carousel">
                        <img src="/image/LH-image/LH-Acc6.png" alt="main local harvest account page" width={500} height={800} />
                        <img src="/image/LH-image/LH-Acc5.png" alt="main local harvest account page" width={500} height={800} />
                        <img src="/image/LH-image/LH-Acc4.png" alt="main local harvest account page" width={500} height={800} />
                        <img src="/image/LH-image/LH-Acc3.png" alt="main local harvest account page" width={500} height={800} />
                        <img src="/image/LH-image/LH-Acc1.png" alt="main local harvest account page" width={500} height={800} />
                        <img src="/image/LH-image/LH-Acc.png" alt="main local harvest account page" width={500} height={800} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LH;