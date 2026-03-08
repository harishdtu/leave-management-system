# Leave Management System

A simple web application where employees can apply for leave and employers can approve or reject those requests.

## Live Demo

Frontend:
https://leave-management-system-ten-eta.vercel.app/

Backend API:
https://leave-management-system-81er.onrender.com/

GitHub Repository:
https://github.com/harishdtu/leave-management-system

---

## Features

### Employee

* Sign up and log in
* Apply for leave with:

  * Leave type
  * Start date
  * End date
  * Reason
* View leave requests and their status (Pending / Approved / Rejected)

### Employer

* Sign up and log in
* View all employee leave requests
* Approve or reject leave applications

---

## Tech Stack

Frontend

* Vue.js
* Tailwind CSS
* Axios

Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt password hashing

Database

* MongoDB Atlas

Deployment

* Frontend: Vercel
* Backend: Render

---

## Project Structure

leave-management-system

backend
│
├── models
│   ├── User.js
│   └── Leave.js
│
├── routes
│   ├── authRoutes.js
│   └── leaveRoutes.js
│
├── middleware
│   └── authMiddleware.js
│
└── server.js

frontend
│
├── src
│   ├── pages
│   │   ├── Login.vue
│   │   ├── Signup.vue
│   │   ├── EmployeeDashboard.vue
│   │   └── EmployerDashboard.vue
│   │
│   ├── components
│   │   └── LeaveForm.vue
│   │
│   ├── router
│   │   └── index.js
│   │
│   ├── services
│   │   └── api.js
│   │
│   ├── App.vue
│   └── main.js

---

## API Endpoints

### Authentication

POST /api/auth/signup
Create a new user account.

POST /api/auth/login
Login and receive JWT token.

---

### Leave Management

POST /api/leave/apply
Apply for leave (Employee)

GET /api/leave/my
View employee leave requests

GET /api/leave/all
View all leave requests (Employer)

PUT /api/leave/:id/approve
Approve leave request (Employer)

PUT /api/leave/:id/reject
Reject leave request (Employer)

---

## Environment Variables

Create a `.env` file inside backend:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

---

## Local Setup

### Backend

cd backend

npm install

npm run dev

---

### Frontend

cd frontend

npm install

npm run dev

---

## Deployment

Backend deployed on Render.

Frontend deployed on Vercel.

MongoDB Atlas used as the cloud database.

---

## Future Improvements

* Email notifications for leave approval/rejection
* Admin dashboard analytics
* Pagination for leave requests
* Improved UI design

---

## Author

Harish Vasamsetti
