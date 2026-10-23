# MERN Todo Application ✅

A full-stack task management application with a React frontend, Node.js/Express API, and MongoDB database.

## Links
- **Frontend:** https://todolist-frontend-qcyi.onrender.com
- **Backend API:** https://todo-backend-em0c.onrender.com/todos
- **Repository:** https://github.com/TamilSelvam1817/ToDoList-MERN-Stack

## Features
- Add, update, and delete todo items
- REST API integration
- MongoDB Atlas persistence
- Frontend and backend deployment on Render

## Tech Stack
- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB / MongoDB Atlas
- **Deployment:** Render
- **Version control:** Git and GitHub

## Architecture
```text
React frontend
     | HTTP requests
     v
Node.js + Express API
     |
     v
MongoDB Atlas
```

## Run Locally
Prerequisites: Node.js/npm, Git, and a local MongoDB instance or Atlas connection string.

```bash
git clone https://github.com/TamilSelvam1817/ToDoList-MERN-Stack.git
cd ToDoList-MERN-Stack
```

Install dependencies in each directory containing a `package.json`. Folder names below are examples; use the actual names in your repository.

```bash
cd backend
npm install
```

In a separate terminal:
```bash
cd frontend
npm install
```

Configure the backend database connection and frontend API base URL using the environment variable names expected by your code. For Vite, the frontend API URL is often configured with a variable such as `VITE_API_URL`. Never commit secrets or `.env` files.

Run each app using the scripts defined in its `package.json`, commonly `npm run dev`. Check the terminal output for the actual local ports.

## Testing Checklist
- Create, update, and delete a todo
- Refresh and confirm data persistence
- Verify the frontend calls the correct API URL
- Check browser console and backend logs for errors

## Developer
**Tamil Selvam D** · [GitHub](https://github.com/TamilSelvam1817) · [LinkedIn](https://linkedin.com/in/itz-tamilselvamhttps://www.linkedin.com/in/tamil-selvam-51b5b4291/?isSelfProfile=true)
