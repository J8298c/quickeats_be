const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.error(err);
  });

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
