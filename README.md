# **Real time Task Management System**

The Real-time Task Management System is a real-time web application designed to streamline team task management using the **MERN stack** (MongoDB, Express.js, React, Node.js). This system enables efficient task assignment, progress tracking, and team collaboration. The application features role-based access, real-time updates, and a responsive user interface.

## **Key Features**

### **Admin Features**:
1. **User Management**: Add, manage, and deactivate team members.
2. **Task Assignment**: Assign tasks to individual users with detailed task properties.
3. **Task Properties**: Manage task status, priority, and sub-tasks.
4. **Asset Management**: Upload and manage assets linked to tasks.
5. **User Account Control**: Enable, disable, or permanently delete user accounts and tasks.

### **User Features**:
1. **Task Interaction**: Users can view tasks, mark tasks as completed, and track task status.
2. **Communication**: Users can add comments or notes to tasks.

### **General Features**:
1. **Authentication and Authorization**: Secure login with JWT and role-based access control.
2. **Profile Management**: Users can update their personal details and passwords.
3. **Task Dashboard**: Display and filter tasks into “To-Do,” “In Progress,” and “Completed” categories.
4. **Real-Time Collaboration**: Tasks are updated in real-time for all users through Server-Sent Events (SSE).

## **Technologies Used**

### **Frontend**:
- **React (Vite)**
- **Redux Toolkit** for state management
- **Tailwind CSS** for responsive and sleek UI components

### **Backend**:
- **Node.js** with **Express.js**

### **Database**:
- **MongoDB** for storing users and tasks

---

## **Setup Instructions**

### **Server Setup**

#### 1. **Environment Variables**
Create a `.env` file in the `server` folder and add the following:

```
MONGODB_URI=your MongoDB URI
JWT_SECRET=your_secret_key
PORT=8800 (or another port)
NODE_ENV=development
```

#### 2. **Install Dependencies**
Navigate to the `server` directory and install the required dependencies:
```
cd server
npm install
```

#### 3. **Running the Server**
To start the server:
```
npm start
```
The server should now be running on `http://localhost:8800`, with a connected MongoDB instance.

### **MongoDB Setup**
1. Visit the MongoDB Atlas website: https://www.mongodb.com/cloud/atlas.
2. Create an account and log in.
3. Set up a new cluster, configure it, and whitelist your IP address.
4. Create a new database and user with the appropriate credentials.
5. Add the MongoDB URI to your `.env` file.

---

### **Client Setup**

#### 1. **Environment Variables**
Create a `.env` file in the `client` folder with the following content:
```
VITE_APP_BASE_URL=http://localhost:8800
VITE_APP_FIREBASE_API_KEY=your_firebase_api_key (optional)
```

#### 2. **Install Dependencies**
Navigate to the `client` directory and install the required packages:
```
cd client
npm install
```

#### 3. **Running the Client**
To start the frontend development server:
```
npm start
```
The client app should now be running on `http://localhost:3000`.

---

## **Features and Usage**

### **User Registration & Authentication**
- Users can register and log in securely using JWT tokens. The dashboard displays tasks assigned to or created by the user.

### **Creating and Assigning Tasks**
- After login, users can create tasks by filling out a form with details such as task title, description, priority, status, and assignee. Only admins can assign tasks to other users.

### **Real-Time Task Updates**
- Task updates (like changes in status or priority) are broadcast to all connected users in real-time using **SSE**.

### **Admin Privileges**
- Admins can manage user accounts, assign tasks, and view all tasks across the team.

### **Task Filtering**
- Tasks can be filtered by their status (To-Do, In Progress, Completed) and priority (Low, Medium, High).

---

## **Testing**

1. **Postman** was used for API endpoint testing:
   - User registration, login, task creation, task updates, etc.
2. **Security Testing**: Ensured security by testing for vulnerabilities like XSS, SQL Injection, and brute force attacks.

---

## **Future Enhancements**
- Integrating more advanced analytics for task tracking.
- Adding push notifications for task status updates.
- Implementing advanced user roles beyond Admin and User.

---

With this task management system, teams can collaborate seamlessly, ensure task tracking, and manage workloads efficiently. The application is secure, scalable, and optimized for performance.
