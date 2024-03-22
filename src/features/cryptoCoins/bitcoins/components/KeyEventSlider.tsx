import { AccountBalance, Moving, Newspaper } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { KeyEventCardData } from "./KeyEventCardData";

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
    slidesToShow: 2,
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
    <Box>
      <Slider {...settings}>
        {items.map((item, index) => (
          <Box key={index}>
            <KeyEventCardData item={item} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
