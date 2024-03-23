import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { MultipleTabs } from "./MultipleTabs";
import { PerformanceData } from "./PerforManceData";
import { PerformanceTable } from "./PerformanceTable";

export const FeatureTabs = () => {
  const Data = [
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
          {Data.map((data, index) => (
            <PerformanceData data={data} key={index} />
          ))}
        </CardContent>
        <PerformanceTable />
      </Card>
    </Box>
  );
};
