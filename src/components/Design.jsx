import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

import DesignImage from "@/assets/design.webp";

import { useTranslation } from 'react-i18next';
function Design() {
  const {t} = useTranslation()
  return (
    <Box p={"36px 0"}>
      <Box className="container-mix">
        <Heading {...css.title}>{t("color.name")}</Heading>
        <Text {...css.text}>
        {t("color.text")}
        </Text>
        <SimpleGrid gap={"24px"} columns={4}>
          <Box>
            <Image {...css.image} src={DesignImage.src} alt="DesignImage" />
            <Heading {...css.name}>Uni colours</Heading>
          </Box>
          <Box>
            <Image {...css.image} src={DesignImage.src} alt="DesignImage" />
            <Heading {...css.name}>Uni colours</Heading>
          </Box>
          <Box>
            <Image {...css.image} src={DesignImage.src} alt="DesignImage" />
            <Heading {...css.name}>Uni colours</Heading>
          </Box>
          <Box>
            <Image {...css.image} src={DesignImage.src} alt="DesignImage" />
            <Heading {...css.name}>Uni colours</Heading>
          </Box>
        </SimpleGrid>

        <Flex mt="24px" justifyContent={"center"}>
          <Link href="/" {...css.link}>Learn More</Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default Design;

const css = {
  title: {
    fontSize: "34px",
    lineHeight: "39px",
    fontWeight: "200",
    color: "#111",
    textAlign: "center",
    marginBottom: "24px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "25px",
    color: "#111",
    textAlign: "center",
    marginBottom: "24px",
  },
  image: {
    maxWidth: "100%",
    minWidth: "100%",
    width: "100%",
  },
  name: {
    fontSize: "18px",
    lineHeight: "25px",
    color: "#111",
    marginTop: "12px",
    fontWeight: "500",
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
