import React, { useState } from 'react';

const FaqTwo = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const faqs = [
        {
            question: "What materials do you use for insulation and waterproofing?",
            answer: "We use only premium, internationally certified materials from reputable manufacturers including polyurethane foam, rock wool, fiberglass, elastomeric membranes, bituminous coatings, and specialized waterproofing systems. All materials meet UAE building codes and international standards."
        },
        {
            question: "Are you licensed and insured?",
            answer: "Yes, we are fully licensed by Abu Dhabi Municipality and hold ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications. We maintain comprehensive liability insurance and all our technicians are trained and certified professionals."
        },
        {
            question: "Do you offer warranty on your work?",
            answer: "Absolutely! We provide warranties ranging from 2 to 10 years depending on the service and materials used. Our thermal insulation carries a 5-year warranty, waterproofing systems are backed by 5-10 years, and specialized coatings come with manufacturer warranties up to 10 years."
        },
        {
            question: "How much does insulation or waterproofing cost?",
            answer: "Costs vary based on project scope, materials, and site conditions. Residential insulation typically ranges from AED 50-150 per square meter, while commercial projects are quoted based on specific requirements. Contact us for a detailed, no-obligation quote tailored to your project."
        },
    ];
    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-collapse">
            {faqs.map((faq, index) => (
                <div className="faq-collapse-item" key={index}>
                    <div className={`faq-collapse-item-card ${activeIndex === index ? 'active' : ''}`}>
                        <div className="faq-collapse-item-card-header" onClick={() => toggleFaq(index)}>
                            <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                            <h6>{faq.question}</h6>
                        </div>
                        <div className={`faq-collapse-item-card-header-content ${activeIndex === index ? 'active' : 'display-none'}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqTwo;
