import React from 'react';
import ProductBanner from '@/assets/alstar-banner.webp';
import { Box, Image, Heading } from '@chakra-ui/react';
import { FILE_URL } from '@/api';
import { useTranslation } from 'react-i18next';

function Header({ products }) {
  const { i18n } = useTranslation();
  return (
    <Box position={'relative'}>
      <Image src={`${FILE_URL}/files/${products?.image}`} alt="ProductBanner" />
      <Box className="container">
        <Box {...css.box}>
          <Heading {...css.title}>{products?.[`name_${i18n?.language}`]}</Heading>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  title: {
    position: 'absolute',
    left: '50px',
    fontSize: '35px',
    lineHeight: '40px',
    fontWeight: '200',
    color: '#111',
    textTransform: 'uppercase'
  },
  box: {
    position: 'absolute',
    top: '50px',
    left: 0,
    width: '45%',
    height: '100%'
  }
};
