import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  ImageListItemBar,
  Typography,
} from "@mui/material";

export const AboutTeam = () => {
  const teamData = [
    {
      name: "John Doe",
      designation: "Designation here",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO9tSarfe8u1e_CEVWY-9KngpnGPCBSIgIDA&usqp=CAU",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Jane Smith",
      designation: "Designation here",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO9tSarfe8u1e_CEVWY-9KngpnGPCBSIgIDA&usqp=CAU",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Bob Johnson",
      designation: "Designation here",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO9tSarfe8u1e_CEVWY-9KngpnGPCBSIgIDA&usqp=CAU",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <Card>
      <CardHeader title={<Typography variant="h4">Team</Typography>} />
      <CardContent>
        <Typography component="p" sx={{ mb: 1 }} align="justify">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </Typography>
      </CardContent>
      {teamData.map((data, index) => (
        <Card key={index} sx={{ display: "flex", m: 2 }}>
          <Box>
            <CardMedia
              component="img"
              sx={{ width: 120, p: 1 }}
              image={data.image}
            />

            <ImageListItemBar
              title={data.name}
              subtitle={<span>{data.designation}</span>}
              position="below"
              sx={{ ml: 1 }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "0 1 auto" }}>
              <Typography component="p" sx={{ mb: 1 }} align="justify">
                {data.content}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      ))}
    </Card>
  );
};
