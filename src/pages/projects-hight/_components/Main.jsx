import { Box, Heading, SimpleGrid, Text, Image, Link } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';


import ScreenOne from "@/assets/screen4.jpg";
import ScreenTwo from "@/assets/screen5.jpg";
import ScreenThree from "@/assets/screen6.jpg";
import ScreenFour from "@/assets/screen3.jpg";
import ScreenFive from "@/assets/screen7.jpg";
import ScreenSix from "@/assets/screen8.jpg";

function Main() {
  const { t } = useTranslation();
  return (
    <Box p={'36px 0'}>
      <Box className="container-mix">
        <Heading {...css.title}>{t('BE.UP.TO.DATE.')}</Heading>
        <Text {...css.text}>{t('newsListText')}</Text>
        <Image src={ScreenFour.src} alt="Image" />
        <Image src={ScreenOne.src} alt="Image" />
        <Image src={ScreenTwo.src} alt="Image" />
        <Image src={ScreenThree.src} alt="Image" />
        <Image src={ScreenFive.src} alt="Image" />
        <Image src={ScreenSix.src} alt="Image" />
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  title: {
    fontSize: '34px',
    lineHeight: '39px',
    fontWeight: '200',
    color: '#111',
    marginBottom: '24px'
  },
  text: {
    fontSize: '16px',
    lineHeight: '25px',
    color: '#111',
    marginBottom: '16px'
  },
  image: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%'
  },
  name: {
    fontSize: '25px',
    lineHeight: '30px',
    fontWeight: '200',
    color: '#111',
    margin: '8px 0'
  },
  link: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '8px 15px',
    fontWeight: '500',
    fontSize: '14px',
    transition: '0.3s all',
    borderRadius: '12px',

    _hover: {
      background: '#C22329'
    }
  }
};
