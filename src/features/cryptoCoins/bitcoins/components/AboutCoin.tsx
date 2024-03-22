import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { AboutCoinCardData } from "./AboutCoinCardData";

export const AboutCoin = () => {
  const cardData = [
    {
      src: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/WFOX6YNCDJIPFOCR2YQ2OUC5GY.jpg",
      label: " Calculate your Profits",
    },
    {
      src: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/WFOX6YNCDJIPFOCR2YQ2OUC5GY.jpg",
      label: "Calculate your tax liability",
    },
  ];
  return (
    <Card>
      <CardHeader title={<Typography variant="h4">About Bitcoin</Typography>} />
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600}>
          What is Bitcoin?
        </Typography>
        <Typography align="justify">
          Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394,75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600}>
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography align="justify">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.
        </Typography>
        <br />
        <Typography align="justify">
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
          vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
          felis pellentesque interdum. Odio cursus phasellus velit in senectus
          enim dui. Turpis tristique placerat interdum sed volutpat. Id
          imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi
          nunc praesent massa turpis a. Integer dignissim augue viverra nulla et
          quis lobortis phasellus. Integer pellentesque enim convallis ultricies
          at.
        </Typography>
        <br />
        <Typography align="justify">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti laculis congue ipsum
          fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
          dui
        </Typography>
      </CardContent>
      <Divider />
      <CardHeader
        title={<Typography variant="h4">Already Holding Bitcoin?</Typography>}
      />

      <Grid container padding={2} spacing={2}>
        {cardData.map((data, index) => (
          <Grid item alignItems="center" xs={12} md={6}>
            <AboutCoinCardData data={data} key={index} />
          </Grid>
        ))}
      </Grid>

      <Divider />
      <CardContent>
        <Typography>
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </Typography>
      </CardContent>
    </Card>
  );
};
