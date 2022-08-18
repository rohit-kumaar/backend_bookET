const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;

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
  res.sendFile(path.join(__dirname, "frontend", "html", "activate-account.html"));
});

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);
