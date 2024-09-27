import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import DesignImage from '@/assets/design.webp';

function Section() {
  return (
    <Box p={'24px 0'}>
      <Box className="container-mix">
        <SimpleGrid gap={'24px'} columns={4}>
          <Box>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-3840x/06/846-RAL-6018_600x600_Yellow_Green.jpg?v=1-0'
              }
              alt="DesignImage"
            />
            <Heading {...css.name}>Yellow Green | MA6018-G30 </Heading>
          </Box>
          <Box>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-3840x/06/66-M7815-G30_Adobe_Pink.jpg?v=1-0'
              }
              alt="DesignImage"
            />
            <Heading {...css.name}>Adobe Pink | M7815-G30</Heading>
          </Box>
          <Box>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-3840x/01/911-Alu_Champagne_Brushed_ML_0013-G40-ret.jpg?v=1-0'
              }
              alt="DesignImage"
            />
            <Heading {...css.name}>Alu Champagne Brushed | ML0013-G40</Heading>
          </Box>
          <Box>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-3840x/03/53-M0556-G30_Aluminium-Gray.jpg?v=1-0'
              }
              alt="DesignImage"
            />
            <Heading {...css.name}>Aluminium Gray | M0556-G30</Heading>
          </Box>

          <Box>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-3840x/08/868-Amethyst_Purple_MI_0020-G30-ret.jpg?v=1-0'
              }
              alt="DesignImage"
            />
            <Heading {...css.name}>Amethyst Purple | MI0020-G30</Heading>
          </Box>

          <Box>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-3840x/02/912-Anodic_Brushed_ML_0003-G10-ret.jpg?v=1-0'
              }
              alt="DesignImage"
            />
            <Heading {...css.name}>Anodic Brushed | ML0003-G10</Heading>
          </Box>

          <Box>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-3840x/02/832-Anodic-Silver_DE-MD9500-G30_Ret_2.jpg?v=1-0'
              }
              alt="DesignImage"
            />
            <Heading {...css.name}>Anodic Silver | MD9500-G30
            </Heading>
          </Box>
          <Box>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-3840x/00/810-Anodisation_Copper_ME_0049.jpg?v=1-0'
              }
              alt="DesignImage"
            />
            <Heading {...css.name}>Anodisation Copper | 049
            </Heading>
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
    width: '100%',
    height: '120px'
  },
  name: {
    fontSize: '16px',
    lineHeight: '25px',
    color: '#111',
    marginTop: '12px',
    fontWeight: '400'
  }
};
