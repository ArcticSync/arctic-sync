"use client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const storageData = [
  { month: "20", sales: 80 },
  { month: "40", sales: 150 },
  { month: "60", sales: 200 },
  { month: "80", sales: 270 },
  { month: "100", sales: 350 },
];

function CostOvertime() {
  const data = {
    labels: storageData.map((data) => data.month, key=data),
    datasets: [
      {
        label: "Cost",
        data: storageData.map((data) => data.sales, key=data),
        borderColor: "#088770",
        borderWidth: 3,
        pointBorderColor: "#088770",
        pointBorderWidth: 3,
        tension: 0.5,
        fill: false,
      },
      {
        label: "Constant Line",
        data: Array(storageData.length).fill(100),
        borderColor: "#d38e09",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 17,
            weight: "bold",
          },
          color: "#555", // Adjust the color of the tick labels
        },
        title: {
          display: true,
          text: "Cumulative Cost",
          padding: {
            bottom: 20, // Increase the bottom padding for better spacing
          },
          font: {
            size: 20, // Reduce the size of the title
            family: "Arial",
          },
          color: "white", // Adjust the color of the title
        },
        min: 0, // Start the y-axis from 0 for better readability
      },
      x: {
        ticks: {
          font: {
            size: 17,
            weight: "bold",
          },
          color: "#555", // Adjust the color of the tick labels
        },
        title: {
          display: true,
          text: "Years",
          padding: {
            top: 10,
          },
          font: {
            size: 20, // Reduce the size of the title
            family: "Arial",
          },
          color: "white", // Adjust the color of the title
        },
      },
    },
  };
  
  return (
    <div className="bg-[#1c1c1c] p-4 rounded-md">
      <h1 className="font-bold text-3xl text-center mt-10">
        Cumulative cost of 1GB over 100 years
      </h1>
      <div
        style={{
          width: "900px",
          height: "400px",
          padding: "20px",
          cursor: "pointer",
        }}
      >
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}

export default CostOvertime;
