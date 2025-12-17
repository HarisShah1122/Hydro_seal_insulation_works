import Link from 'next/link';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li className="menu-item-has-children">
                    <Link href="/">Home</Link>
                </li>
               
                <li><Link href="/about">About Us</Link></li>
                
                <li className="menu-item-has-children"><Link href="/services">Services <i className="fa fa-angle-down"></i></Link>
                    <ul className="sub-menu">
                        <li><Link href="/services/thermal-insulation">Thermal Insulation</Link></li>
                        <li><Link href="/services/waterproofing-solutions">Waterproofing Solutions</Link></li>
                        <li><Link href="/services/hvac-insulation">HVAC Insulation</Link></li>
                        <li><Link href="/services/acoustic-insulation">Acoustic Insulation</Link></li>
                        <li><Link href="/services/fire-protection-insulation">Fire Protection</Link></li>
                        <li><Link href="/services/specialized-coatings">Specialized Coatings</Link></li>
                    </ul>
                </li>
                
                <li className="menu-item-has-children"><Link href="/portfolio/2-columns">Portfolio</Link>
                </li>
                
                <li><Link href="/clients">Clients</Link></li>
                
                <li><Link href="/facilities">Facilities</Link></li>
                
                <li><Link href="/quality-hse">Quality & HSE</Link></li>
                
                <li><Link href="/contact">Contact</Link></li>
                
                <li className="menu-item-has-children"><Link href="#">More <i className="fa fa-angle-down"></i></Link>
                    <ul className="sub-menu">
                        <li><Link href="/team">Our Team</Link></li>
                        <li><Link href="/testimonial">Testimonials</Link></li>
                        <li><Link href="/request-quote">Request Quote</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;
