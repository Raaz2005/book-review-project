 
import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import public_users from "./router/general.js";
import regd_users from "./router/auth_users.js";
import { users, isValid } from "./users.js";

const app = express();
app.use(bodyParser.json());
app.use(session({ secret: "access", resave: true, saveUninitialized: true }));

// Task 6: Register user
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (isValid(username)) return res.status(400).send("User already exists");
  users.push({ username, password });
  res.send("User registered");
});

app.use("/", public_users);

// Allow only logged-in users
app.use("/auth", (req, res, next) => {
  if (req.session.authorization) next();
  else res.status(403).send("Login required");
});

app.use("/auth", regd_users);

app.listen(5000, () => console.log("Server running on port 5000"));