'use client';

import { useState } from "react";

const FAQComponent = () => {
    const FAQs = [
        { title: "What is Zariyaa?", description: "Zariyaa is a platform that provides wellness programs for companies and individuals." },
        { title: "Who can benefit from Zariyaa’s programs?", description: "Our programs are designed for corporate employees, HR teams, business leaders, and individuals looking to improve workplace well-being." },
        { title: "How do I know which program is right for my company?", description: "You can consult with our experts to tailor a program suited to your company's goals and culture." },
        { title: "What are Wellness Festivals? 🎉", description: "Wellness Festivals are interactive events promoting mental, physical, and emotional well-being through activities and workshops." },
        { title: "What is the Employee Happiness Program (EHP)? 😌", description: "EHP is a program designed to boost employee morale and workplace satisfaction." },
        { title: "What are Self-Experiential Programs? 🧘", description: "These are hands-on sessions encouraging personal growth and mindfulness." },
        { title: "What are Wellness Retreats (Zenscape)? 🌿", description: "Zenscape retreats offer a rejuvenating escape focused on mental clarity and physical relaxation." },
        { title: "What are Zen Spaces? 🧘‍♂️", description: "Zen Spaces are calming, immersive environments designed to promote relaxation and focus in the workplace." },
        { title: "How can I book a Zariyaa program for my company?", description: "You can contact us directly or fill out the inquiry form on our website." },
        { title: "Are these programs available online or only in-person?", description: "We offer both online and in-person options to suit your needs." },
        { title: "How long do the programs last?", description: "Program durations vary from 1-day events to ongoing monthly sessions, depending on your preferences." }
    ];

    return (
        <div className="faq-container">
            <h3 className="faq-title">Frequently Asked Questions</h3>
            <p className="faq-subtitle">
                Here are some frequently asked questions by people. If you can not find an answer to your query here, feel free to contact us.
            </p>
            {FAQs.map((faq, index) => (
                <AccordionCard key={index} title={faq.title} description={faq.description} />
            ))}

            <div>
                <CallToActionComponent />
            </div>
        </div>
    );
};

const AccordionCard = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-card" onClick={() => setIsOpen(!isOpen)}>
            <div className="accordion-title">{title}</div>
            {isOpen && <div className="accordion-content">{description}</div>}
        </div>
    );
};


const CallToActionComponent = () => {

    return (<>        <div className="faq-contact">
        <h4>Any more questions?</h4>
        <p>You can contact us and get your doubts resolved</p>
        <button className="faq-button">📞 +91 99165 86161</button>
    </div></>)
}
export default FAQComponent;
