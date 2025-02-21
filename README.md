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

📥 Getting Started
✅ Prerequisites
Node.js (v14.x or later)
npm (v6.x or later) or yarn
🧑‍💻 1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/orabitbol/Journey-Assignment.git
cd Journey-Assignment
📦 2. Install Dependencies
Using npm:

bash
Copy
Edit
npm install
Or using yarn:

bash
Copy
Edit
yarn install
🏃‍♂️ 3. Run the App Locally
Start the development server:

bash
Copy
Edit
npm run dev
Or with yarn:

bash
Copy
Edit
yarn dev
The app will be available at:

arduino
Copy
Edit
http://localhost:5173
📦 Build for Production
To build the app for production, run:

bash
Copy
Edit
npm run build
Or with yarn:

bash
Copy
Edit
yarn build
This will generate a dist/ folder with optimized static files.

👁️ Preview the Production Build
You can preview the production build locally using:

bash
Copy
Edit
npm run preview
Or with yarn:

bash
Copy
Edit
yarn preview
🌐 Deployment Instructions
The project is deployed on Vercel using a vercel.json file for routing and build configuration.

🌟 Live Demo:
http://journey-assignment-1-two.vercel.app/

🛠️ To deploy it yourself:
Push to GitHub:

bash
Copy
Edit
git push origin main
Connect GitHub to Vercel:

Go to Vercel and link your repository.
Set Vercel Build Settings:

Build Command: npm run build
Output Directory: dist
Set Up Routing (if needed):

Ensure vercel.json handles routing for React Router.
🎉 Future Improvements
🤖 Integrate with real OpenAI API for smarter responses
💾 Backend for storing chat history
🌐 Multi-language support
👤 Author
Ora Bitbol – http://journey-assignment-1-two.vercel.app/

GitHub Repository: https://github.com/orabitbol/Journey-Assignment

