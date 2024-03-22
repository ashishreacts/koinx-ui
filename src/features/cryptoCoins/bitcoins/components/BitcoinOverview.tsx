import { CryptoIcon, CurrencyCode } from "@/components/Elements";
import { ArrowDropUp, CurrencyRupee } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
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
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h4">$46,953.04</Typography>
          <ArrowDropUp
            sx={{
              verticalAlign: "middle",
            }}
          />
          2.51%
          <Typography variant="h6">(24H)</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <CurrencyRupee fontSize="small" sx={{ verticalAlign: "middle" }} />
          <Typography variant="h6">39,42,343</Typography>
        </Stack>
        <Divider sx={{ marginY: 2 }} />
        <Grid container spacing={2} marginTop={0.5}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ textTransform: "capitalize" }}>
              Bitcoin Price Chart (USD)
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: "flex", gap: 1 }}>
            {chipLabels.map((label, index) => (
              <Chip label={label} key={index} />
            ))}
          </Grid>
        </Grid>
        <CryptoPriceLineChart />
      </CardContent>
    </Card>
  );
};
