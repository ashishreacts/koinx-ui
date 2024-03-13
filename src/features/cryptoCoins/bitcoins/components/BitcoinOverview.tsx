import { CryptoIcon, CurrencyCode } from "@/components/Elements";
import { ArrowDropUp } from "@mui/icons-material";
import {
  Chip,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { CreateChart } from "./CreateChart";

export const BitcoinOverview = () => {
  return (
    <Container component="div">
      <Paper elevation={2}>
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
          <Chip label="1H" />
          <Chip label="24H" />
          <Chip label="7D" />
          <Chip label="1M" />
          <Chip label="3M" />
          <Chip label="6M" />
          <Chip label="1Y" />
          <Chip label="ALL" />
        </Stack>
        <CreateChart />
      </Paper>
    </Container>
  );
};
