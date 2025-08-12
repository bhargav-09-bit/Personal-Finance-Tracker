Personal Finance Tracker
A full-stack MERN application to manage and track personal expenses, visualize spending trends, and organize financial records.

Features
User Authentication – Secure login and registration with JWT.

Expense Management – Add, edit, and delete expenses.

Data Visualization – Charts for spending analysis using Recharts.

File Upload – Import expenses via Excel/CSV using Multer & XLSX.

Responsive UI – Styled with TailwindCSS.

Tech Stack
Frontend: React, Vite, TailwindCSS, Axios, React Router
Backend: Node.js, Express, MongoDB, Mongoose
Other Tools: JWT, bcryptjs, multer, moment.js

Installation:
1.Clone the Repository
git clone https://github.com/bhargav-09-bit/Personal-Finance-Tracker.git
cd Personal-Finance-Tracker

2.Backend setup
cd backend
npm install
Create a .env file in backend folder with:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Start backend:
npm run dev

3. Frontend Setup
   cd frontend/expense-tracker
   npm install
   Start frontend:
   npm run dev

Usage
Open frontend link shown in terminal after npm run dev.

Register a new account or login.

Start adding expenses and explore charts.

Scripts
Frontend

npm run dev – Start development server

npm run build – Build production files

Backend

npm start – Start server

npm run dev – Start server with Nodemon

Personal-Finance-Tracker/
├── backend/ # Node.js + Express API
├── frontend/
│ └── expense-tracker/ # React + Vite frontend
└── README.md
