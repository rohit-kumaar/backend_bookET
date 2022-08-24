const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const connectDb = require('./db/dbConn');
const PORT = process.env.PORT || 3500;

// Connect to mongo db
connectDb();

// custom middleware logger
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path}`);
//   next();
// })


// built-in middleware to handle urlencoded data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// server static file
app.use(express.static(path.join(__dirname, "/frontend/src")));

app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.get("/html/signin(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "html", "signin.html"));
});

app.get("/html/signup(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "html", "signup.html"));
});

app.get("/html/home(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "html", "home.html"));
});

app.get("/html/activate-account(.html)?", (req, res) => {
  res.sendFile(
    path.join(__dirname, "frontend", "html", "activate-account.html")
  );
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));
});


