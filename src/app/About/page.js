import Image from "next/image";
import Header from "@/components/Header/header";

import Menu from "@/components/Menu/menu";

export const metadata = {
  title: "BL Porfolio | About",
  description: "About Ben Louis",
};


export default function About() {
  return (
    <>
      <Header title="About Me" />
      <div className="page-content hero-about">
        <div class="max-w-3xl mx-auto px-6 py-8 bg-white">
        <section class="mb-8">
            {/* <h1 class="mb-4 pb-2 border-b-2 border-gray-200">About Me</h1> */}
            <p class="leading-relaxed">As a passionate advocate for sustainable design and a lover of the great outdoors, I bring a unique blend of creativity and environmental consciousness to every project I undertake. With a focus on nature-inspired branding and web design, I strive to create visually captivating and environmentally responsible solutions that leave a positive impact.</p>
        </section>

        <section class="mb-8">
            <h2 class="mb-4 pb-2 border-b-2 border-gray-200">Background</h2>
            <div class="space-y-4">
                <p class="leading-relaxed">I am currently pursuing Digital Design and Development at the British Columbia Institute of Technology, where I've developed expertise in graphic design, branding, and digital marketing. My education has focused on understanding how users interact with brands across digital platforms, emphasizing accessible and trustworthy web experiences. Through my coursework and projects, I've mastered the principles of user experience (UX) and user interface (UI) design, applying these skills to create meaningful digital solutions.</p>
                <p class="leading-relaxed">Previously, I earned an Associate of Arts Diploma in Political Science from Langara College, where I developed strong research and critical thinking abilities. This foundation in political science has given me unique insights into human behavior, social dynamics, and data-driven decision making—skills that prove invaluable when understanding user needs and market trends.</p>
            </div>
        </section>

        <section class="mb-8">
            <h2 class="mb-4 pb-2 border-b-2 border-gray-200">My Approach</h2>
            <p class="mb-4">I believe in creating designs that not only look beautiful but serve a purpose. My approach combines:</p>
            <ul class="list-disc pl-6 space-y-2">
                <li>Sustainable design principles that minimize environmental impact</li>
                <li>User-centered design thinking that prioritizes accessibility and usability</li>
                <li>Collaborative problem-solving that welcomes diverse perspectives</li>
                <li>Innovation that pushes creative boundaries while maintaining functionality</li>
            </ul>
        </section>

        <section class="mb-8">
            <h2 class="mb-4 pb-2 border-b-2 border-gray-200">Featured Projects</h2>
            
            <div class="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 class="mb-3">Flare - Late 2024</h3>
                <p class="mb-3">Flare showcased my ability to blend modern design with practical functionality. This innovative web application focuses on emergency preparedness for wildfires in BC, which included features on:</p>
                <ul class="list-disc pl-6 space-y-2">
                    <li>Real-time emergency alerts and notifications</li>
                    <li>Mapping of current wildfires and risk levels</li>
                    <li>News section</li>
                    <li>Interactive safety resources and guides</li>
                </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="mb-3">Local Harvest - Early 2024</h3>
                <p class="mb-3">Local Harvest represents my commitment to supporting sustainable agriculture and connecting communities at farmer's markets. This project involved creating a comprehensive digital platform that connects local farmers with consumers, featuring:</p>
                <ul class="list-disc pl-6 space-y-2">
                    <li>A user-friendly interface that simplifies the process of finding and purchasing local produce</li>
                    <li>Responsive design optimized for both desktop and mobile use</li>
                </ul>
            </div>
        </section>

        <section class="mb-8">
            <h2 class="mb-4 pb-2 border-b-2 border-gray-200">Leadership & Collaboration</h2>
            <p class="mb-4">Throughout my career, I've fostered inclusive environments where team members feel empowered to contribute their ideas. My leadership style emphasizes:</p>
            <ul class="list-disc pl-6 space-y-2 mb-4">
                <li>Open communication and active listening</li>
                <li>Recognition of diverse perspectives and experiences</li>
                <li>Collaborative problem-solving approaches</li>
                <li>Clear goal-setting and project management</li>
            </ul>
            
            <p class="text-gray-700">By combining my technical skills, creative vision, and commitment to sustainability, I create digital solutions that not only meet current needs but anticipate future challenges. I'm constantly seeking new opportunities to learn, grow, and contribute to projects that make a positive impact on our world.</p>
        </section>
        </div>
      </div>
    </>
  );
}
