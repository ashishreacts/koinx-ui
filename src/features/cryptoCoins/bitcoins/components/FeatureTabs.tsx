import {
  Box,
  Card,
  CardContent,
  CardHeader,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { MultipleTabs } from "./MultipleTabs";
import { PerformanceTable } from "./PerformanceTable";

export const FeatureTabs = () => {
  const performanceData = [
    {
      label1: "Today's Low",
      value1: "40,930.22",
      label2: "Today's High",
      value2: "49,343.83",
      linearValue: 80,
    },
    {
      label1: "52W Low",
      value1: "40,930.22",
      label2: "52W High",
      value2: "49,343.83",
      linearValue: 100,
    },
  ];

  return (
    <Box>
      <MultipleTabs />
      <Card>
        <CardHeader title={<Typography variant="h4">Performance</Typography>} />
        <CardContent>
          {performanceData.map((data, index) => (
            <Stack
              direction="row"
              spacing={2}
              sx={{
                mb: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
              key={index}
            >
              <Stack direction="column">
                <Typography>{data.label1}</Typography>
                <Typography>{data.value1}</Typography>
              </Stack>
              <Box>
                <LinearProgress
                  color="success"
                  variant="determinate"
                  value={data.linearValue}
                  sx={{ width: "30rem", mt: 2 }}
                />
              </Box>
              <Stack direction="column">
                <Typography>{data.label2}</Typography>
                <Typography>{data.value2}</Typography>
              </Stack>
            </Stack>
          ))}
        </CardContent>
        <PerformanceTable />
      </Card>
    </Box>
  );
};
