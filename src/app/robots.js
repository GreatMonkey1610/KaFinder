export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/', 
      },
      sitemap: 'https://kafinder.com/sitemap.xml',
    };
  }