import React from 'react';
import ProductBanner from '@/assets/alstar-banner.webp';
import { Box, Image } from '@chakra-ui/react';

function Header() {
  return (
    <Box>
      <Image src={ProductBanner.src} alt="ProductBanner" />
    </Box>
  );
}

export default Header;
