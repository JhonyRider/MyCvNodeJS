const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything in /public (CSS, PDF, images, index.html)
app.use(express.static(path.join(__dirname, "public")));

// Explicitly serve index.html at "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`CV running at http://localhost:${PORT}`);
});