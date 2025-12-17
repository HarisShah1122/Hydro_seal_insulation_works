"use client";
import MainMenu from '../header-menu';
import Search from '../search';
import { useEffect, useState } from 'react';
import SideBar from '../offcanvas';
import logo1 from "../../../../public/assets/img/logo/hydroseal logo.jpg";
import logo2 from "../../../../public/assets/img/logo/hydroseal logo.jpg";
import MobileMenuPopup from '../mobile-menu/menu-area';
import Link from 'next/link';
import LanguageSwitcher from '../../../LanguageSwitcher';
import { useTranslations } from 'next-intl';

const HeaderOne = ({variant}) => {
    const t = useTranslations('nav');
    const tHeader = useTranslations('header');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [search, setSearch] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
        <div className="top__bar">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-md-7">
                        <div className="top__bar-left">
                            <Link href="tel:+971528595217"><i className="fas fa-phone-alt"></i>{tHeader('phone')}</Link>
                            <Link href="mailto:hydroseal.insulation@gmail.com"><i className="fas fa-envelope"></i>{tHeader('email')}</Link>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-5">
                        <div className="top__bar-right">
                            <Link href="https://www.google.com/maps"><i className="fas fa-map-marker-alt"></i>{tHeader('location')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`header__area ${ variant ? variant : "" } header__sticky ${isSticky ? "header__sticky-sticky-menu" : ""}`}>
            <div className="container">
                <div className="header__area-menubar">
                    <div className="header__area-menubar-left">
                        <div className="header__area-menubar-left-logo">
                            <Link href="/"><img src={logo1.src} alt="logo" style={{maxHeight: '60px', width: 'auto'}} /></Link>
                        </div>
                    </div>
                    <div className="header__area-menubar-center">
                        <div className="header__area-menubar-center-menu">
                            <MainMenu />
                        </div>
                    </div>
                    <div className="header__area-menubar-right">
                        <div className="header__area-menubar-right-box">
                            {/* Language Switcher */}
                            <LanguageSwitcher />
                            
                            {/* <div className="header__area-menubar-right-box-search">
                                <div className="search">	
                                    <span className="header__area-menubar-right-box-search-icon open" onClick={() => setSearch(true)}>
                                        <i className="flaticon-loupe"></i>
                                    </span>
                                </div>
                            </div> */}
                            <div className="header__area-menubar-right-box-sidebar">
                                <div className="header__area-menubar-right-box-sidebar-popup-icon" onClick={() => setSidebarOpen(true)}>
                                    <span className="bar-1"></span>
                                    <span className="bar-2"></span>
                                    <span className="bar-3"></span>
                                </div>
                            </div>
                            <div className="header__area-menubar-right-box-btn">
                                <Link className="btn-one" href="/request-quote">{t('getQuote')}<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        <div className="header__area-menubar-right-responsive-menu menu__bar">
                            <i className="flaticon-menu-1" onClick={() => setMenuSidebar(true)}></i>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <MobileMenuPopup isOpen={menuSidebar} setIsOpen={setMenuSidebar} popupLogo={logo2} />
        <Search isOpen={search} setIsOpen={setSearch} />
        </>
    );
};

export default HeaderOne;