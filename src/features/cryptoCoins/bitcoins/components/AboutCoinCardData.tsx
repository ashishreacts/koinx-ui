import { ArrowForward } from "@mui/icons-material";
import {
  Button,
  Card,
  Grid,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";

type AboutCoinCardDataProps = {
  data: {
    src: string;
    label: string;
  };
};

export const AboutCoinCardData = ({ data }: AboutCoinCardDataProps) => {
  return (
    <Card
      sx={{
        background: (theme) => theme.palette.highlight.light,
      }}
    >
      <Grid container padding={2}>
        <Grid item xs={5}>
          <ImageListItem>
            <img src={data.src} />
          </ImageListItem>
        </Grid>
        <Grid item xs={7}>
          <Stack direction="column" margin={1} spacing={2}>
            <Typography textAlign="center" variant="h6">
              {data.label}
            </Typography>
            <Button variant="contained" endIcon={<ArrowForward />}>
              Check Now
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};
