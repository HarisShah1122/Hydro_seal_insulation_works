import "./globals.css";
import BootstrapProvider from "../components/BootstrapProvider";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getLocale} from 'next-intl/server';

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

export default async function RootLayout({ children }) {
    const locale = await getLocale();
    const messages = await getMessages();
    const isRTL = locale === 'ar';
    
    return (
        <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className={locale}>
            <head>
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