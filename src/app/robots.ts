import type { MetadataRoute } from 'next';

const baseUrl = process.env.BASE_URL;

const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        allow: '/',
        userAgent: '*',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
};

export default robots;
