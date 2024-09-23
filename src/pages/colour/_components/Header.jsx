import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

function Header() {
  return (
    <Box className="contact" {...css.header}>
      <Box className="container">
        <Heading {...css.title}>Colours & samples</Heading>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  header: {
    height: '180px'
  },
  title: {
    fontSize: '35px',
    lineHeight: '40px',
    fontWeight: '200',
    paddingTop: '25px',
    color: '#111',
    textTransform:"uppercase"
  }
};