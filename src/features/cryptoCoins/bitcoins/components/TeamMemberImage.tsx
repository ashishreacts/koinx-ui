import { Box, CardMedia, ImageListItemBar } from "@mui/material";

export const TeamMemberImage = (data: {
  name: string;
  designation: string;
  image: string;
  content: string;
}) => {
  return (
    <Box>
      <CardMedia component="img" sx={{ width: 120, p: 1 }} image={data.image} />
      <ImageListItemBar
        title={data.name}
        subtitle={<span>{data.designation}</span>}
        position="below"
        sx={{ ml: 1 }}
      />
    </Box>
  );
};
