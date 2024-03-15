import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Tokenomics = () => {
  const data = {
    labels: ["Crowdsale investors: 80%", "Foundation: 20%"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["blue", "orange"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Card>
      <CardHeader
        title={
          <Stack direction="column" spacing={2}>
            <Typography variant="h4">Tokenomics</Typography>
            <Typography variant="h5">Initial Distribution</Typography>
          </Stack>
        }
      />
      <Box sx={{ width: "30%" }}>
        <Doughnut data={data} />
      </Box>
      <CardContent>
        <Typography component="p" sx={{ mb: 1 }} align="justify">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.
        </Typography>
      </CardContent>
    </Card>
  );
};
