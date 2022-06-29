const express = require("express");
const router = express.Router();

const { createPost } = require("../controllers/post");

router.route("/post/upload").post(createPost);

module.exports = router;
