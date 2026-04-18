import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 1. 核心语言配置 (解决 Bing 不收录的致命硬伤)
  lang: 'zh-CN',

  // 2. 网站标题与描述 (SEO 核心)
  title: "Gemini中文教程站 - Google Gemini 3.1 Pro 使用教程与评测【2026年】",
  description: "Gemini中文教程站——系统讲解Google Gemini 3.1 Pro的功能特性、使用方法、注册流程与实测评价。涵盖Deep Think推理、多模态分析、编程辅助等核心能力，帮你快速上手谷歌AI。",
  
  // 3. 干净的 URL (去除 .html 后缀，SEO 更友好)
  cleanUrls: true,

  // 4. 注入完整的 SEO 标签
  head: [
    ['link', { rel: 'icon', href: '/gemini.svg' }],
    ['meta', { name: 'msvalidate.01', content: '283F4ED132291BB65C882E27214A15B8' }],
    ['meta', { name: 'keywords', content: 'Gemini, Google Gemini, Gemini 3.1 Pro, Gemini教程, Gemini中文, 谷歌AI, AI大模型, Deep Think, Gemini使用指南' }],
    ['meta', { name: 'author', content: 'Gemini中文教程站' }],
    ['meta', { name: 'robots', content: 'index, follow' }], // 明确允许爬虫抓取全站
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Gemini中文教程站' }],
    // 百度统计
    ['script', {}, `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?2e3f5c9f50c34190ae43b4c3dd61195e";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ],
  ],

  // 5. 自动生成 Sitemap (对 SEO 非常重要)
  sitemap: {
    hostname: 'https://gemini-guides.com',
    transformItems: (items) => {
      return items.map(item => ({
        ...item,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString()
      }))
    }
  },

  themeConfig: {
    // 网站左上角的 Logo 文字
    logo: '/gemini.svg',
    siteTitle: 'Gemini 中文教程站',
    
    // 6. 开启最后更新时间 (告诉搜索引擎你的网站是活跃更新的)
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    
    // 顶部导航栏 (导流入口)
    nav: [
      { text: '首页', link: '/' },
      { text: '新手教程', link: '/guide/intro' },
      { text: 'ChatGPT教程', link: '/chatgpt/' },
      { text: '功能评测', link: '/guide/deep-think' },
      { text: 'API开发', link: '/guide/api-key' }
    ],

    // 7. 侧边栏内容矩阵 (丰富了干货目录，摆脱“纯引流桥页”的嫌疑)
    sidebar: {
  '/guide/': [
    {
      text: '🔥 最新教程',
      items: [
        { text: 'Gemini vs ChatGPT 2026：两大AI巨头全面对比，哪个更值得用？', link: '/guide/gemini-vs-chatgpt-2026-comparison-april-2026' },
        { text: 'Gemini vs ChatGPT 2026：深度对比测评，哪个AI更强？', link: '/guide/gemini-vs-chatgpt-2026-comparison-418' },
        { text: 'Gemini官网国内使用完整指南（2026年4月最新）', link: '/guide/gemini-official-site-china-access-guide-2026-04' },
        { text: 'Gemini API 申请教程：2026年4月完整指南（含免费额度与国内使用方案）', link: '/guide/gemini-api-application-tutorial-2026-04' },
        { text: 'Gemini中文版 2026：国内完整使用教程与最新访问方案', link: '/guide/gemini-chinese-version-2026-complete-guide-april-2026' },
        { text: 'Gemini官网国内使用完整指南：2026年4月最新方法', link: '/guide/gemini-official-site-china-usage-guide-2026-04' },
        { text: 'Gemini 3.1 Pro 教程：2026年4月国内完整使用指南', link: '/guide/gemini-31-pro-tutorial-complete-guide-april-2026' },
        { text: 'Claude 4.6中文版：国内使用Claude Opus 4.6完整教程【2026年4月】', link: '/guide/claude-46-chinese-version-guide-2026' },
        { text: '2026年四大AI模型终极对比：Gemini vs ChatGPT vs Claude vs Grok', link: '/guide/ai-model-comparison-gemini-chatgpt-claude-grok-2026' },
        { text: 'Gemini提示词大全2026：50个高效Prompt模板让AI输出质量翻倍', link: '/guide/gemini-prompt-templates-50-examples-2026' },
        { text: 'Gemini是什么？Google Gemini AI完全介绍——功能、特点、使用场景一文讲清', link: '/guide/what-is-gemini-ai-complete-introduction-2026' },
        { text: 'Gemini国内能用吗？2026年4月国内使用Gemini的4种方法实测', link: '/guide/gemini-china-access-methods-2026-april' },
        { text: 'Gemini API申请与使用教程2026：从零搭建自己的AI应用', link: '/guide/gemini-api-tutorial-developer-guide-2026' },
        { text: 'Gemini注册教程2026：Google账号注册+Gemini开通全流程图文详解', link: '/guide/gemini-register-account-tutorial-2026' },
        { text: 'Gemini 3.1 Pro vs ChatGPT GPT-5.4深度对比：8个维度实测哪个更强', link: '/guide/gemini-31-pro-vs-chatgpt-gpt54-comparison-april-2026' },
        { text: 'Gemini 3.1 Pro怎么用？2026年4月国内完整教程：免翻墙使用+8大实战场景详解', link: '/guide/gemini-31-pro-chinese-complete-tutorial-april-2026' },
        { text: 'Gemini国内打不开怎么办？2026年3月亲测3种解决方法', link: '/guide/gemini-china-access-solution-2026-march' },
        { text: 'Gemini免费使用完全指南·2026白嫖攻略', link: '/guide/gemini-free-usage-complete-guide-2026' },
        { text: 'Gemini和ChatGPT哪个好？2026全面对比', link: '/guide/gemini-vs-chatgpt-2026-comparison' },
        { text: 'Gemini官网入口·3.1 Pro国内使用指南', link: '/guide/gemini-official-entry-2026' },
        { text: 'Gemini中文版怎么用·2026完整教程', link: '/guide/gemini-chinese-version-guide-2026' }
      ]
    },
    {
      text: '快速入门',
      items: [
        { text: 'Gemini 3 Pro 是什么？', link: '/guide/intro' },
        { text: '国内如何使用 (无需翻墙)', link: '/guide/no-vpn-guide' },
        { text: 'Gemini 3 - 谷歌AI 模型 Gemini 3 Pro 国内使用指南', link: '/guide/gemini-cn' },
        { text: 'Google Gemini 3.1 Pro 国内使用终极指南与免翻墙入口', link: '/guide/gemini-ultimate-guide' },
        { text: '官网账号注册图文教程', link: '/guide/registration' }
      ]
    },
    {
      text: '核心功能评测 (干货)',
      items: [
        { text: 'Deep Think 深度思考模式实测', link: '/guide/deep-think' },
        { text: '多模态识图与视频分析', link: '/guide/multimodal-analysis' },
        { text: '代码生成与 SWE-bench 表现', link: '/guide/coding-agent' },
        { text: 'Gemini 3.1 Pro 深度测评：实测体验与免翻墙指南', link: '/guide/gemini-31-pro-review' }
      ]
    },
    {
      text: '进阶开发与资源',
      items: [
        { text: 'API Key 免费申请指南', link: '/guide/api-key' },
        { text: '高效 Prompt 提示词模板', link: '/guide/prompt-templates' },
        { text: '常见问题 FAQ', link: '/guide/faq' }
      ]
    }
  ],

  '/chatgpt/': [
    {
      text: 'ChatGPT 入门',
      items: [
        { text: '什么是 ChatGPT 中文版？', link: '/chatgpt/what-is-chatgpt-chinese-version' },
        { text: '国内如何使用 ChatGPT', link: '/chatgpt/how-to-use-chatgpt-in-china-2026-guide' },
        { text: 'ChatGPT 官网入口', link: '/chatgpt/chatgpt-official-website-entry-and-gemini-alternative' },
        { text: 'ChatGPT 注册教程', link: '/chatgpt/chatgpt-registration-tutorial-2026-guide' }
      ]
    },
    {
      text: 'ChatGPT 使用教程',
      items: [
        { text: 'ChatGPT 提示词入门', link: '/chatgpt/chatgpt-prompt-engineering-beginner-guide' },
        // { text: 'ChatGPT 写作使用方法', link: '/chatgpt/writing' },
        // { text: 'ChatGPT 图片生成功能', link: '/chatgpt/image-generation' }
      ]
    },
    // {
    //   text: '常见问题',
    //   items: [
    //     { text: 'ChatGPT 常见问题 FAQ', link: '/chatgpt/faq' }
    //   ]
    // }
  ]
},


    // 社交链接
    socialLinks: [],

    // 页脚
    footer: {
      message: '专注于 Google Gemini AI 的中文教程与评测',
      copyright: 'Copyright © 2026 Gemini中文教程站'
    },
    
    // 开启本地搜索
    search: {
      provider: 'local'
    }
  }
})