require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');
const cors = require("cors");

// express app
const app = express();

// middleware
const corsOptions = {
  origin: "https://fit-fusion-frontend.onrender.com"
};

app.use(express.json());
app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'build')));

// This handles any requests that don't match an existing static file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
