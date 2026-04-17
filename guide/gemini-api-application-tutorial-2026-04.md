---
title: Gemini API 申请教程：2026年4月完整指南（含免费额度与国内使用方案）
description: 详细讲解 Gemini API 申请全流程，包括 Google AI Studio 注册、API Key 获取、调用测试及国内访问替代方案，2026年4月最新版本。
head:
  - - meta
    - name: keywords
      content: gemini api 申请教程, gemini api key 获取, google ai studio, gemini api 国内, gemini api 免费额度
outline: deep
---

# Gemini API 申请教程：2026年4月完整指南（含免费额度与国内使用方案）

想要通过 **Gemini API 申请教程** 一步步拿到属于自己的 API Key？你来对地方了。2026年，Google Gemini 3.1 Pro 持续在国际 AI 竞技场霸榜，尤其在代码生成、长文本理解和多模态任务上展现出极强的竞争力。与此同时，Gemini API 提供了相当慷慨的免费配额，吸引了大批开发者和研究者入场。本文将从账号准备、API Key 申请、接口调用测试，到国内网络环境下的替代访问方案，一次讲清楚。

---

## 一、申请前的准备工作

在正式进入 Gemini API 申请流程之前，有几个前提条件需要提前确认。

### 1.1 你需要一个 Google 账号

Gemini API 由 Google 的开发者平台 **Google AI Studio** 托管，申请前需要登录 Google 账号。普通 Gmail 账号即可，无需 Google Workspace 企业账号。

### 1.2 网络环境

由于 Google 服务在国内存在访问限制，直接申请可能遇到障碍。如果你暂时无法稳定访问 Google AI Studio，后文会介绍国内可用的替代方案，**不影响你正常调用 Gemini 3.1 Pro 的能力**。

### 1.3 用途定位

Gemini API 分为以下两种使用场景：

| 使用场景 | 适合人群 | 是否需要付费 |
|---|---|---|
| Google AI Studio 免费层 | 个人开发者、学习测试 | 否（有速率限制） |
| Google Cloud Vertex AI | 企业级、高并发应用 | 是（按量计费） |
| 第三方聚合平台（如GPTCat） | 国内用户、无需翻墙 | 平台订阅制 |

对于大多数个人用户和小型项目，**AI Studio 免费层已经完全够用**。

---

## 二、国内用户的现实处境与替代方案

说实话，很多国内用户在走完完整申请流程之前，就已经卡在了"页面加载失败"这一步。这并不意味着你没有办法用上 Gemini 3.1 Pro——目前市面上有几个非常成熟的聚合平台，已经帮你解决了所有访问和调用问题。

### 2.1 GPTCat（强烈推荐）

