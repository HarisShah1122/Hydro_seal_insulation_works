"use client"
import { useState } from "react";
import { useTranslations } from 'next-intl';

const RequestQuoteMain = () => {
    const t = useTranslations('requestQuotePage');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        services: [],
        location: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Quote Request Submitted:', formData);
        alert('Thank you! We will contact you shortly with a quote.');
        // Here you can integrate with EmailJS or your backend API
    };

    const handleCheckboxChange = (service) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }));
    };

    return (
        <div className="request-quote__area section-padding">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="request-quote__area-inputs">
                        <div className="request-quote__area-input-field">
                            <label htmlFor="first-name">First Name *</label>
                            <input 
                                type="text" 
                                id="first-name" 
                                placeholder="First Name" 
                                value={formData.firstName}
                                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                required
                            />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="last-name">Last Name *</label>
                            <input 
                                type="text" 
                                id="last-name" 
                                placeholder="Last Name" 
                                value={formData.lastName}
                                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                required
                            />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="email">Email Address *</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="Email" 
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="number">Phone Number *</label>
                            <input 
                                type="text" 
                                id="number" 
                                placeholder="+971 50 123 4567" 
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                required
                            />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="company">Company/Organization</label>
                            <input 
                                type="text" 
                                id="company" 
                                placeholder="Your Company Name" 
                                value={formData.company}
                                onChange={(e) => setFormData({...formData, company: e.target.value})}
                            />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="project-type">Project Type *</label>
                            <select 
                                id="project-type" 
                                value={formData.projectType}
                                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                                required
                                style={{padding: '15px', width: '100%', border: '1px solid #e0e0e0', borderRadius: '5px'}}
                            >
                                <option value="">Select Project Type</option>
                                <option value="residential">Residential</option>
                                <option value="commercial">Commercial</option>
                                <option value="industrial">Industrial</option>
                                <option value="healthcare">Healthcare Facility</option>
                                <option value="education">Educational Facility</option>
                                <option value="government">Government Project</option>
                            </select>
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="location">Project Location *</label>
                            <input 
                                type="text" 
                                id="location" 
                                placeholder="Al Ain, Abu Dhabi" 
                                value={formData.location}
                                onChange={(e) => setFormData({...formData, location: e.target.value})}
                                required
                            />
                        </div>
                    </div>
                    <div className="request-quote__area-service-input">
                        <span>What services do you need? *</span>
                        <div className="request-quote__area-service-input-single">
                            <input 
                                type="checkbox" 
                                id="thermal-insulation" 
                                checked={formData.services.includes('thermal-insulation')}
                                onChange={() => handleCheckboxChange('thermal-insulation')}
                            />
                            <label style={{marginLeft: '10px'}} htmlFor="thermal-insulation">Thermal Insulation</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input 
                                type="checkbox" 
                                id="waterproofing" 
                                checked={formData.services.includes('waterproofing')}
                                onChange={() => handleCheckboxChange('waterproofing')}
                            />
                            <label style={{marginLeft: '10px'}} htmlFor="waterproofing">Waterproofing Solutions</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input 
                                type="checkbox" 
                                id="hvac-insulation" 
                                checked={formData.services.includes('hvac-insulation')}
                                onChange={() => handleCheckboxChange('hvac-insulation')}
                            />
                            <label style={{marginLeft: '10px'}} htmlFor="hvac-insulation">HVAC Insulation</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input 
                                type="checkbox" 
                                id="acoustic-insulation" 
                                checked={formData.services.includes('acoustic-insulation')}
                                onChange={() => handleCheckboxChange('acoustic-insulation')}
                            />
                            <label style={{marginLeft: '10px'}} htmlFor="acoustic-insulation">Acoustic Insulation</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input 
                                type="checkbox" 
                                id="fire-protection" 
                                checked={formData.services.includes('fire-protection')}
                                onChange={() => handleCheckboxChange('fire-protection')}
                            />
                            <label style={{marginLeft: '10px'}} htmlFor="fire-protection">Fire Protection Insulation</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input 
                                type="checkbox" 
                                id="coatings" 
                                checked={formData.services.includes('coatings')}
                                onChange={() => handleCheckboxChange('coatings')}
                            />
                            <label style={{marginLeft: '10px'}} htmlFor="coatings">Specialized Coatings</label>
                        </div>
                    </div>
                    <label htmlFor="message" className="mb-2">Project Details & Requirements *</label>
                    <textarea 
                        id="message" 
                        placeholder="Please provide details about your project, timeline, and any specific requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                    ></textarea>
                    <input type="submit" value="Submit Quote Request" className="btn-two mt-4" />
                </form>
            </div>
        </div>
    );
};

export default RequestQuoteMain;
