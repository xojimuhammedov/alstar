import { Box, Image } from '@chakra-ui/react';
import React from 'react';

function Header() {
  return (
    <Box position={'relative'}>
      <Image
        {...css.image}
        src={
          'https://www.alpolic.eu/uploads/media/fullsize-1920x/09/39-header_download_3840x537_neu.webp?v=3-0'
        }
        alt="BannerOne"
      />
    </Box>
  );
}

export default Header;

const css = {
  image: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    height: '200px',
    objectFit:"cover"
  }
};
