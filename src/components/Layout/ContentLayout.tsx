import { Head } from "@/components/Head";
import { Box, Typography } from "@mui/material";
import React from "react";

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <Box>
        <Box>
          <Typography variant="h4">{title}</Typography>
        </Box>
        <Box
          sx={{ marginX: { xs: 1, sm: 4 }, marginY: { xs: 2, sm: 2, md: 4 } }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};
