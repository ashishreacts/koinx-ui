import { ArrowForward } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

type AboutCoinCardDataProps = {
  data: {
    src: string;
    label: string;
  };
};

export function AboutCoinCardData({ data }: AboutCoinCardDataProps) {
  const theme = useTheme();
  return (
    <Grid item xs={12} md={6}>
      <Card
        sx={{
          display: "flex",
          background: (theme) => theme.palette.highlight.light,
          margin: theme.spacing(1),
          padding: theme.spacing(1),
        }}
      >
        <CardMedia sx={{ width: 150 }} image={data.src} />
        <CardContent>
          <Typography variant="h6">{data.label}</Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "white", color: "inherit" }}
          >
            Check Now <ArrowForward />
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}
