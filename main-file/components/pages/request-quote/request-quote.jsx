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
        alert(t('successMessage'));
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
                            <label htmlFor="first-name">{t('firstName')} {t('required')}</label>
                            <input 
                                type="text" 
                                id="first-name" 
                                placeholder={t('firstNamePlaceholder')} 
                                value={formData.firstName}
                                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                required
                            />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="last-name">{t('lastName')} {t('required')}</label>
                            <input 
                                type="text" 
                                id="last-name" 
                                placeholder={t('lastNamePlaceholder')} 
                                value={formData.lastName}
                                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                required
                            />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="email">{t('email')} {t('required')}</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder={t('emailPlaceholder')} 
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="number">{t('phone')} {t('required')}</label>
                            <input 
                                type="text" 
                                id="number" 
                                placeholder={t('phonePlaceholder')} 
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                required
                            />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="company">{t('company')}</label>
                            <input 
                                type="text" 
                                id="company" 
                                placeholder={t('companyPlaceholder')} 
                                value={formData.company}
                                onChange={(e) => setFormData({...formData, company: e.target.value})}
                            />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="project-type">{t('projectType')} {t('required')}</label>
                            <select 
                                id="project-type" 
                                value={formData.projectType}
                                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                                required
                                style={{padding: '15px', width: '100%', border: '1px solid #e0e0e0', borderRadius: '5px'}}
                            >
                                <option value="">{t('selectProjectType')}</option>
                                <option value="residential">{t('residential')}</option>
                                <option value="commercial">{t('commercial')}</option>
                                <option value="industrial">{t('industrial')}</option>
                                <option value="healthcare">{t('healthcare')}</option>
                                <option value="education">{t('education')}</option>
                                <option value="government">{t('government')}</option>
                            </select>
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="location">{t('location')} {t('required')}</label>
                            <input 
                                type="text" 
                                id="location" 
                                placeholder={t('locationPlaceholder')} 
                                value={formData.location}
                                onChange={(e) => setFormData({...formData, location: e.target.value})}
                                required
                            />
                        </div>
                    </div>
                    <div className="request-quote__area-service-input">
                        <span>{t('servicesQuestion')} {t('required')}</span>
                        <div className="request-quote__area-service-input-single">
                            <input 
                                type="checkbox" 
                                id="thermal-insulation" 
                                checked={formData.services.includes('thermal-insulation')}
                                onChange={() => handleCheckboxChange('thermal-insulation')}
                            />
                            <label style={{marginLeft: '10px'}} htmlFor="thermal-insulation">{t('thermalInsulation')}</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input 
                                type="checkbox" 
                                id="waterproofing" 
                                checked={formData.services.includes('waterproofing')}
                                onChange={() => handleCheckboxChange('waterproofing')}
                            />
                            <label style={{marginLeft: '10px'}} htmlFor="waterproofing">{t('waterproofing')}</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input 
                                type="checkbox" 
                                id="hvac-insulation" 
                                checked={formData.services.includes('hvac-insulation')}
                                onChange={() => handleCheckboxChange('hvac-insulation')}
                            />
                            <label style={{marginLeft: '10px'}} htmlFor="hvac-insulation">{t('hvacInsulation')}</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input 
                                type="checkbox" 
                                id="acoustic-insulation" 
                                checked={formData.services.includes('acoustic-insulation')}
                                onChange={() => handleCheckboxChange('acoustic-insulation')}
                            />
                            <label style={{marginLeft: '10px'}} htmlFor="acoustic-insulation">{t('acousticInsulation')}</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input 
                                type="checkbox" 
                                id="fire-protection" 
                                checked={formData.services.includes('fire-protection')}
                                onChange={() => handleCheckboxChange('fire-protection')}
                            />
                            <label style={{marginLeft: '10px'}} htmlFor="fire-protection">{t('fireProtection')}</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input 
                                type="checkbox" 
                                id="coatings" 
                                checked={formData.services.includes('coatings')}
                                onChange={() => handleCheckboxChange('coatings')}
                            />
                            <label style={{marginLeft: '10px'}} htmlFor="coatings">{t('coatings')}</label>
                        </div>
                    </div>
                    <label htmlFor="message" className="mb-2">{t('projectDetails')} {t('required')}</label>
                    <textarea 
                        id="message" 
                        placeholder={t('projectDetailsPlaceholder')}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                    ></textarea>
                    <input type="submit" value={t('submit')} className="btn-two mt-4" />
                </form>
            </div>
        </div>
    );
};

export default RequestQuoteMain;
