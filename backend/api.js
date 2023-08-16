const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post("/calculate-value", (req, res) => {
  const { model, year } = req.body;
  if (!model || !year) {
    return res.status(400).json({ error: "Model and year are required." });
  }

  const sanitizedModel = model.replace(/[^a-zA-Z]/g, "").toLowerCase();
  const alphabetPositionSum = sanitizedModel.split("").reduce((sum, char) => {
    return sum + char.charCodeAt(0) - 96;
  }, 0);

  const carValue = alphabetPositionSum * 100 + parseInt(year);
  return res.json({ car_value: carValue });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
