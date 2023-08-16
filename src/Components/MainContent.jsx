import React, { useState } from "react";
import axios from "axios";

function MainContent() {
  const [formData, setFormData] = useState({
    model: "",
    year: "",
    selfReport: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/calculate-value", formData);
      const carValue = response.data.car_value;

      const quoteContainer = document.getElementById("quoteContainer");
      quoteContainer.innerHTML = `Suggested Car Value: $${carValue}`;
    } catch (error) {
      console.error("Error calculating car value:", error);
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
          </div>
        </form>
        <div className="quote-container mt-4" id="quoteContainer"></div>
      </div>
    </div>
  );
}

export default MainContent;
