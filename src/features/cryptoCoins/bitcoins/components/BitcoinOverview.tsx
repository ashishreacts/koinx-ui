import { CryptoIcon, CurrencyCode } from "@/components/Elements";
import { ArrowDropUp } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { CryptoPriceLineChart } from "./CryptoPriceLineChart";

export const BitcoinOverview = () => {
  const chipLabels = ["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"];

  return (
    <Container component="div">
      <Card variant="outlined">
        <CardContent>
          <Stack direction="row" spacing={2}>
            <Typography variant="h4">
              <CryptoIcon currencyCode={CurrencyCode.BTC} />
              Bitcoin
            </Typography>
            <Typography variant="h6">BTC</Typography>
            <Chip label="#Rank 1" />
          </Stack>

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
    </Container>
  );
};
