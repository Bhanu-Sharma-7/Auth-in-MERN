
# MERN Stack Authentication App

This is a full-stack authentication project built using the MERN stack with **React + Vite + TypeScript** on the frontend. The frontend communicates with the backend using the **Fetch API** (no Redux or Axios).

## 🔥 Features

- ✅ User Signup and Login
- 🔐 JWT-based Authentication
- 📡 Frontend-Backend connection via Fetch API
- ⚡ Fast frontend powered by Vite
- 📦 TypeScript support
- ✨ Clean and customizable UI

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- TypeScript
- Fetch API
- CSS (custom styles)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt (for password hashing)

## 📁 Project Structure

```bash
client/
├── src/
│   ├── CSS/            # Custom styles (style.css)
│   ├── Images/         # Static assets (e.g., login-1.png)
│   ├── pages/          # Login, Signup, Dashboard components
│   │   ├── Login.tsx
│   │   ├── Signup.tsx
│   │   └── Dashboard.tsx
│   └── main.tsx
└── index.html

server/
├── config/             # DB config and other settings
├── controllers/        # Route handler logic
├── middlewares/        # Middleware functions (auth, etc.)
├── models/             # Mongoose models
├── routes/             # Route definitions
└── index.js            # Entry point
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mern-auth-project.git
cd mern-auth-project
```

### 2. Start Backend

```bash
cd server
npm install
npm run dev
```

### 3. Start Frontend

```bash
cd client
npm install
npm run dev
```

## 📌 Environment Variables

Create `.env` files in both `client/` and `server/` folders.

### server/.env
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### client/.env
```
VITE_API_URL=http://localhost:5000/api
```

## 🙌 Author

Made with ❤️ by **Bhanu Sharma**

## 📝 License

This project is licensed under the MIT License.
