// ASSIGNMENT - Write an HTML file, that hits the backend server using `fetch` API

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.post("/sum", (req, res) => {
  const { a, b } = req.body;

  console.log(a, b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Invalid numbers provided" });
  }

  const answer = parseInt(a) + parseInt(b);
  res.json({ answer });
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
