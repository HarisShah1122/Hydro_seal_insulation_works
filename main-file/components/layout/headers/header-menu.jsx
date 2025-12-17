"use client";
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const MainMenu = () => {
    const t = useTranslations('nav');
    
    return (
        <>
            <ul>
                <li className="menu-item-has-children">
                    <Link href="/">{t('home')}</Link>
                </li>
               
                <li><Link href="/about">{t('about')}</Link></li>
                
                <li className="menu-item-has-children"><Link href="/services">{t('services')} <i className="fa fa-angle-down"></i></Link>
                    <ul className="sub-menu">
                        <li><Link href="/services/thermal-insulation">{t('thermalInsulation')}</Link></li>
                        <li><Link href="/services/waterproofing-solutions">{t('waterproofing')}</Link></li>
                        <li><Link href="/services/hvac-insulation">{t('hvacInsulation')}</Link></li>
                        <li><Link href="/services/acoustic-insulation">{t('acousticInsulation')}</Link></li>
                        <li><Link href="/services/fire-protection-insulation">{t('fireProtection')}</Link></li>
                        <li><Link href="/services/specialized-coatings">{t('specializedCoatings')}</Link></li>
                    </ul>
                </li>
                
                <li className="menu-item-has-children"><Link href="/portfolio/2-columns">{t('projects')}</Link>
                </li>
                
                <li><Link href="/clients">{t('clients')}</Link></li>
                
                <li><Link href="/facilities">{t('facilities')}</Link></li>
                
                <li><Link href="/quality-hse">{t('qualityHSE')}</Link></li>
                
                <li><Link href="/contact">{t('contact')}</Link></li>
                
                <li className="menu-item-has-children"><Link href="#">{t('more')} <i className="fa fa-angle-down"></i></Link>
                    <ul className="sub-menu">
                        <li><Link href="/team">{t('ourTeam')}</Link></li>
                        <li><Link href="/testimonial">{t('testimonials')}</Link></li>
                        <li><Link href="/request-quote">{t('requestQuote')}</Link></li>
                        <li><Link href="/faq">{t('faq')}</Link></li>
                        <li><Link href="/blog">{t('blog')}</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;
