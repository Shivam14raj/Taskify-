# 🚀 Taskify – Smart Task Management App

A full-stack **MERN (MongoDB, Express, React, Node.js)** application designed to help users efficiently manage their daily tasks with a clean, modern SaaS-style interface.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [API Endpoints](#api-endpoints)
- [Key Learnings](#key-learnings)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [Support](#support)

---

## 📌 Overview

Taskify is a productivity-focused web application that allows users to:

- Create, update, and delete tasks  
- Organize tasks based on priority  
- Manage tasks with a responsive UI  
- Use secure authentication  

---

## ✨ Features

- User Authentication (Register & Login)  
- Create, Update, and Delete Tasks  
- Priority-based Filtering (Low, Medium, High)  
- Due Date & Category Support  
- Real-time UI updates (no refresh)  
- Clean and responsive UI  

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- Axios  
- CSS  

### Backend
- Node.js  
- Express.js  
- JWT Authentication  

### Database
- MongoDB (Mongoose)  

--- 

Taskify/
│
├── Client/ # React Frontend
├── Server/ # Node.js Backend
├── README.md
└── .gitignore 


---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/taskify.git
cd taskify

### 1. Clone Repository
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
Method	Endpoint	Description
POST	/api/v1/user/register	Register user
POST	/api/v1/user/login	Login user
Tasks
Method	Endpoint	Description
POST	/api/v1/todo/create	Create task
POST	/api/v1/todo/getAll/:userId	Get all tasks
PUT	/api/v1/todo/update/:id	Update task
DELETE	/api/v1/todo/delete/:id	Delete task


🧠 Key Learnings
MERN stack development
REST API integration
JWT authentication
React state management
Component-based UI
📈 Future Improvements
Search & sorting
Dark mode
Notifications
Task analytics
Team collaboration
🧑‍💻 Author

Shivam Raj
## 📂 Project Structure
 
