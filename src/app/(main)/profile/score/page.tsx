"use client";
import { Pie } from "react-chartjs-2";
import { ChartOptions, Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "./score.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Unpopular Opinions", "Popular Opinions", "Unpopular Peeves", "Popular Peeves"],
  datasets: [
    {
      label: "Votes",
      data: [12, 19, 3, 7],
      backgroundColor: ["#FF4D4D", "#4D4DFF", "#FF4D4D", "#4D4DFF"],
      borderColor: "#FFFFFF",
      borderWidth: 1,
    },
  ],
};

const options: ChartOptions<"pie"> = {
  responsive: true,
  maintainAspectRatio: true,
  layout: {
    padding: {
      top: 0,
      bottom: 8,
      left: 0,
      right: 0,
    },
  },
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#FFFFFF",
        font: {
          size: 13,
        },
        boxWidth: 16,
        padding: 8,
      },
    },
  },
};

export default function Score() {
  return (
    <>
      <h2>Unpopular Score</h2>
      <div className={styles.canvas}>
        <Pie data={data} options={options} />
      </div>
      <h2>Breakdown</h2>
      <div className={styles.breakdown}>
        <ul>
          <li>Opinions<hr/>00%</li>
          <ul>
            <li>#Category<hr/>00%</li>
            <li>#Category<hr/>00%</li>
            <li>#Category<hr/>00%</li>
          </ul>
          <li>Pet Peeves<hr/>00%</li>
          <ul>
            <li>#Category<hr/>00%</li>
            <li>#Category<hr/>00%</li>
            <li>#Category<hr/>00%</li>
          </ul>
        </ul>
      </div>
    </>
  );
}