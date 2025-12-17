"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const ResponsiveMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeMenus, setActiveMenus] = useState(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeIcon = (value) => (activeMenu == value ? "mean-clicked" : ""),
    activeSubMenu = (value) => value == activeMenu ? { display: "block" } : { display: "none" };

    const actives = (value) => setActiveMenus(value === activeMenus ? null : value),
    activeIcons = (value) => (activeMenus == value ? "mean-clicked" : ""),
    activeSubMenus = (value) => value == activeMenus ? { display: "block" } : { display: "none" };

    if (!isClient) {
        return (
            <ul>
                <li className='menu-item-has-children'>
                    <Link href='/'>Home</Link>
                </li>  
                <li className='menu-item-has-children'>
                    <Link href='#'>Pages</Link>
                    <ul className='sub-menu' style={{ display: "none" }}>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/testimonial">Testimonials</Link></li>
                        <li className='menu-item-has-children'><Link href='/team'>Teams</Link></li>
                        <li><Link href="/request-quote">Request Quote</Link></li>
                    </ul>
                </li>
                <li className='menu-item-has-children'><Link href='/services'>Services</Link></li>
                <li className='menu-item-has-children'><Link href='/portfolio/2-columns'>Portfolio</Link></li>
                <li className='menu-item-has-children'><Link href='#'>Blog</Link>
                    <ul className='sub-menu' style={{ display: "none" }}>
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog/ux-ui-designing-the-future-web-design">Blog Details</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact">Contact</Link></li>   
            </ul>
        );
    }
  return (
        <>
            <ul>
                <li className='menu-item-has-children'>
                    <Link href='/'>Home</Link>
                </li>  
                <li className='menu-item-has-children'>
                    <Link href='#'>Pages</Link>
                    <ul className='sub-menu' style={activeSubMenu("pages")}>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/testimonial">Testimonials</Link></li>
                        <li className='menu-item-has-children'><Link href='/team'>Teams</Link>
                            
                        </li>
                            <li><Link href="/request-quote">Request Quote</Link></li>
                            
                        </ul>
                    <a className={`mean-expand ${activeIcon("pages")}`} onClick={() => active("pages")}></a>
                </li>
                <li className='menu-item-has-children'><Link href='/services'>Services</Link>
                </li>
                <li className='menu-item-has-children'><Link href='/portfolio/2-columns'>Portfolio</Link>
                  </li>
                <li className='menu-item-has-children'><Link href='#'>Blog</Link>
                    <ul className='sub-menu' style={activeSubMenu("blog")}>
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog/ux-ui-designing-the-future-web-design">Blog Details</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("blog")}`} onClick={() => active("blog")}></a>
                </li>
                <li><Link href="/contact">Contact</Link></li>   
            </ul>  
        </>
    );
};

export default ResponsiveMenu;