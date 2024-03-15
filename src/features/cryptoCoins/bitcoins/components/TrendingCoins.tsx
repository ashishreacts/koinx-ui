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
  const trendingCoinsData = [
    { currencyCode: CurrencyCode.BTC, name: "Bitcoin (BTC)", percentage: 5.26 },
    { currencyCode: CurrencyCode.BTC, name: "Bitcoin (BTC)", percentage: 6.26 },
    { currencyCode: CurrencyCode.BTC, name: "Bitcoin (BTC)", percentage: 7.26 },
  ];
  return (
    <Card>
      <CardHeader
        title={<Typography variant="h4">Trending Coins (24h)</Typography>}
      />
      <CardContent>
        {trendingCoinsData.map((data, index) => (
          <Stack direction="row" spacing={2} key={index}>
            <CryptoIcon currencyCode={data.currencyCode} />
            <Typography>{data.name}</Typography>
            <Typography>
              <ArrowDropUp sx={{ verticalAlign: "middle" }} />
              {data.percentage}
            </Typography>
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
};
