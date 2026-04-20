---
layout: doc
title: Gemini API Key 免费申请与Python调用教程 (2026最新)
description: 手把手教你申请Google官方Gemini API Key。包含Google AI Studio注册步骤、Python SDK调用示例以及常见报错解决。如果你不想写代码，也可以使用SnakeGPT网页版直接体验。
head:
  - - meta
    - name: keywords
      content: Gemini API Key申请, Google AI Studio教程, gemini-pro调用, Python调用Gemini, 谷歌API密钥, 免费Gemini API, Google AI开发
---

# Gemini API Key 申请与调用指南 (官方版)

> **导读**：想要在自己的 Python 程序或网站中集成 Google Gemini 3 Pro？你需要申请官方的 API Key。本文将提供保姆级的 **Google AI Studio** 申请流程及代码示例。
>
> **⚠️ 注意**：官方 API 需要**全程科学上网**（美国/新加坡节点）。如果你只是想体验 Gemini 的对话能力而不想写代码，建议直接使用国内直连的网页版 [SnakeGPT](https://snakegpt.vip)。

---

## 🛠️ 第一步：获取官方 API Key

Google 目前通过 Google AI Studio 平台免费分发 API Key（有一定的速率限制）。

### 1. 准备工作
* 一个 Google 账号。
* **纯净的海外网络环境**（必须是美国、新加坡等支持 Gemini API 的地区，香港节点通常不支持）。

### 2. 申请流程
1.  访问 **[Google AI Studio](https://aistudio.google.com/)**。
2.  点击页面左上角的 **"Get API key"** 按钮。
3.  点击 **"Create API key"**。
4.  选择 **"Create API key in new project"**（在新项目中创建）。
5.  复制生成的以 `AIza` 开头的密钥字符串，这就是你的 API Key。

::: danger 🔐 安全提示
请勿将你的 API Key 泄露给他人或发布到 GitHub 公共仓库，否则可能导致配额被盗用或账号被封禁。
:::

---

## 💻 第二步：使用 Python 调用 Gemini

拿到 Key 之后，我们可以使用 Google 官方提供的 Python SDK 来进行调用。

### 1. 安装依赖库
在终端或命令行中运行以下命令：

```bash
pip install -q -U google-generativeai
```

### 2. 编写代码
新建一个 `test_gemini.py` 文件，填入以下代码（记得替换你的 Key）：

```python
import google.generativeai as genai
import os

# 配置 API Key
# 建议将 Key 放在环境变量中，不要直接写死在代码里
os.environ["GOOGLE_API_KEY"] = "你的_API_KEY_粘贴在这里"
genai.configure(api_key=os.environ["GOOGLE_API_KEY"])

# 初始化模型
# Gemini 3 Pro 可能会有不同的模型代号，常用的是 gemini-1.5-pro-latest
model = genai.GenerativeModel('gemini-1.5-pro-latest')

# 发送消息
try:
    response = model.generate_content("你好，请用一句话介绍一下Gemini 3 Pro的优势。")
    print(response.text)
except Exception as e:
    print(f"调用失败: {e}")
```

### 3. 运行测试
运行代码。如果你的网络环境配置正确，你将看到模型的回复。

---

## 🚫 常见报错与解决方案

在调用过程中，国内开发者最常遇到以下问题：

### 1. `User location not supported`
* **原因**：你的 IP 地址被识别为不支持的地区（如中国大陆、香港）。
* **解决**：你需要配置系统代理，或者在代码中显式指定 HTTP 代理。

### 2. `429 Too Many Requests`
* **原因**：你使用的是免费版 Key，触发了 Google 的速率限制（Rate Limit）。
* **解决**：降低请求频率，或者升级为付费的 Pay-as-you-go 账号（需绑定外币信用卡）。

### 3. `SSLError` / `Connection Timeout`
* **原因**：Python 脚本无法连接到 `generativelanguage.googleapis.com`。
* **解决**：检查 VPN 是否开启了“全局模式”或“TUN模式”。

---

## 💡 不想折腾代码？直接网页对话

如果你觉得申请 Key、配置环境、处理报错太麻烦，或者你只是想单纯地使用 Gemini 3 Pro 来处理工作和学习任务（而不是开发软件）：

**完全不需要申请 API Key！**

你可以直接使用我们搭建好的国内直连网页版，内置了企业级付费 API，稳定、高速且功能完整。

| 体验方式 | 官方 API 开发 | **SnakeGPT 网页版** |
| :--- | :--- | :--- |
| **技术门槛** | 高 (需编程) | **无 (打开即用)** |
| **网络要求** | 需配置代码代理 | **国内直连** |
| **使用场景** | 软件开发集成 | **日常问答/办公/科研** |
| **费用成本** | 绑定信用卡付费 | **支持支付宝/微信** |

👉 **[立即前往 SnakeGPT (专业版)](https://snakegpt.vip)**
👉 **[立即前往 GPTCat (极速版)](https://gptcat.cc)**