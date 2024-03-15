import { ContentLayout } from "@/components/Layout";
import { BitcoinBreadCrumb } from "../components/BitcoinBreadCrumb";
import { Grid, Stack } from "@mui/material";
import { BitcoinOverview } from "../components/BitcoinOverview";
import { FeatureTabs } from "../components/FeatureTabs";
import { Sentiment } from "../components/Sentiment";
import { AboutCoin } from "../components/AboutCoin";
import { Tokenomics } from "../components/Tokenomics";
import { AboutTeam } from "../components/AboutTeam";
import { BrandAdvertisement } from "../components/BrandAdvertisement";
import { TrendingCoins } from "../components/TrendingCoins";

export const KoinxUI = () => {
  return (
    <ContentLayout title="">
      <BitcoinBreadCrumb />
      <Grid container marginTop={0.5} spacing={2}>
        <Grid item xs={12} md={9}>
          <Stack direction="column" spacing={2}>
            <BitcoinOverview />
            <FeatureTabs />
            <Sentiment />
            <AboutCoin />
            <Tokenomics />
            <AboutTeam />
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <Stack direction="column" spacing={2}>
            <BrandAdvertisement />
            <TrendingCoins />
          </Stack>
        </Grid>
      </Grid>
    </ContentLayout>
  );
};
