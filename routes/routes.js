const outputs = require("../controllers/output");
const { createValidation } = require("../validations/validators");
const express = require("express");
const router = express.Router();

router.get("/", outputs.getPosts);
router.post("/post", createValidation, outputs.createPost);

module.exports = router;