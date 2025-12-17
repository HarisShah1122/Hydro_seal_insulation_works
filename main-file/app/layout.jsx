import "./globals.css";
import BootstrapProvider from "../components/BootstrapProvider";
import Script from 'next/script';

export const metadata = {
    title: 'Hydro Seal Insulation Works',
    description: 'Professional Insulation & Waterproofing Solutions in Al Ain, Abu Dhabi',
    icons: {
        icon: [
            { url: '/assets/img/logo/hydroseal logo.jpg', sizes: '16x16', type: 'image/jpg' },
            { url: '/assets/img/logo/hydroseal logo.jpg', sizes: '32x32', type: 'image/jpg' }
        ],
        shortcut: '/assets/img/logo/hydroseal logo.jpg',
        apple: '/assets/img/logo/hydroseal logo.jpg'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
            </head>
            <body>
                <BootstrapProvider>
                    {children}
                </BootstrapProvider>
            </body>
        </html>
    );
}