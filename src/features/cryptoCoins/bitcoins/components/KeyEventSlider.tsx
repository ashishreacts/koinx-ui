import { AccountBalance, Moving, Newspaper } from "@mui/icons-material";
import { Avatar, Card, Typography, useTheme } from "@mui/material";
import { green } from "@mui/material/colors";
import { Box, Stack } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const KeyEventSlider = () => {
  const theme = useTheme();

  const items = [
    {
      id: 1,
      icon: <Newspaper />,
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim,",
    },
    {
      id: 2,
      icon: <Moving />,
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    },
    {
      id: 3,
      icon: <Newspaper />,
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur el pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    },
    {
      id: 4,
      icon: <Moving />,
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del",
    },
    {
      id: 5,
      icon: <AccountBalance />,
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xs,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ maxWidth: "85rem" }}>
      <Slider {...settings}>
        {items.map((item) => (
          <Box key={item.id} sx={{ padding: theme.spacing(1) }}>
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
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
