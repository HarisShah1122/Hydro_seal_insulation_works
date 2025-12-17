import Link from 'next/link';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li className="menu-item-has-children">
                    <Link href="/">Home</Link>
                    
                </li>
                <li className="menu-item-has-children">
                  
                
                    
                </li>
               
                <li className="menu-item-has-children"><Link href="/services">Services </Link>
                    {/* <ul className="sub-menu"> */}
                        {/* <li><Link href="/services">Services 01</Link></li> */}
                        {/* <li><Link href="/services-two">Services 02</Link></li> */}
                        {/* <li><Link href="/services/data-analytics">Services Details</Link></li> */}
                    {/* </ul> */}
                </li>
                <li className="menu-item-has-children"><Link href="/portfolio/2-columns">Portfolio</Link>
                    
                </li>
                {/* <li className="menu-item-has-children"><Link href="#">Blog <i className="fa fa-angle-down"></i></Link>
                    <ul className="sub-menu">
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog/ux-ui-designing-the-future-web-design">Blog Details</Link></li>
                    </ul>
                </li> */}
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                
                <li className="menu-item-has-children"><Link href="#">More <i className="fa fa-angle-down"></i></Link>
                    <ul className="sub-menu">
                        
                        <li><Link href="/blog">Blogs</Link></li>
                        <li><Link href="/testimonial">Testimonials</Link></li>

                        {/* <li><Link href="/pricing-plan">Pricing Plan</Link></li> */}
                  

                        <li className="menu-item-has-children"><Link href="/team">Team</Link></li>
                        <li><Link href="/request-quote">Request Quote</Link></li>
                        <li><Link href="/faq">Faq</Link></li>
                        
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;