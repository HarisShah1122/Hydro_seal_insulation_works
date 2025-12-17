import React, { useState } from 'react';

const FaqOne = () => {

    const [activeIndex, setActiveIndex] = useState(1);
    const faqs = [
        {
            question: "What insulation and waterproofing services do you offer?",
            answer: "We provide comprehensive services including thermal insulation, waterproofing solutions, HVAC insulation, acoustic insulation, fire protection insulation, and specialized protective coatings for residential, commercial, and industrial projects across the UAE."
        },
        {
            question: "How long does a typical insulation project take?",
            answer: "Project duration varies based on size and complexity. A residential villa typically takes 3-5 days, while commercial buildings may require 1-3 weeks. We provide detailed timelines during the initial consultation and ensure minimal disruption to your daily operations."
        },
        {
            question: "Do you provide free site inspection and quotation?",
            answer: "Yes! We offer complimentary site inspections and detailed quotations for all projects. Our team will assess your requirements, recommend appropriate solutions, and provide a comprehensive cost estimate within 24-48 hours of the site visit."
        },
        {
            question: "What are your working hours and service areas?",
            answer: "We operate Saturday to Thursday, 8:00 AM to 6:00 PM. Our primary service area is Al Ain and Abu Dhabi, but we also undertake projects across the UAE. Emergency waterproofing services are available 24/7 for urgent situations."
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

export default FaqOne;
