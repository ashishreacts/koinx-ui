import { Avatar, Card, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { Stack } from "@mui/system";

type KeyEventCardDataProps = {
  item: {
    id: number;
    icon: JSX.Element;
    title: string;
    description: string;
  };
};

export const KeyEventCardData = ({ item }: KeyEventCardDataProps) => {
  return (
    <Card
      sx={{
        p: 1,
        background: (theme) => theme.palette.highlight.light,
      }}
    >
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ verticalAlign: "middle", bgcolor: green[500] }}>
          {item.icon}
        </Avatar>
        <Stack direction="column" spacing={2}>
          <Typography variant="h5">{item.title}</Typography>
          <Typography align="justify">{item.description}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};
