/**
 * EXAMPLE: How to Convert Components to Use Translations
 * 
 * This file shows before/after examples of updating components
 * to use the i18n system for English/Arabic support
 */

// ==========================================
// EXAMPLE 1: Simple Text Translation
// ==========================================

// BEFORE:
function BeforeComponent() {
    return (
        <div>
            <h1>Welcome to Hydro Seal</h1>
            <p>Professional Insulation Solutions</p>
        </div>
    );
}

// AFTER:
"use client";
import { useTranslations } from 'next-intl';

function AfterComponent() {
    const t = useTranslations('home');
    
    return (
        <div>
            <h1>{t('welcome')}</h1>
            <p>{t('title')}</p>
        </div>
    );
}

// ==========================================
// EXAMPLE 2: Navigation Menu
// ==========================================

// BEFORE:
function BeforeNav() {
    return (
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    );
}

// AFTER:
import { useTranslations } from 'next-intl';
import Link from 'next/link';

function AfterNav() {
    const t = useTranslations('nav');
    
    return (
        <ul>
            <li><Link href="/">{t('home')}</Link></li>
            <li><Link href="/about">{t('about')}</Link></li>
            <li><Link href="/services">{t('services')}</Link></li>
            <li><Link href="/contact">{t('contact')}</Link></li>
        </ul>
    );
}

// ==========================================
// EXAMPLE 3: Button with Multiple Translations
// ==========================================

// BEFORE:
function BeforeButtons() {
    return (
        <div>
            <button>Get Quote</button>
            <button>Contact Us</button>
            <button>Learn More</button>
        </div>
    );
}

// AFTER:
function AfterButtons() {
    const t = useTranslations('common');
    const nav = useTranslations('nav');
    
    return (
        <div>
            <button>{nav('getQuote')}</button>
            <button>{t('contactUs')}</button>
            <button>{t('learnMore')}</button>
        </div>
    );
}

// ==========================================
// EXAMPLE 4: Contact Information
// ==========================================

// BEFORE:
function BeforeContact() {
    return (
        <div>
            <p><i className="fas fa-phone"></i> 052 859 5217</p>
            <p><i className="fas fa-envelope"></i> hydroseal.insulation@gmail.com</p>
            <p><i className="fas fa-map-marker"></i> Al Ain, Abu Dhabi</p>
        </div>
    );
}

// AFTER:
function AfterContact() {
    const t = useTranslations('header');
    
    return (
        <div>
            <p><i className="fas fa-phone"></i> {t('phone')}</p>
            <p><i className="fas fa-envelope"></i> {t('email')}</p>
            <p><i className="fas fa-map-marker"></i> {t('location')}</p>
        </div>
    );
}

// ==========================================
// EXAMPLE 5: Services List
// ==========================================

// BEFORE:
function BeforeServices() {
    return (
        <div>
            <h2>Our Services</h2>
            <div className="service">
                <h3>Thermal Insulation</h3>
                <p>Energy Efficiency & Temperature Control</p>
            </div>
            <div className="service">
                <h3>Waterproofing Solutions</h3>
                <p>Complete Protection Against Water Damage</p>
            </div>
        </div>
    );
}

// AFTER:
function AfterServices() {
    const t = useTranslations('services');
    
    return (
        <div>
            <h2>{t('title')}</h2>
            <div className="service">
                <h3>{t('thermalInsulation')}</h3>
                <p>{t('thermalDesc')}</p>
            </div>
            <div className="service">
                <h3>{t('waterproofing')}</h3>
                <p>{t('waterproofingDesc')}</p>
            </div>
        </div>
    );
}

// ==========================================
// EXAMPLE 6: Footer
// ==========================================

// BEFORE:
function BeforeFooter() {
    return (
        <footer>
            <h4>Follow us</h4>
            <h4>Newsletter</h4>
            <input placeholder="Your e-mail" />
            <p>© Hydro Seal Insulation Works 2025 | All Rights Reserved</p>
        </footer>
    );
}

// AFTER:
function AfterFooter() {
    const t = useTranslations('footer');
    
    return (
        <footer>
            <h4>{t('followUs')}</h4>
            <h4>{t('newsletter')}</h4>
            <input placeholder={t('emailPlaceholder')} />
            <p>{t('copyright')}</p>
        </footer>
    );
}

// ==========================================
// EXAMPLE 7: Using Multiple Translation Sections
// ==========================================

function ComplexComponent() {
    const nav = useTranslations('nav');
    const common = useTranslations('common');
    const services = useTranslations('services');
    
    return (
        <div>
            <h1>{nav('services')}</h1>
            <button>{common('viewAll')}</button>
            <p>{services('subtitle')}</p>
        </div>
    );
}

// ==========================================
// HOW TO ADD NEW TRANSLATIONS
// ==========================================

/*
1. Add to messages/en.json:
{
  "mySection": {
    "title": "My Title",
    "description": "My Description"
  }
}

2. Add to messages/ar.json:
{
  "mySection": {
    "title": "عنواني",
    "description": "وصفي"
  }
}

3. Use in component:
const t = useTranslations('mySection');
<h1>{t('title')}</h1>
<p>{t('description')}</p>
*/

export default function ExampleComponent() {
    return <div>This is an example file - check the code for usage patterns</div>;
}

