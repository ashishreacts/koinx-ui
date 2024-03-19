import { Card, CardContent, Grid, Typography } from "@mui/material";
import { TeamMemberImage } from "./TeamMemberImage";

type TeamMemberDataProps = {
  index: number;
  data: {
    name: string;
    designation: string;
    image: string;
    content: string;
  };
};

export const TeamMemberData = ({ index, data }: TeamMemberDataProps) => {
  return (
    <Card key={index} sx={{ m: 2 }}>
      <CardContent>
        <Grid container alignItems="center" spacing={2} justifyContent="center">
          <Grid item xs={12} md={3}>
            <TeamMemberImage
              name={data.name}
              designation={data.designation}
              image={data.image}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography component="p" align="justify">
              {data.content}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
