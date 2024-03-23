import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export const MultipleTabs = () => {
  const tabLabel = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            sx: {
              backgroundColor: (theme) => theme.palette.highlight.main,
            },
          }}
        >
          {tabLabel.map((label, index) => (
            <Tab
              label={
                <Typography
                  sx={{
                    textTransform: "none",
                    color: (theme) =>
                      value === index
                        ? theme.palette.highlight.main
                        : "inherit",
                  }}
                  variant="h6"
                >
                  {label}
                </Typography>
              }
              {...a11yProps(index)}
              key={index}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};
