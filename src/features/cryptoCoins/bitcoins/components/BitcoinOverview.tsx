import { CryptoIcon, CurrencyCode } from "@/components/Elements";
import { ArrowDropUp } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { CryptoPriceLineChart } from "./CryptoPriceLineChart";

export const BitcoinOverview = () => {
  const chipLabels = ["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"];

  return (
    <Card variant="outlined">
      <CardHeader
        avatar={<CryptoIcon currencyCode={CurrencyCode.BTC} />}
        title={
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h4">Bitcoin</Typography>
            <Typography variant="subtitle1">BTC</Typography>
            <Chip label="Rank #1" />
          </Stack>
        }
      />

      <CardContent>
        <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
          <Typography variant="h4">$46,953.04</Typography>
          <Typography variant="h6">
            <ArrowDropUp sx={{ verticalAlign: "middle" }} />
            2.51%
          </Typography>
          <Typography variant="h6">(24H)</Typography>
        </Stack>
        <Divider />
        <Stack direction="row" spacing={2}>
          <Typography variant="h5" sx={{ textTransform: "capitalize" }}>
            Bitcoin Price Chart (USD)
          </Typography>
          {chipLabels.map((labels, index) => (
            <Chip label={labels} key={index} />
          ))}
        </Stack>
        <CryptoPriceLineChart />
      </CardContent>
    </Card>
  );
};
