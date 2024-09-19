import { Box, Heading, Flex, Image, Text, Link } from "@chakra-ui/react";
import React from "react";

import NewsImage from "@/assets/news.webp";

function News() {
  return (
    <Box p={"36px 0"}>
      <Box className="container-mix">
        <Heading {...css.title}>News: Current news and articles</Heading>
        <Flex {...css.card}>
          <Image {...css.image} src={NewsImage.src} alt="NewsImage" />
          <Box p="16px">
            <Heading {...css.name}>
              50 years of ALPOLIC: Successful for 50 years with innovation and
              know-how
            </Heading>
            <Text {...css.text}>
              We are celebrating our 50th anniversary: with numerous
              innovations, we have had a significant influence on trends in the
              international façade market since 1972.
            </Text>
            <Link href="/" {...css.link}>
              Learn More
            </Link>
          </Box>
        </Flex>
        <Flex {...css.card}>
          <Image {...css.image} src={NewsImage.src} alt="NewsImage" />
          <Box p="16px">
            <Heading {...css.name}>
              50 years of ALPOLIC: Successful for 50 years with innovation and
              know-how
            </Heading>
            <Text {...css.text}>
              We are celebrating our 50th anniversary: with numerous
              innovations, we have had a significant influence on trends in the
              international façade market since 1972.
            </Text>
            <Link href="/" {...css.link}>
              Learn More
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default News;

const css = {
  title: {
    fontSize: "34px",
    lineHeight: "39px",
    fontWeight: "200",
    color: "#111",
    textAlign: "center",
    marginBottom: "24px",
  },
  card: {
    boxShadow: "rgba(144, 173, 248, 0.25) 0px 9px 18px 0px",
    height: "200px",
    gap: "16px",
    borderRadius: "12px",
    margin: "24px 0",
  },
  image: {
    width: "100%",
    maxWidth: "350px",
    minWidth: "350px",
    height: "100%",
    objectFit: "cover",
    borderRadius: "12px 0 0 12px",
  },
  name: {
    fontWeight: "200",
    color: "#111",
    fontSize: "25px",
    lineHeight: "30px",
    marginBottom: "12px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "25px",
    color: "#111",
    marginBottom: "12px",
  },
  link: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "8px 15px",
    fontWeight: "500",
    fontSize: "14px",
    transition: "0.3s all",
    borderRadius: "12px",

    _hover: {
      background: "#C22329",
    },
  },
};
