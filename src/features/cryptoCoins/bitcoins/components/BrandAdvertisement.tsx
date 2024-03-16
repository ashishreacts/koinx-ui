import { GetStarted } from "@/components/Elements";
import { ArrowForward } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";

export const BrandAdvertisement = () => {
  return (
    <Card>
      <CardHeader
        align="center"
        title={
          <Typography variant="h4">Get Started with KoinX for FREE</Typography>
        }
      />
      <CardContent>
        <Stack direction="column" alignItems="center" spacing={2}>
          <Typography align="center">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </Typography>
          <GetStarted />
          <Button variant="contained">
            Get Started For FREE <ArrowForward />
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
