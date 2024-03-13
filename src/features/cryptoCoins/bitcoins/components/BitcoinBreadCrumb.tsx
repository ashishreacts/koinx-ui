import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

export const BitcoinBreadCrumb = () => {
  return (
    <Box>
      <Breadcrumbs separator=">>" aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Cryptocurrencies
        </Link>
        <Typography color="text.primary">Bitcoin</Typography>
      </Breadcrumbs>
    </Box>
  );
};
