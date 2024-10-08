import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

import axios from "axios";
import { BASE_URL, FILE_URL } from "@/api";

import { useTranslation } from "react-i18next";
import AboutColor from "./AboutColor";

function Section() {
  const { t, i18n } = useTranslation();
  const [color, setColor] = useState();
  const [colorId, setColorId] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/colours?limit=1000`)
      .then((res) => {
        setColor(res?.data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box p={"24px 0"}>
      <Box className="container-mix">
        <SimpleGrid gap={"24px"} columns={4}>
          {color?.map((item, index) => (
            <Box key={index}>
              <Image
                onClick={() => {
                  onOpen(), setColorId(item?.id);
                }}
                {...css.image}
                src={`${FILE_URL}/files/${item?.image}`}
                alt="DesignImage"
              />
              <Heading {...css.name}>{item[`name_${i18n?.language}`]}</Heading>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <AboutColor colorId={colorId} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default Section;

const css = {
  image: {
    maxWidth: "100%",
    minWidth: "100%",
    width: "100%",
    height: "120px",
    cursor: "pointer",
  },
  name: {
    fontSize: "16px",
    lineHeight: "25px",
    color: "#111",
    marginTop: "12px",
    fontWeight: "400",
  },
};
