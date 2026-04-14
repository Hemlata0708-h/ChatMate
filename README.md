ChatMate is a modern, responsive, and full-stack language exchange platform. It enables users globally to connect with fellow learners, share native languages, and seamlessly practice new languages through real-time chat and video calling.

✨ Key Features
🔐 Secure Authentication: Complete login, signup, and secure profile management using JWT (JSON Web Tokens) and bcrypt.
📋 Smart Onboarding: Define native/learning languages, biodata, and location during the first-time setup via an interactive onboarding flow.
💬 Real-Time Messaging: Instant messaging powered by Stream Chat SDK, ensuring reliable, lag-free conversations.
📹 Seamless Video Calls: High-quality, one-click video calls directly inside the app powered by Stream Video SDK.
🤝 Connection Management: Send, accept, or decline friend requests. Browse a tailored list of recommended language learners.
🎨 Dynamic Themes: Personalize your app experience with 20+ DaisyUI Themes (e.g., Cyberpunk, Retro, Synthwave, Dark/Light modes) stored in a global Zustand state.
🔔 Interactive Notifications: Get instant alerts for new friend requests or connections.
📱 Responsive UI: Fully mobile-friendly UI crafted with Tailwind CSS, looking spectacular on any screen size.
🛠️ Technology Stack
Frontend
Framework: React 19 + Vite ⚡
Styling: Tailwind CSS & DaisyUI
State Management: Zustand
Data Fetching: TanStack React Query & Axios
Routing: React Router v7
Icons & Toast: Lucide React & React Hot Toast
Backend
Runtime & Framework: Node.js & Express.js
Database: MongoDB (with Mongoose modeling)
Real-Time Engine: Stream API (Chat & Video)
Security: CORS, Cookie-Parser, JWT Authentication
🚀 Quick Start Guide
Prerequisites
Make sure you have the following installed and set up:

Node.js (v18+ recommended)
MongoDB Cluster (Local or MongoDB Atlas)

ChatMate/
├── backend/                  # Server-side code
│   ├── src/
│   │   ├── controllers/      # API Route logic
│   │   ├── lib/              # Database & Stream utilities
│   │   ├── models/           # Mongoose schemas (User, etc.)
│   │   └── routes/           # Express router definitions
│   └── package.json
│
├── frontend/                 # Client-side code
│   ├── src/
│   │   ├── components/       # Reusable React UI (Layout, Loader)
│   │   ├── hooks/            # Custom Hooks (useAuthUser, etc.)
│   │   ├── pages/            # View Pages (Home, Auth, Chat, Call)
│   │   └── store/            # Zustand stores (useThemeStore)
│   └── package.json
│
└── package.json              # Workspace root configuration
Stream.io Account (Grab your API Keys for Chat/Video)

Built with ❤️ 
