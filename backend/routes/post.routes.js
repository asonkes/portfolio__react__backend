const express = require("express");

const router = express.Router();

// get sur localhost:3000
router.get("/", (req, res) => {
  res.json({ message: "Voici les données" });
});

module.exports = router;
