🚀 Taskify – Smart Task Management App

A full-stack MERN (MongoDB, Express, React, Node.js) application designed to help users efficiently manage their daily tasks with a clean, modern SaaS-style interface.

📑 Table of Contents
📌 Overview
✨ Features
🛠️ Tech Stack
📂 Project Structure
⚙️ Installation & Setup
🔌 API Endpoints
🧠 Key Learnings
📈 Future Improvements
🧑‍💻 Author
⭐ Support
📌 Overview

Taskify is a productivity-focused web application that allows users to:

Create, update, and delete tasks
Organize tasks based on priority
Manage tasks with a responsive UI
Use secure authentication system
✨ Features
🔐 User Authentication (Register & Login)
📝 Create, Update, and Delete Tasks
🎯 Priority-based Filtering (Low, Medium, High)
📅 Due Date & Category Support
⚡ Real-time UI updates (no page refresh)
🎨 Clean and responsive SaaS-style UI
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
├── Server/        # Node.js Backend
├── README.md
└── .gitignore
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/taskify.git
cd taskify
2️⃣ Backend Setup
cd Server
npm install

Create a .env file inside Server/:

PORT=4000
MONGO_URL=your_mongodb_uri
JWT_SECRET_KEY=your_secret_key

Run backend:

npm run dev
3️⃣ Frontend Setup
cd ../Client
npm install
npm run dev
🔌 API Endpoints
🔐 Auth Routes
Method	Endpoint	Description
POST	/api/v1/user/register	Register user
POST	/api/v1/user/login	Login user
📋 Task Routes
Method	Endpoint	Description
POST	/api/v1/todo/create	Create task
POST	/api/v1/todo/getAll/:userId	Get all tasks
PUT	/api/v1/todo/update/:id	Update task
DELETE	/api/v1/todo/delete/:id	Delete task
🧠 Key Learnings
Full-stack MERN development
REST API design & integration
JWT-based authentication
React state management
Building reusable UI components
📈 Future Improvements
🔍 Search & sorting
🌙 Dark mode
🔔 Notifications
📊 Task analytics dashboard
👥 Team collaboration
🧑‍💻 Author

Shivam Raj

⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
