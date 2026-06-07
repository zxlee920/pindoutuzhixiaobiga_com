/**
 * 从 Markdown 正文中提取第一张图片的 URL
 * 支持 ![alt](url) 和 <img src="url"> 两种格式
 */
export function getFirstImage(body?: string): string | undefined {
  if (!body) return undefined;
  // 匹配 markdown 图片语法 ![alt](url)
  const mdMatch = body.match(/!\[.*?\]\((.*?)\)/);
  if (mdMatch) return mdMatch[1];
  // 匹配 HTML img 标签
  const htmlMatch = body.match(/<img[^>]+src=["']([^"']+)["']/);
  if (htmlMatch) return htmlMatch[1];
  return undefined;
}

export function getAllImages(body?: string): string[] {
  if (!body) return [];

  const images: string[] = [];
  const mdRegex = /!\[.*?\]\((.*?)\)/g;
  const htmlRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/g;

  for (const match of body.matchAll(mdRegex)) {
    const src = match[1]?.trim();
    if (src) images.push(src);
  }

  for (const match of body.matchAll(htmlRegex)) {
    const src = match[1]?.trim();
    if (src) images.push(src);
  }

  return Array.from(new Set(images));
}
