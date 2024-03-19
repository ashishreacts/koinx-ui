import { ContentLayout } from "@/components/Layout";
import { Grid, Stack } from "@mui/material";
import { AboutCoin } from "../components/AboutCoin";
import { AboutTeam } from "../components/AboutTeam.1";
import { BitcoinBreadCrumb } from "../components/BitcoinBreadCrumb";
import { BitcoinOverview } from "../components/BitcoinOverview";
import { BrandAdvertisement } from "../components/BrandAdvertisement";
import { FeatureTabs } from "../components/FeatureTabs";
import { Sentiment } from "../components/Sentiment";
import { Tokenomics } from "../components/Tokenomics";
import { TrendingCoins } from "../components/TrendingCoins";

export const KoinxUI = () => {
  return (
    <ContentLayout title="">
      <BitcoinBreadCrumb />
      <Grid container marginTop={0.5} spacing={2}>
        <Grid item xs={12} md={8}>
          <Stack direction="column" spacing={2}>
            <BitcoinOverview />
            <FeatureTabs />
            <Sentiment />
            <AboutCoin />
            <Tokenomics />
            <AboutTeam />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction="column" spacing={2}>
            <BrandAdvertisement />
            <TrendingCoins />
          </Stack>
        </Grid>
      </Grid>
    </ContentLayout>
  );
};
