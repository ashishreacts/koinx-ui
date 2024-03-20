import { Info } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { KeyEventSlider } from "./KeyEventSlider";

export const Sentiment = () => {
  return (
    <Card>
      <CardHeader title={<Typography variant="h4">Sentiment</Typography>} />
      <Stack direction="column" spacing={2}>
        <CardContent>
          <Stack direction="row">
            <Typography variant="subtitle1">
              Key Events <Info sx={{ verticalAlign: "middle" }} />
            </Typography>
          </Stack>
          <KeyEventSlider />
          <Typography variant="subtitle1">
            Analyst Estimates <Info sx={{ verticalAlign: "middle" }} />
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Avatar sx={{ bgcolor: grey[500], width: 100, height: 100 }}>
              <Typography>76%</Typography>
            </Avatar>
            <Stack direction="column" spacing={2}>
              <Typography>Buy</Typography>
              <Typography>Sell</Typography>
              <Typography>Hold</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};
