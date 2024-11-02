
const express = require('express');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const app = express();
app.use(express.json());

// Database connection
const sequelize = new Sequelize(process.env.DATABASE_URL);

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Error: ' + err));

// Sample route for testing
app.get('/', (req, res) => {
  res.send("Personal AI Assistant is running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
