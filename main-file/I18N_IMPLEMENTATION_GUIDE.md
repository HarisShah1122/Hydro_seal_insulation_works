# i18n Implementation Guide for Hydro Seal Project

## What's Been Set Up

### 1. Installed Packages
- `next-intl` - Internationalization for Next.js App Router

### 2. Files Created
- `i18n.js` - i18n configuration
- `middleware.js` - Language routing middleware
- `messages/en.json` - English translations
- `messages/ar.json` - Arabic translations  
- `components/LanguageSwitcher.jsx` - Language switcher component

### 3. Files Modified
- `components/layout/headers/header/header-one.jsx` - Added language switcher to navbar

## How to Use Translations in Components

### Client Components

```jsx
"use client";
import { useTranslations } from 'next-intl';

export default function MyComponent() {
    const t = useTranslations('nav'); // 'nav' is the section in your JSON file
    
    return (
        <div>
            <h1>{t('home')}</h1>
            <p>{t('services')}</p>
        </div>
    );
}
```

### Server Components

```jsx
import {useTranslations} from 'next-intl';

export default function MyPage() {
    const t = useTranslations('home');
    
    return (
        <div>
            <h1>{t('title')}</h1>
            <p>{t('description')}</p>
        </div>
    );
}
```

## Updating Existing Components

### Example: Updating Footer

**Before:**
```jsx
<h4>Service</h4>
```

**After:**
```jsx
"use client";
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('footer');
    
    return (
        <div>
            <h4>{t('service')}</h4>
            <p>{t('followUs')}</p>
        </div>
    );
}
```

### Example: Updating Navigation

**Before:**
```jsx
<Link href="/about">About</Link>
```

**After:**
```jsx
const t = useTranslations('nav');
<Link href="/about">{t('about')}</Link>
```

## Adding More Translations

### English (messages/en.json)
```json
{
  "newSection": {
    "title": "New Title",
    "description": "New Description"
  }
}
```

### Arabic (messages/ar.json)
```json
{
  "newSection": {
    "title": "عنوان جديد",
    "description": "وصف جديد"
  }
}
```

## Language Switcher

The language switcher has been added to the header. It will automatically:
- Detect current language
- Switch between English and Arabic
- Maintain the current page URL

## RTL Support for Arabic

Add this CSS for proper Arabic (right-to-left) layout:

```css
/* In your global CSS */
html[dir="rtl"] {
    direction: rtl;
}

html[dir="rtl"] .header__area-menubar {
    flex-direction: row-reverse;
}

html[dir="rtl"] .text-right {
    text-align: left;
}

html[dir="rtl"] .text-left {
    text-align: right;
}
```

## Update Layout for RTL

```jsx
// app/layout.jsx
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

export default async function RootLayout({children, params: {locale}}) {
    const messages = await getMessages();
    
    return (
        <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
```

## Step-by-Step Component Updates

### 1. Header Component
```jsx
"use client";
import { useTranslations } from 'next-intl';

const Header = () => {
    const t = useTranslations('header');
    
    return (
        <>
            <Link href="tel:+971528595217">
                <i className="fas fa-phone-alt"></i>{t('phone')}
            </Link>
            <Link href="mailto:hydroseal.insulation@gmail.com">
                <i className="fas fa-envelope"></i>{t('email')}
            </Link>
        </>
    );
}
```

### 2. Services Component
```jsx
const t = useTranslations('services');

<h2>{t('title')}</h2>
<p>{t('subtitle')}</p>
<h3>{t('thermalInsulation')}</h3>
<p>{t('thermalDesc')}</p>
```

### 3. Footer Component
```jsx
const t = useTranslations('footer');

<h4>{t('followUs')}</h4>
<h4>{t('service')}</h4>
<p>{t('copyright')}</p>
```

## Available Translation Keys

### Navigation (nav)
- home, about, services, projects, facilities, qualityHSE, clients, blog, contact, getQuote, requestQuote

### Header (header)
- phone, email, location

### Services (services)
- title, subtitle, thermalInsulation, waterproofing, hvacInsulation, acousticInsulation, fireProtection, specializedCoatings, viewDetails, readMore

### Footer (footer)
- followUs, service, contact, newsletter, emailPlaceholder, readyToStart, requestQuote, makeACall, copyright

### Common (common)
- viewAll, learnMore, readMore, getStarted, contactUs, callNow, emailNow, getFreeQuote, back, next, previous, loading, search

## Testing

1. Start your development server: `npm run dev`
2. The language switcher should appear in the header
3. Click to switch between English (🇬🇧) and Arabic (🇦🇪)
4. Pages will update based on the selected language

## Important Notes

1. **All text must be in JSON files** - Don't hardcode any text in components
2. **Use proper keys** - Follow the structure: section.key (e.g., 'nav.home')
3. **RTL layouts** - Arabic requires right-to-left layout adjustments
4. **URL structure** - English uses `/` and Arabic uses `/ar/`
5. **Images with text** - Consider having separate images for Arabic if they contain text

## Next Steps

1. Update all components to use `useTranslations()`
2. Add RTL CSS for proper Arabic layout
3. Update layout.jsx to detect locale
4. Test all pages in both languages
5. Add more translations as needed

## Need Help?

- Check the JSON files for available translation keys
- Use the examples above as templates
- Always test in both languages after making changes

