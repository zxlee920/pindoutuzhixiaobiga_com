import type { SiteConfig } from './src/types/config';

/**
 * 🔧 站点唯一配置文件
 * 所有页面内容、SEO、模块开关、统计代码等均在此处配置
 * 模板代码不写死任何内容，一切通过本文件控制
 */
export const siteConfig: SiteConfig = {
  site: {
    name: '拼豆图纸小鼻嘎',
    url: 'https://pindoutuzhixiaobiga.com',
    locale: 'zh-CN',
    language: 'zh',
    logo: '/logo.png',
  },

  seo: {
    title: '拼豆图纸小鼻嘎 - 免费拼豆图纸素材下载平台',
    description:
      '拼豆图纸小鼻嘎提供高颜值拼豆图纸素材，包含多个可爱拼豆图纸，助你轻松制作精美拼豆作品。',
    ogImage: '/og-image.png',
  },

  nav: [
    { label: '首页', href: '/' },
    { label: '关于', href: '/about' },
  ],

  list: {
    title: '拼豆图纸小鼻嘎',
    description: '拼豆图纸小鼻嘎致力于为拼豆爱好者整理优质图纸资源，每日更新高颜值素材，让每个人都能轻松找到心仪的拼豆模板。',
    postsPerPage: 12,
    defaultAuthor: '拼豆图纸小鼻嘎',
  },

  about: {
    title: '关于拼豆图纸小鼻嘎',
    description: '了解拼豆图纸小鼻嘎的初衷、愿景和内容范畴',
    content:
      '拼豆图纸小鼻嘎是一个专注于高颜值拼豆图纸素材整理与分享的平台，致力于为拼豆爱好者提供优质、精美、实用的拼豆模板资源。我们精心收集全网各类IP拼豆图纸，包括拼豆12星座迷你，奶茶等100多个又小又可爱的设计，帮助用户在制作前快速预览、收藏和下载参考图。',
    sections: [
      {
        title: '拼豆图纸小鼻嘎的创立初衷',
        text: '拼豆图纸小鼻嘎创立的初衷是为了解决拼豆爱好者在寻找优质图纸时遇到的困难。网络上拼豆图纸资源分散，质量参差不齐，我们希望通过拼豆图纸小鼻嘎这个平台，将高颜值、高质量的拼豆图纸集中整理，让每一位拼豆爱好者都能轻松找到心仪的素材，享受拼豆创作的乐趣。',
      },
      {
        title: '拼豆图纸小鼻嘎的定位与特色',
        text: '拼豆图纸小鼻嘎专注于图纸内容展示与整理，不提供在线绘制工具。我们的特色在于精选高颜值、高实用性的拼豆图纸，涵盖多种热门IP和主题。拼豆图纸小鼻嘎的所有图纸都经过精心筛选和分类，确保用户能够快速找到符合自己需求的素材。',
      },
      {
        title: '拼豆图纸小鼻嘎的内容结构',
        text: '拼豆图纸小鼻嘎的图纸内容按标签分类，包括动物、星座、美食、游戏等多个主题，支持分页浏览与详情阅读。每个图纸都提供详细的预览图和下载链接，方便用户保存和打印。拼豆图纸小鼻嘎还会定期更新新的图纸内容，保持资源的时效性和丰富性。',
      },
      {
        title: '拼豆图纸小鼻嘎的使用建议',
        text: '建议在拼豆图纸小鼻嘎详情页查看大图轮播后，再下载原图进行打印或对照制作。拼豆图纸小鼻嘎提供的图纸均为高清版本，适合打印使用。用户可以根据自己的需求调整打印尺寸，制作出符合预期的拼豆作品。拼豆图纸小鼻嘎也欢迎用户分享自己的制作成果。',
      },
      {
        title: '拼豆图纸小鼻嘎的未来愿景',
        text: '拼豆图纸小鼻嘎希望能够成为拼豆爱好者首选的图纸资源平台。我们将持续优化用户体验，丰富图纸资源，探索更多主题和风格。拼豆图纸小鼻嘎也计划引入更多互动功能，如用户投稿、作品展示等，让平台成为拼豆爱好者交流分享的社区。',
      },
    ],
  },

  schema: {
    type: 'WebPage',
    applicationCategory: 'Reference',
    operatingSystem: 'All',
    offers: {
      price: '0',
      priceCurrency: 'CNY',
    },
  },

  analytics: {
    baidu: '',
    google: '',
    adsense: '',
  },

  sitemap: {
    changefreq: 'weekly',
    priority: 1.0,
  },

  robots: {
    rules: [
      {
        userAgent: '*',
        disallow: ['/api/', '/admin/'],
      },
    ],
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} 拼豆图纸小鼻嘎`,
    icp: '',
    columns: [
      {
        links: [
          { label: '关于我们', url: '/about' },
          { label: '隐私政策', url: '/privacy' },
          { label: '使用条款', url: '/terms' },
        ],
      },
    ],
  },
};
