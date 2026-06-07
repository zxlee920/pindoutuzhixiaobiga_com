export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface HowToStep {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedItem {
  title: string;
  url: string;
  description: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FooterColumn {
  title?: string;
  links?: { label: string; url: string }[];
  text?: string;
}

export interface SiteConfig {
  /** 站点基本信息 */
  site: {
    name: string;
    url: string;
    locale: string;
    language: string;
    logo?: string;
  };

  /** SEO 信息（TKD） */
  seo: {
    title: string;
    description: string;
    ogImage?: string;
    canonical?: string;
  };

  /** 导航配置 */
  nav: NavItem[];

  /** 工具配置 */
  tool?: {
    name: string;
    slogan: string;
    description: string;
    type: 'WebApplication' | 'SoftwareApplication';
    category: string;
  };

  /** 页面模块开关 */
  modules?: {
    hero: boolean;
    intro: boolean;
    howTo: boolean;
    faq: boolean;
    related: boolean;
    latestPosts: boolean;
  };

  /** 页面内容（所有可见文本均从此处读取） */
  content?: {
    intro: {
      title: string;
      text: string;
      features?: Feature[];
    };
    howTo: {
      title: string;
      steps: HowToStep[];
    };
    faq: {
      title: string;
      items: FAQItem[];
    };
    related: {
      title: string;
      items: RelatedItem[];
    };
    latestPosts: {
      title: string;
      description?: string;
      count: number;
    };
  };

  /** 列表配置 */
  list: {
    title: string;
    description: string;
    postsPerPage: number;
    defaultAuthor: string;
  };

  /** 关于页面配置 */
  about: {
    title: string;
    description: string;
    content: string;
    sections?: {
      title: string;
      text: string;
    }[];
  };

  /** Schema 结构化数据 */
  schema: {
    type: 'WebApplication' | 'SoftwareApplication' | 'WebPage';
    applicationCategory?: string;
    operatingSystem?: string;
    offers?: {
      price: string;
      priceCurrency: string;
    };
  };

  /** 统计代码 */
  analytics: {
    baidu?: string;
    google?: string;
    custom?: string;
    adsense?: string;
  };

  /** Sitemap 配置 */
  sitemap: {
    changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
    excludes?: string[];
  };

  /** Robots 配置 */
  robots: {
    rules: {
      userAgent: string;
      allow?: string[];
      disallow?: string[];
    }[];
    sitemapUrl?: string;
  };

  /** Footer 配置 */
  footer: {
    copyright: string;
    icp?: string;
    columns: FooterColumn[];
  };
}
