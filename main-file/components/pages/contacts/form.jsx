"use client";
import React from 'react';
import { useTranslations } from 'next-intl';

const FormArea = () => {
    const t = useTranslations('contactForm');
    return (
        <>
            <form action="#">
                <div className="row">
                    <div className="col-md-6 mb-30">
                        <div className="contact__form-area-item">
                            <input type="text" name="name" placeholder={t('fullName')} required="required" />
                        </div>
                    </div>
                    <div className="col-md-6 md-mb-30">
                        <div className="contact__form-area-item">
                            <input type="email" name="email" placeholder={t('emailAddress')} required="required" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-30">
                        <div className="contact__form-area-item">
                            <input type="text" name="subject" placeholder={t('subject')} />
                        </div>
                    </div>
                    <div className="col-md-12 mb-30">
                        <div className="contact__form-area-item">
                            <textarea name="message" placeholder={t('message')}></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="contact__two-right-form-item">
                            <button className="btn-one" type="submit">{t('submit')}</button>
                        </div>
                    </div>
                </div>
            </form>            
        </>
    );
};

export default FormArea;