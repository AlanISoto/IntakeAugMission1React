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

app.post("/calculate-risk-rating", (req, res) => {
  const { claim_history } = req.body;
  if (!claim_history) {
    return res.status(400).json({ error: "Claim history is required." });
  }

  const keywords = ["collide", "crash", "scratch", "bump", "smash"];
  const riskRating = keywords.reduce((rating, keyword) => {
    const regex = new RegExp(keyword, "gi");
    const occurrences = (claim_history.match(regex) || []).length;
    return rating + occurrences;
  }, 0);

  return res.json({ risk_rating: riskRating });
});

app.post("/convert-to-quote", (req, res) => {
  const { car_value, risk_rating } = req.body;
  if (!car_value || !risk_rating) {
    return res
      .status(400)
      .json({ error: "Car value and risk rating are required." });
  }

  const yearlyPremium = (car_value * risk_rating) / 100;
  const monthlyPremium = yearlyPremium / 12;

  return res.json({
    monthly_premium: monthlyPremium,
    yearly_premium: yearlyPremium,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
