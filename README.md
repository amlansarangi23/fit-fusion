# MERN Project with JWT Authentication

This is a full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js) that includes JWT-based authentication.

## Features

- User authentication with JWT
- Protected routes
- Workouts management for each user
- Responsive

## Tech Stack

- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT, Bcrypt

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed on your system:

- Node.js
- npm (Node package manager)
- MongoDB

### Installation

1. **Clone the repository**

    ```sh
    git clone https://github.com/yourusername/mern-jwt-auth.git
    cd mern-jwt-auth
    ```

2. **Install server dependencies**

    ```sh
    cd backend
    npm install
    ```

3. **Install client dependencies**

    ```sh
    cd ../frontend
    npm install
    ```

### Configuration

1. **Set up environment variables**

    Create a `.env` file in the `backend` directory and add the following:

    ```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

2. **Run MongoDB**

    Make sure MongoDB is running. You can start MongoDB with the following command (if installed locally):

    ```sh
    mongod
    ```

### Running the Application

1. **Run the server**

    ```sh
    cd backend
    npm run dev
    ```

    This will start the Express server on `http://localhost:5000`.

2. **Run the client**

    Open a new terminal, navigate to the `frontend` directory, and start the React app:

    ```sh
    cd frontend
    npm start
    ```

    This will start the React app on `http://localhost:3000`.

