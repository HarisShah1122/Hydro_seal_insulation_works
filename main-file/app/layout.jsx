import "./globals.css";
import BootstrapProvider from "../components/BootstrapProvider";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getLocale} from 'next-intl/server';

export const metadata = {
    title: {
        default: 'Hydro Seal Insulation Works - Professional Insulation & Waterproofing Solutions',
        template: '%s | Hydro Seal Insulation Works'
    },
    description: 'Professional Insulation & Waterproofing Solutions in Al Ain, Abu Dhabi. Expert thermal insulation, HVAC insulation, waterproofing, and specialized coatings services.',
    keywords: ['insulation', 'waterproofing', 'thermal insulation', 'HVAC insulation', 'Al Ain', 'Abu Dhabi', 'UAE', 'specialized coatings', 'acoustic insulation', 'fire protection'],
    authors: [{ name: 'Hydro Seal Insulation Works' }],
    creator: 'Hydro Seal Insulation Works',
    publisher: 'Hydro Seal Insulation Works',
    metadataBase: new URL('https://hydrosealinsulation.ae'),
    alternates: {
        canonical: '/',
        languages: {
            'en': '/en',
            'ar': '/ar',
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://hydrosealinsulation.ae',
        siteName: 'Hydro Seal Insulation Works',
        title: 'Hydro Seal Insulation Works - Professional Insulation & Waterproofing Solutions',
        description: 'Professional Insulation & Waterproofing Solutions in Al Ain, Abu Dhabi. Expert thermal insulation, HVAC insulation, waterproofing, and specialized coatings services.',
        images: [
            {
                url: '/assets/img/logo/hydroseal logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Hydro Seal Insulation Works',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hydro Seal Insulation Works',
        description: 'Professional Insulation & Waterproofing Solutions in Al Ain, Abu Dhabi',
        images: ['/assets/img/logo/hydroseal logo.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'googlea7bd76da0ee48a90',
    },
    icons: {
        icon: [
            { url: '/assets/img/logo/hydroseal logo.jpg', sizes: '16x16', type: 'image/jpg' },
            { url: '/assets/img/logo/hydroseal logo.jpg', sizes: '32x32', type: 'image/jpg' }
        ],
        shortcut: '/assets/img/logo/hydroseal logo.jpg',
        apple: '/assets/img/logo/hydroseal logo.jpg'
    }
};

export default async function RootLayout({ children }) {
    const locale = await getLocale();
    const messages = await getMessages();
    const isRTL = locale === 'ar';
    
    return (
        <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className={locale}>
            <head>
                <link rel="canonical" href="https://hydrosealinsulation.ae" />
                <meta name="google-site-verification" content="googlea7bd76da0ee48a90" />
                <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
                {isRTL && (
                    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap" rel="stylesheet" />
                )}
            </head>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                <BootstrapProvider>
                    {children}
                </BootstrapProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}