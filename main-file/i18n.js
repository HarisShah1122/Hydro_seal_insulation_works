import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'ar'];

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    locale = 'en'; // Fallback to English if locale is invalid
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});

