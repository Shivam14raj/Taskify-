🚀 Taskify – Task Management App

A full-stack MERN (MongoDB, Express, React, Node.js) application designed to help users efficiently manage their daily tasks with a clean, modern SaaS-style interface.

📌 Overview

Taskify is a productivity-focused web application that allows users to create, update, delete, and organize tasks with priority-based filtering. It features secure authentication, real-time UI updates, and a scalable architecture suitable for modern web applications.

✨ Key Features
🔐 Authentication System – Secure login & registration using JWT
📝 Task Management – Create, update, delete tasks
🎯 Priority Levels – Low, Medium, High filtering
📅 Due Date & Category Support
⚡ Real-Time UI Updates (no page refresh)
🧩 Reusable Components (Card, Modal, Navbar)
💻 Responsive & Modern UI (SaaS Style)


🛠️ Tech Stack
**Frontend**
React.js
Axios
Custom CSS (SaaS UI/UX Design)

**Backend** 
Node.js
Express.js
JWT Authentication
Database
MongoDB (Mongoose ODM) 

📂 Project Structure
Taskify/
├── Client/        # React frontend
├── Server/        # Node.js backend
├── README.md
└── .gitignore 


⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/taskify.git
cd taskify 

2️⃣ Setup Backend
cd Server
npm install

Create .env file:
PORT=4000
MONGO_URL=your_mongodb_uri
JWT_SECRET_KEY=your_secret_key 

3️⃣ Setup Frontend
cd ../Client
npm install
npm run dev

🔌 API Endpoints
**Auth**
POST /api/v1/user/register
POST /api/v1/user/login
**Tasks** 
POST /api/v1/todo/create
POST /api/v1/todo/getAll/:userId
PUT /api/v1/todo/update/:id
DELETE /api/v1/todo/delete/:id 

🧠 Key Learnings
Full-stack MERN development
REST API design & integration
JWT-based authentication
State management in React
Building scalable UI components
Handling real-world CRUD operations 

📈 Future Enhancements
🔍 Search & sorting
🌓 Dark mode
🔔 Notifications / reminders
📊 Task analytics dashboard
🤝 Team collaboration 

🧑‍💻 Author
Shivam Raj 

⭐ Show your support
If you like this project, consider giving it a ⭐ on GitHub!
