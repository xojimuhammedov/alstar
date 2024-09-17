import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import CarouselOne from "@/assets/slider1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function Header() {
  return (
    <Box position={"relative"}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box width={"100%"}>
            <Image {...css.image} src={CarouselOne.src} alt="CarouselOne" />
          </Box>
          <Box {...css.box}>
            <Heading {...css.title}>PERFORMANCE POWER FOR YOUR FAÇADE</Heading>
            <Text {...css.text}>
              More quality, more stability, more choice, lower costs: find out
              why ALPOLIC is the best choice for you and your project!
            </Text>
            <Link {...css.link} href="/">
              Learn More
            </Link>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default Header;

const css = {
  image: {
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
  },
  box: {
    position: "absolute",
    top: "130px",
    left: "70px",
    width: "40%",
  },
  title: {
    fontSize: "30px",
    lineHeight: "35px",
    fontWeight: "200",
    width: "400px",
    marginBottom: "24px",
    color: "#111",
  },
  text: {
    fontSize: "14px",
    color: "#5F5E5E",
    lineHeight: "22px",
    width: "480px",
    marginBottom: "24px",
  },
  link: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "10px 20px",
    fontWeight: "500",
    fontSize: "16px",
    transition: "0.3s all",

    _hover: {
      background: "#C22329",
    },
  },
};
