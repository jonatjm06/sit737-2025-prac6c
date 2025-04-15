const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample scan function (mocked)
app.get("/scan", (req, res) => {
  res.json({ status: "Scan completed successfully! Version 2.0" });
});

app.listen(5000, () => {  
  console.log("Backend running on port 5000");
});
