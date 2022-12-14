const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

const api = require('./routes/api.js');
const html = require('./routes/html.js');

// Middleware for parsing JSON and urlencoded form data 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);






