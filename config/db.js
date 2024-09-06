const mongoose = require('mongoose');
require('dotenv').config();

const ATLAS_URI = process.env.ATLAS_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));
  } catch (err) {
    console.error('Database connection error: ', err);
    process.exit(1);
  }
}

module.exports = connectDB;