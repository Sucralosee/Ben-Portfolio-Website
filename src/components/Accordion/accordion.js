"use client"
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { Plus } from 'lucide-react';

import './accordion.css';

const Accordion = () => {
  const sections = [
    {
      title: "Account Pages",
      content: [
        "Streamlined Navigation: Designed an intuitive, left-aligned menu hierarchy to provide vendors quick access to essential tools, such as \"Edit Vendor Page,\" \"Add Products,\" and \"Inventory,\" ensuring effortless usability.",
        "Cohesive Visual Identity: Crafted a professional interface using clean typography, intuitive icons, and balanced spacing to enhance clarity and brand consistency.",
        "Task-Focused Screens: Developed user-centered workflows with dedicated screens for specific actions, like updating branding or managing products, enabling efficiency and reducing cognitive load.",
        "Action-Oriented CTAs: Incorporated bold, strategically placed buttons like \"Save Changes\" and \"Add Product\" to guide user interactions seamlessly.",
        "Optimized Data Display: Prioritized essential information such as order details and inventory counts with structured layouts, improving scannability and comprehension."
      ]
    },
    {
      title: "Market Pages",
      content: [
        "Engaging Visual Hierarchy: Highlighted key details like market names, vendor descriptions, and operating hours with impactful images and prominent headings to draw users in.",
        "User-Friendly Organization: Designed grid layouts and concise descriptions to simplify browsing and present vendor options without overwhelming users.",
        "Familiar UI Elements: Integrated recognizable patterns, such as labeled sections for \"Location\" and \"Vendors,\" to promote intuitive navigation.",
        "Encouraging Exploration: Designed minimalist \"View More\" buttons to prompt further interaction while maintaining a clean, uncluttered layout.",
        "Consistent User Experience: Delivered a polished aesthetic with cohesive card designs, aligned text, and uniform spacing for visual and functional harmony."
      ]
    },
    {
      title: "Checkout Pages",
      content: [
        "Clear User Journey: Designed a step-by-step checkout flow that simplifies the process, reducing user effort and increasing confidence.",
        "Adaptive Payment Options: Offered flexible \"Pay in Person\" and \"Pay Online\" buttons to cater to diverse preferences with clear, actionable design.",
        "Error-Resistant Forms: Created streamlined, compact input fields with ample spacing to minimize mistakes and enhance usability.",
        "Transparent Feedback: Included real-time visual updates, such as order subtotals and confirmation messages, to build trust in transactions.",
        "Mobile-First Approach: Optimized the layout for smaller screens, with responsive buttons and easy-to-tap elements for seamless mobile interactions."
      ]
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const contentRefs = useRef([]);
  const iconRefs = useRef([]);

  const toggleAccordion = (index) => {
    const content = contentRefs.current[index];
    const icon = iconRefs.current[index]?.querySelector("svg"); // Target the SVG inside Lucide `Plus`
    const isExpanded = expandedIndex === index;

    if (isExpanded) {
      gsap.to(content, { height: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(icon, { rotate: "-=360", transformOrigin: "center", duration: 0.5, ease: "power2.inOut" }); // Reverse spin
      setExpandedIndex(null);
    } else {
      if (expandedIndex !== null) {
        const prevContent = contentRefs.current[expandedIndex];
        const prevIcon = iconRefs.current[expandedIndex]?.querySelector("svg");
        gsap.to(prevContent, { height: 0, duration: 0.3, ease: "power2.out" });
        gsap.to(prevIcon, { rotate: "-=360", transformOrigin: "center", duration: 0.5, ease: "power2.inOut" }); // Reverse spin previous
      }
      gsap.to(content, { height: content.scrollHeight, duration: 0.75, ease: "power2.out" });
      gsap.to(icon, { rotate: "+=360", transformOrigin: "center", duration: 0.5, ease: "power2.inOut" }); // Full spin on open
      setExpandedIndex(index);
    }
  };

  return (
    <div className="accordion-container">
      {sections.map((section, index) => (
        <div key={index} className="accordion-section SubHead">
          <div className="accordion-button">
            <button
              className="accordion-header SubSub"
              onClick={() => toggleAccordion(index)}
            >
              {section.title}
            </button>
            <div className="x-icon" ref={(el) => (iconRefs.current[index] = el)}>
              <Plus width={48} height={48}  />
            </div>
          </div>
          <div
            className="accordion-content"
            ref={(el) => (contentRefs.current[index] = el)}
            style={{ height: 0, overflow: "hidden" }}
          >
            <ul className="Pop20">
              {section.content.map((item, idx) => (
                <li className="main-accordion" key={idx}>&#9205; {item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
