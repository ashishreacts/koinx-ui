import { useTheme } from "@mui/material/styles";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import revenueData from "../data/revenueData.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const CryptoPriceLineChart = () => {
  const theme = useTheme();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const data = {
    labels: revenueData.map((data) => data.label),
    datasets: [
      {
        label: "Revenue",
        data: revenueData.map((data) => data.revenue),
        borderColor: theme.palette.highlight.main,
        backgroundColor: theme.palette.highlight.main + "1A",
      },
    ],
  };

  return <Line options={options} data={data} />;
};
