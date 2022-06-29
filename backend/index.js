const express = require("express");
const dotenv = require("dotenv");

// Loads environment variables from .env file
if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: "./config/config.env",
  });
}

const { connectDatabase } = require("./config/database");
connectDatabase();

// PORT
const port = process.env.PORT;

// Importing Routes
const post = require("./router/post");
const user = require("./router/auth");

const app = express();

// Using middleware to parse the body of the request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", post);
app.use("/api/v1", user);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
