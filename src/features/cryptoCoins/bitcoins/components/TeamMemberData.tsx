import { Card, Grid, Typography } from "@mui/material";
import { TeamMemberImage } from "./TeamMemberImage";

type TeamMemberDataProps = {
  data: {
    name: string;
    designation: string;
    image: string;
    content: string;
  };
};

export const TeamMemberData = ({ data }: TeamMemberDataProps) => {
  return (
    <Card sx={{ background: (theme) => theme.palette.highlight.light }}>
      <Grid
        container
        padding={2}
        alignItems="center"
        spacing={2}
        justifyContent="center"
      >
        <Grid item xs={12} md={2}>
          <TeamMemberImage
            name={data.name}
            designation={data.designation}
            image={data.image}
          />
        </Grid>
        <Grid item md={10}>
          <Typography component="p" align="justify">
            {data.content}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};
