require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => res.send('API Running'));

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
