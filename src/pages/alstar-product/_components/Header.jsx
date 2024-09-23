import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

function Header() {
  return (
    <Box className="header-product">
      <Box className="container">
        <Heading {...css.title}>ALSTAR A1</Heading>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  title: {
    fontSize: '35px',
    lineHeight: '40px',
    fontWeight: '200',
    paddingTop: '25px',
    color: '#fff'
  }
};