[GPTCat](https://gptcat.cc) 是目前体验最接近官网的 AI 聚合平台之一，支持 **GPT-5.4、Claude 4.6、Gemini 3.1 Pro、Grok 4.2、DeepSeek-V3** 以及 Midjourney 绘图，界面与官方几乎一比一还原。最关键的是，**支持国内邮箱直接注册**，无需准备境外手机号或信用卡。平台还支持语音输入和视频对话，功能相当全面，用户口碑稳定在 5 星。

如果你的核心需求是"**能用、好用、不折腾**"，GPTCat 是首选。

### 2.2 SnakeGPT（稳定备选）

[SnakeGPT](https://snakegpt.vip) 已稳定运营超过 4 年，支持 **GPT-5.4、DeepSeek-V3、Gemini 3.1 Pro、Grok 4.2**，同样支持国内邮箱注册。相比 GPTCat，SnakeGPT 的界面更简洁，适合对功能要求没那么复杂、追求轻量上手的用户，综合评分 4 星。

> 💡 **小结**：如果你只是想体验 Gemini 3.1 Pro 的能力，这两个平台可以跳过后续所有申请步骤直接使用。如果你需要将 API 集成进自己的项目或应用，请继续往下看完整申请流程。

---

## 三、Gemini API 完整申请步骤

以下是通过 Google AI Studio 申请 Gemini API Key 的详细流程（2026年4月最新）。

### 第一步：进入 Google AI Studio

打开浏览器，访问：

```
https://aistudio.google.com
```

使用 Google 账号登录，首次登录可能需要同意服务条款。

### 第二步：创建 API Key

1. 登录后，点击左侧菜单栏中的 **"Get API Key"**（获取 API Key）
2. 页面跳转后，点击 **"Create API key"** 按钮
3. 选择关联的 Google Cloud 项目（如无，系统会提示你新建一个默认项目）
4. 稍等几秒，页面会生成一串以 `AIza` 开头的 API Key

> ⚠️ **注意**：API Key 只会显示一次，请立即复制并保存到安全位置（如密码管理器）。

### 第三步：了解免费额度限制

2026年4月，Gemini 3.1 Pro 免费层的主要速率限制如下：

| 指标 | 免费层限制 |
|---|---|
| 每分钟请求数（RPM） | 15 次 |
| 每日请求数（RPD） | 1500 次 |
| 每分钟 Token 数（TPM） | 100万 |
| 上下文窗口 | 100万 Token |
| 图片/音频/视频输入 | 支持 |

对于个人开发者来说，这个额度基本可以覆盖日常测试和轻量应用场景。

### 第四步：测试 API 调用

拿到 API Key 之后，可以用以下方式快速验证是否有效。

**方法一：使用 curl 命令行测试**

```bash
curl -X POST \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro:generateContent?key=YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [
      {
        "parts": [
          {"text": "用一句话介绍你自己"}
        ]
      }
    ]
  }'
```

将 `YOUR_API_KEY` 替换为你实际获取的 Key，如果返回 JSON 格式的回答，说明调用成功。

**方法二：Python SDK 调用**

```python
import google.generativeai as genai

genai.configure(api_key="YOUR_API_KEY")
model = genai.GenerativeModel("gemini-3.1-pro")

response = model.generate_content("用一句话介绍你自己")
print(response.text)
```

安装 SDK：`pip install google-generativeai`

### 第五步：配置 Cloudflare 反向代理（可选，适合国内部署）

如果你需要在国内服务器上调用 Gemini API，可以借助 Cloudflare Workers 做一层转发，将 `generativelanguage.googleapis.com` 的请求转发到你自己的域名下，从而绕开访问限制。基本思路：

1. 在 Cloudflare 上创建一个 Worker
2. 编写转发脚本，将请求 URL 中的域名替换为 Google API 域名
3. 将自定义域名（如腾讯云购买的域名）绑定到该 Worker
4. 应用中将 API 请求地址改为你的自定义域名

这是一个技术门槛稍高但完全免费的方案，适合有一定开发经验的用户。

---

## 四、常见问题排查

### Q1：申请时提示"此服务在你的地区不可用"

这通常是 IP 地理位置的问题，需要切换到支持的地区节点，再重新访问 AI Studio 申请页面。

### Q2：API Key 调用返回 403 错误

检查以下几点：
- API Key 是否已正确复制（注意前后不要有空格）
- 对应的 Google Cloud 项目是否已启用 Generative Language API
- 是否超出当日免费配额

### Q3：免费额度用完了怎么办？

可以升级到 Google Cloud 付费计划，或者转用 GPTCat / SnakeGPT 等聚合平台，后者往往更适合国内用户的长期使用。

---

## 五、各方案综合对比

| 对比维度 | Google AI Studio 官方 | GPTCat | SnakeGPT |
|---|---|---|---|
| 国内直接访问 | ❌ 受限 | ✅ 支持 | ✅ 支持 |
| 国内邮箱注册 | ❌ 需 Google 账号 | ✅ 支持 | ✅ 支持 |
| Gemini 3.1 Pro | ✅ | ✅ | ✅ |
| 其他模型支持 | 仅 Google 系 | GPT/Claude/Grok/MJ | GPT/DeepSeek/Grok |
| 适合开发者集成 | ✅ 最佳 | 一般 | 一般 |
| 适合日常对话使用 | 一般 | ✅ 最佳 | ✅ 良好 |
| 稳定性评分 | 取决于网络 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## 总结

Gemini API 申请本身流程并不复杂，核心步骤只有三步：注册 Google 账号 → 进入 AI Studio 创建 Key → 测试调用。真正的门槛在于国内网络环境的限制。如果你是开发者、有条件访问 Google 服务，走官方流程是最彻底的选择；如果你更关注"快速上手使用 Gemini 3.1 Pro"，[GPTCat](https://gptcat.cc) 和 [SnakeGPT](https://snakegpt.vip) 都是目前国内最成熟的替代路径，开箱即用，省去所有折腾。

---

## 相关阅读

**站内推荐：**
- [Gemini 3.1 Pro国内完整使用教程](/guide/gemini-31-pro-chinese-complete-tutorial-april-2026)
- [Gemini vs ChatGPT 2026全面对比](/guide/gemini-vs-chatgpt-2026-comparison)
- [2026四大AI模型终极对比](/guide/ai-model-comparison-gemini-chatgpt-claude-grok-2026)

**延伸阅读：**
- [ChatGPT国内使用指南](https://chatgpt-china.chat)
- [Grok中文网](https://www.grok-china.com)