import { Box, LinearProgress, Stack, Typography } from "@mui/material";

type PerformanceDataProps = {
  data: {
    label1: string;
    value1: string;
    label2: string;
    value2: string;
    linearValue: number;
  };
};
export const PerformanceData = ({ data }: PerformanceDataProps) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        mb: 1,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography>{data.label1}</Typography>
        <Typography>{data.value1}</Typography>
      </Box>
      <LinearProgress
        color="success"
        variant="determinate"
        value={data.linearValue}
        sx={{ width: "30rem", top: 20 }}
      />
      <Box>
        <Typography>{data.label2}</Typography>
        <Typography>{data.value2}</Typography>
      </Box>
    </Stack>
  );
};
