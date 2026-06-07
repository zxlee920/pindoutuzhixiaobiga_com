import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './site.config';

export default defineConfig({
  site: siteConfig.site.url,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      changefreq: siteConfig.sitemap.changefreq as any,
      priority: siteConfig.sitemap.priority,
      serialize: (item) => {
        const pathname = new URL(item.url).pathname;
        if (
          pathname === '/about/' ||
          pathname === '/about' ||
          pathname === '/privacy/' ||
          pathname === '/privacy' ||
          pathname === '/terms/' ||
          pathname === '/terms'
        ) {
          item.priority = 0.3;
          return item;
        }
        if (/^\/blog\/[^/]+\/$/.test(pathname)) {
          item.priority = 0.8;
        }
        return item;
      },
      filter: (page) => {
        if (!siteConfig.sitemap.excludes || siteConfig.sitemap.excludes.length === 0) {
          return true;
        }

        const pathname = new URL(page).pathname;
        return !siteConfig.sitemap.excludes.includes(pathname);
      },
    }),
  ],
});
