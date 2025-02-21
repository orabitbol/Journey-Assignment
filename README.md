# AI-Powered Chat for Consulting

## 📖 Overview

This project is an AI-powered consulting chat that simulates an interactive conversation between a consultant and a client. Inspired by ChatGPT, it supports real-time message flow, bot responses, and message persistence, providing a smooth and engaging user experience.

**Live Demo:** [http://journey-assignment-1-two.vercel.app/](http://journey-assignment-1-two.vercel.app/)

---

## 🛠️ Tech Stack

- ⚛️ **React** with **Vite** – Fast frontend framework
- 🌐 **React Router** – Navigation and routing
- 🎨 **Material UI (MUI)** – Pre-built UI components
- 💅 **styled-components** – Custom styling using MUI’s `styled` method
- 🔌 **Mock API** or optional integration with **OpenAI API**
- 🔄 **WebSockets** or **polling** for real-time effect

---

## 🚀 Features

### 💬 **2.1 Chat Interface as Core Feature**

- ✅ Real-time messaging with simulated bot responses
- ✅ Typing indicator for natural conversation flow
- ✅ Full-screen chat interface
- ✅ Markdown support in bot responses *(Bonus)*
- ✅ Persistent chat history using `localStorage`

### 🤖 **2.2 AI-Driven Responses**

- ✅ Predefined mock API responses
- ✅ Simulated AI-like responses with slight variations
- ✅ Optional integration with **OpenAI API**

### 🗺️ **2.3 Routing with React Router**

- `/chat/:sessionId` → Main chat interface
- `/settings` → Chat settings (Dark Mode toggle, Reset History)
- ✅ Multiple chat sessions using unique session IDs *(Bonus)*

### 🎯 **Optimizations**

- ✅ WebSocket-based updates or polling for real-time effect
- ✅ Debounced input handling to reduce re-renders
- ✅ Lazy Load Messages when scrolling up *(Bonus)*

### 🎨 **UI and Styling**

- ✅ Material UI for layout (chat bubbles, inputs, buttons)
- ✅ `styled-components` for custom themes
- ✅ Message animations (fade-in on receive) *(Bonus)*
- ✅ Timestamps and sender avatars *(Bonus)*
- ✅ Dark Mode Toggle using MUI’s ThemeProvider

---

## 📁 Project Structure

```plaintext
📂 src
├── 📁 components
│   ├── ChatHeader.tsx
│   ├── MessageInput.tsx
│   ├── MessageList.tsx
│   └── ThemeSwitch.tsx
│
├── 📁 pages
│   ├── chat
│   │   └── Chat.tsx
│   └── settings
│       └── Settings.tsx
│
├── App.tsx
├── main.tsx
└── utils
