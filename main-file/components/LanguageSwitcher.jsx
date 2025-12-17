"use client";
import { useLocale } from 'next-intl';
import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
    const locale = useLocale();
    const [isOpen, setIsOpen] = useState(false);
    const [currentLocale, setCurrentLocale] = useState(locale);

    useEffect(() => {
        setCurrentLocale(locale);
    }, [locale]);

    const switchLanguage = (newLocale) => {
        if (newLocale === currentLocale) {
            setIsOpen(false);
            return;
        }

        // Set cookie for locale preference
        document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000;SameSite=Lax`;
        
        // Update HTML lang and dir attributes
        document.documentElement.lang = newLocale;
        document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
        
        // Update state
        setCurrentLocale(newLocale);
        setIsOpen(false);
        
        // Reload page to apply new locale
        setTimeout(() => {
            window.location.reload();
        }, 100);
    };

    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧', shortName: 'EN' },
        { code: 'ar', name: 'العربية', flag: '🇦🇪', shortName: 'AR' }
    ];

    const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

    return (
        <div className="language-switcher" style={{ position: 'relative', marginRight: '15px' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="language-switcher-btn"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#fff',
                    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.4)',
                    transition: 'all 0.3s ease',
                    minWidth: '110px',
                    justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.6)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.4)';
                }}
            >
                <span style={{ fontSize: '18px' }}>{currentLanguage.flag}</span>
                <span>{currentLanguage.shortName}</span>
                <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`} style={{ fontSize: '11px' }}></i>
            </button>

            {isOpen && (
                <>
                    <div
                        onClick={() => setIsOpen(false)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 999
                        }}
                    />
                    <div
                        className="language-dropdown"
                        style={{
                            position: 'absolute',
                            top: 'calc(100% + 8px)',
                            right: '0',
                            background: '#fff',
                            border: '1px solid #e0e0e0',
                            borderRadius: '12px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                            minWidth: '180px',
                            zIndex: 1000,
                            overflow: 'hidden'
                        }}
                    >
                        {languages.map((lang, index) => (
                            <button
                                key={lang.code}
                                onClick={() => switchLanguage(lang.code)}
                                style={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    background: currentLocale === lang.code 
                                        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                                        : 'transparent',
                                    color: currentLocale === lang.code ? '#fff' : '#333',
                                    border: 'none',
                                    borderTop: index > 0 ? '1px solid #f0f0f0' : 'none',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    fontSize: '14px',
                                    fontWeight: currentLocale === lang.code ? '600' : '500',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    if (currentLocale !== lang.code) {
                                        e.currentTarget.style.background = '#f8f9fa';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (currentLocale !== lang.code) {
                                        e.currentTarget.style.background = 'transparent';
                                    }
                                }}
                            >
                                <span style={{ fontSize: '20px' }}>{lang.flag}</span>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '14px', fontWeight: '600' }}>{lang.name}</div>
                                    <div style={{ 
                                        fontSize: '11px', 
                                        opacity: 0.8,
                                        marginTop: '2px'
                                    }}>
                                        {lang.code.toUpperCase()}
                                    </div>
                                </div>
                                {currentLocale === lang.code && (
                                    <i className="fas fa-check" style={{ fontSize: '14px' }}></i>
                                )}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default LanguageSwitcher;

