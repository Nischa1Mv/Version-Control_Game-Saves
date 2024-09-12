const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.get("/api/folder-contents", (req, res) => {
  const folderPath = path.join(__dirname, "your-folder"); // Change 'your-folder' to the folder you want to read

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Unable to scan folder" });
    }
    res.json(files); // Sends the list of files back to the client
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
