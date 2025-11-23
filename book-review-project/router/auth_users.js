import express from "express";
import jwt from "jsonwebtoken";
import books from "../booksdb.js";
import { users, authenticatedUser } from "../users.js";

const regd_users = express.Router();

// Task 7: Login
regd_users.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!authenticatedUser(username, password)) return res.status(401).send("Invalid login");
  const token = jwt.sign({ username }, "access", { expiresIn: "1h" });
  req.session.authorization = { token, username };
  res.send("Login successful");
});

// Task 8: Add/Modify review
regd_users.put("/review/:isbn", (req, res) => {
  const username = req.session.authorization.username;
  books[req.params.isbn].reviews[username] = req.body.review;
  res.send("Review added/updated");
});

// Task 9: Delete review
regd_users.delete("/review/:isbn", (req, res) => {
  const username = req.session.authorization.username;
  delete books[req.params.isbn].reviews[username];
  res.send("Review deleted");
});

export default regd_users; 
