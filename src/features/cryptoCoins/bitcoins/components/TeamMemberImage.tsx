import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

export const TeamMemberImage = (data: {
  name: string;
  designation: string;
  image: string;
}) => {
  return (
    <ImageList cols={1}>
      <ImageListItem>
        <img src={data.image} />
        <ImageListItemBar
          position="below"
          title={data.name}
          subtitle={data.designation}
          sx={{
            textAlign: "center",
          }}
        />
      </ImageListItem>
    </ImageList>
  );
};
