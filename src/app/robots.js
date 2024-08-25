export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/',
      },
      sitemap: 'https://kafinder.com/sitemap.xml',
    }
  }