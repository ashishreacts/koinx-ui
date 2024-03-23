import { CryptoIcon, CurrencyCode } from "@/components/Elements";
import { ArrowDropUp } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";

export const TrendingCoins = () => {
  return (
    <Card>
      <CardHeader
        title={<Typography variant="h4">Trending Coins (24h)</Typography>}
      />
      <CardContent>
        <Stack direction="column" spacing={2}>
          <TrendingCoin />
          <TrendingCoin />
          <TrendingCoin />
        </Stack>
      </CardContent>
    </Card>
  );
};

function TrendingCoin() {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <CryptoIcon currencyCode={CurrencyCode.BTC} />
        <Typography>Bitcoin (BTC)</Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <ArrowDropUp sx={{ verticalAlign: "middle" }} />
        2.51%
      </Stack>
    </Stack>
  );
}
