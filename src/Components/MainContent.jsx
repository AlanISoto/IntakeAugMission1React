import React, { useState } from "react";
import axios from "axios";

function MainContent() {
  const [formData, setFormData] = useState({
    model: "",
    year: "",
    selfReport: "",
  });
  const [carValue, setCarValue] = useState(null);
  const [riskRating, setRiskRating] = useState(null);
  const [monthlyPremium, setMonthlyPremium] = useState(null);
  const [yearlyPremium, setYearlyPremium] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/calculate-value", formData);
      const calculatedCarValue = response.data.car_value;

      setCarValue(calculatedCarValue);

      await handleRiskRatingSubmit();
    } catch (error) {
      console.error("Error calculating car value:", error);
    }
  };

  const handleRiskRatingSubmit = async () => {
    try {
      const response = await axios.post("/calculate-risk-rating", {
        claim_history: formData.selfReport,
      });
      const calculatedRiskRating = response.data.risk_rating;

      setRiskRating(calculatedRiskRating);
    } catch (error) {
      console.error("Error calculating risk rating:", error);
    }
  };

  const handleConvertToQuote = async () => {
    try {
      const response = await axios.post("/convert-to-quote", {
        car_value: carValue,
        risk_rating: riskRating,
      });
      const { monthly_premium, yearly_premium, error } = response.data;

      if (error) {
        console.error("Error converting to quote:", error);
        return;
      }

      setMonthlyPremium(monthly_premium);
      setYearlyPremium(yearly_premium);
    } catch (error) {
      console.error("Error converting to quote:", error);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover"
      style={{
        backgroundImage:
          "url('https://www.turnersautogroup.co.nz/wp-content/uploads/2022/08/Blue-Sky-Trusted-brand.png')",
        backgroundPosition: "center bottom 35%",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-md p-6 bg-blue-600 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
          Welcome! Get a Quote
        </h1>
        <form
          id="quoteForm"
          className="space-y-4"
          onSubmit={handleSubmit}
          style={{
            color: "#0354a3",
            fontFamily: "TurnersSans-Regular, sans-serif",
          }}
        >
          <div>
            <label htmlFor="model" className="block font-medium text-white">
              Car Model:
            </label>
            <input
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={(e) =>
                setFormData({ ...formData, model: e.target.value })
              }
              className="input input-bordered w-full bg-white text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="year" className="block font-medium text-white">
              Car Year:
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={(e) =>
                setFormData({ ...formData, year: e.target.value })
              }
              className="input input-bordered w-full bg-white text-black"
              required
            />
          </div>

          <div>
            <label
              htmlFor="selfReport"
              className="block font-medium text-white"
            >
              Self Report:
            </label>
            <textarea
              id="selfReport"
              name="selfReport"
              value={formData.selfReport}
              onChange={(e) =>
                setFormData({ ...formData, selfReport: e.target.value })
              }
              className="input input-bordered w-full h-24 bg-white text-black"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-primary bg-white text-black"
            >
              Calculate Quote
            </button>
            <button
              type="button"
              className="btn btn-secondary bg-white text-black ml-4"
              onClick={handleConvertToQuote}
            >
              Convert to Quote
            </button>
          </div>
        </form>
        {carValue !== null && (
          <div className="mt-4 p-4 bg-white rounded-lg text-center">
            <p className="font-bold text-lg text-blue-600">
              Suggested Car Value:
            </p>
            <p className="text-2xl text-blue-600">${carValue}</p>
          </div>
        )}
        {riskRating !== null && (
          <div className="mt-4 p-4 bg-white rounded-lg text-center">
            <p className="font-bold text-lg text-red-600">Risk Rating:</p>
            <p className="text-2xl text-red-600">{riskRating}</p>
          </div>
        )}
        {monthlyPremium !== null && yearlyPremium !== null && (
          <div className="mt-4 p-4 bg-white rounded-lg text-center">
            <p className="font-bold text-lg text-green-600">Quote:</p>
            <p className="text-xl text-green-600">
              Monthly Premium: ${monthlyPremium}
              <br />
              Yearly Premium: ${yearlyPremium}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainContent;
