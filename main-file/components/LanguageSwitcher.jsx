"use client";
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

const LanguageSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const switchLanguage = (newLocale) => {
        // Remove current locale from pathname if it exists
        const pathnameWithoutLocale = pathname.replace(/^\/(en|ar)/, '');
        
        // Navigate to new locale
        const newPath = newLocale === 'en' 
            ? pathnameWithoutLocale || '/'
            : `/${newLocale}${pathnameWithoutLocale || '/'}`;
        
        router.push(newPath);
        setIsOpen(false);
    };

    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'ar', name: 'العربية', flag: '🇦🇪' }
    ];

    const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

    return (
        <div className="language-switcher" style={{ position: 'relative', marginLeft: '20px' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 15px',
                    background: '#fff',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                }}
            >
                <span>{currentLanguage.flag}</span>
                <span>{currentLanguage.name}</span>
                <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`} style={{ fontSize: '12px' }}></i>
            </button>

            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        right: '0',
                        marginTop: '5px',
                        background: '#fff',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        minWidth: '150px',
                        zIndex: 1000
                    }}
                >
                    {languages.map(lang => (
                        <button
                            key={lang.code}
                            onClick={() => switchLanguage(lang.code)}
                            style={{
                                width: '100%',
                                padding: '10px 15px',
                                background: locale === lang.code ? '#f0f0f0' : 'transparent',
                                border: 'none',
                                textAlign: 'left',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '14px',
                                fontWeight: locale === lang.code ? '600' : '400'
                            }}
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;

