import type { APIRoute } from 'astro';
import { siteConfig } from '@/config';

export const GET: APIRoute = () => {
  const { robots } = siteConfig;
  const sitemapUrl =
    robots.sitemapUrl || `${siteConfig.site.url}/sitemap-index.xml`;

  let content = '';

  for (const rule of robots.rules) {
    content += `User-agent: ${rule.userAgent}\n`;
    if (rule.allow) {
      for (const path of rule.allow) {
        content += `Allow: ${path}\n`;
      }
    }
    if (rule.disallow) {
      for (const path of rule.disallow) {
        content += `Disallow: ${path}\n`;
      }
    }
    content += '\n';
  }

  content += `Sitemap: ${sitemapUrl}\n`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
