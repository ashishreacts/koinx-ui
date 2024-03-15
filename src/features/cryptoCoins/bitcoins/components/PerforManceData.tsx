import { Box, LinearProgress, Stack, Typography } from "@mui/material";

export const PerformanceData = (
  index: number,
  data: {
    label1: string;
    value1: string;
    label2: string;
    value2: string;
    linearValue: number;
  }
) => {
  return (
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
  );
};
