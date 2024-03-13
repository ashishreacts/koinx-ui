import { ContentLayout } from "@/components/Layout";
import { BitcoinBreadCrumb } from "../components/BitcoinBreadCrumb";
import { Grid, Stack } from "@mui/material";
import { BitcoinOverview } from "../components/BitcoinOverview";

export const KoinxUI = () => {
  return (
    <ContentLayout title="">
      <BitcoinBreadCrumb />
      <Grid spacing={2}>
        <Stack direction="column" spacing={2}>
          <BitcoinOverview />
        </Stack>
      </Grid>
    </ContentLayout>
  );
};
