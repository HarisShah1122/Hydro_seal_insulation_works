
import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';

export default getRequestConfig(async () => {
  // Get locale from cookie or default to English
  const cookieStore = await cookies();
  let locale = cookieStore.get('NEXT_LOCALE')?.value || 'en';
  
  // Validate locale
  if (!['en', 'ar'].includes(locale)) {
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});

