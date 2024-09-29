import React from 'react';
import ProductBanner from '@/assets/alstar-banner.webp';
import { Box, Image } from '@chakra-ui/react';
import { FILE_URL } from '@/api';

function Header({ products }) {
  return (
    <Box>
      <Image src={`${FILE_URL}/files/${products?.image}`} alt="ProductBanner" />
    </Box>
  );
}

export default Header;
