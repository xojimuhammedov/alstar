import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import DesignImage from '@/assets/design.webp';

function Section() {
  return (
    <Box p={'24px 0'}>
      <Box className="container-mix">
        <SimpleGrid gap={'24px'} columns={4}>
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
      </Box>
    </Box>
  );
}

export default Section;

const css = {
  image: {
    maxWidth: '100%',
    minWidth: '100%',
    width: '100%'
  },
  name: {
    fontSize: '18px',
    lineHeight: '25px',
    color: '#111',
    marginTop: '12px',
    fontWeight: '500'
  }
};
