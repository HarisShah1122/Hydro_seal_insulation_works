import "./globals.css";
import BootstrapProvider from "../components/BootstrapProvider";
import Script from 'next/script';

export const metadata = {
    title: 'Skyware IT Solutions',
    description: 'Professional IT Solutions for Your Business',
    icons: {
        icon: [
            { url: '/favicon.jpg', sizes: '16x16', type: 'image/jpg' },
            { url: '/favicon.jpg', sizes: '32x32', type: 'image/jpg' }
        ],
        shortcut: '/favicon.jpg',
        apple: '/favicon.jpg'
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