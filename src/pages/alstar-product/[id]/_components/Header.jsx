import { Box, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

function Header() {
  const router = useRouter()?.query?.id;
  const headerName = router == 1 ? 'ALSTAR™ NC/A1' : router == 2 ? 'ALSTAR™ A2' : 'ALSTAR™FR';

  return (
    <Box className="header-product">
      <Box className="container">
        <Heading {...css.title}>{headerName}</Heading>
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
