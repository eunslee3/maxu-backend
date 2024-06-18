require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define a simple schema and model for demonstration
const itemSchema = new mongoose.Schema({
  name: String,
});
const Item = mongoose.model('Item', itemSchema);

// Routes
app.get('/', (req, res) => res.send('API Running'));

app.post('/items', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.send(newItem);
});

app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
