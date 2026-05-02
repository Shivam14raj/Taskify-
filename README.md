🚀 Taskify – Smart Task Management App

A full-stack MERN (MongoDB, Express, React, Node.js) application designed to help users efficiently manage their daily tasks with a clean, modern SaaS-style interface.

📑 Table of Contents
Overview
Features
Tech Stack
Project Structure
Installation & Setup
API Endpoints
Key Learnings
Future Improvements
Author
📌 Overview

Taskify is a productivity-focused web application that allows users to create, update, delete, and organize tasks with priority-based filtering. It includes secure authentication and real-time UI updates for a seamless experience.

✨ Features
🔐 User Authentication (Register & Login)
📝 Create, Update, and Delete Tasks
🎯 Priority-based Filtering (Low, Medium, High)
📅 Due Date & Category Support
⚡ Real-time UI updates (no refresh required)
💻 Clean and responsive SaaS-style UI
🛠️ Tech Stack
Frontend
React.js
Axios
Custom CSS
Backend
Node.js
Express.js
JWT Authentication
Database
MongoDB (Mongoose)
📂 Project Structure
Taskify/
│
├── Client/        # React Frontend
│
├── Server/        # Node.js Backend
│
├── README.md
└── .gitignore
⚙️ Installation & Setup
1. Clone Repository
git clone https://github.com/your-username/taskify.git
cd taskify
2. Backend Setup
cd Server
npm install

Create .env file:

PORT=4000
MONGO_URL=your_mongodb_uri
JWT_SECRET_KEY=your_secret_key

Run backend:

npm run dev
3. Frontend Setup
cd ../Client
npm install
npm run dev
🔌 API Endpoints
Auth
POST /api/v1/user/register
POST /api/v1/user/login
Tasks
POST /api/v1/todo/create
POST /api/v1/todo/getAll/:userId
PUT /api/v1/todo/update/:id
DELETE /api/v1/todo/delete/:id
🧠 Key Learnings
Full-stack MERN development
REST API integration
JWT-based authentication
State management in React
Building reusable UI components
📈 Future Improvements
🔍 Search & sorting
🌓 Dark mode
🔔 Notifications
📊 Task analytics
🤝 Collaboration features
🧑‍💻 Author

Shivam Raj

⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
