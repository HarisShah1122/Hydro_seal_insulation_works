import Link from 'next/link';
import React from 'react';

const Social = () => {
    return (
        <>
            <ul>
                <li><Link href="https://www.facebook.com/share/1a3G8Yry23/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="https://www.tiktok.com/@www.hsiwwaterproofing?_r=1&_t=ZS-950uhKkW93N" target="_blank"><i className="fab fa-tiktok"></i></Link></li>
                                <li><Link href="https://linkedin.com" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
            </ul>            
        </>
    );
};

export default Social;