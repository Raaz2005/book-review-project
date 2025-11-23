 
import express from "express";
import books from "../booksdb.js";

const public_users = express.Router();

// Task 1
public_users.get("/", (req, res) => res.send(books));

// Task 2
public_users.get("/isbn/:isbn", (req, res) => res.send(books[req.params.isbn]));

// Task 3
public_users.get("/author/:author", (req, res) => {
  const result = Object.values(books).filter(b => b.author === req.params.author);
  res.send(result);
});

// Task 4
public_users.get("/title/:title", (req, res) => {
  const result = Object.values(books).filter(b => b.title === req.params.title);
  res.send(result);
});

// Task 5
public_users.get("/review/:isbn", (req, res) => res.send(books[req.params.isbn].reviews));

export default public_users;