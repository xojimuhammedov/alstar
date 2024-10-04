import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import ScreenOne from "@/assets/screen.jpg";
import ScreenTwo from "@/assets/screen1.jpg";
import ScreenThree from "@/assets/screen2.jpg";

function Section() {
  return (
    <Box p={'24px 0'}>
      <Box className="container-mix">
        <SimpleGrid gap={'24px'} columns={4}>
          <Box>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-3840x/05/355-108_n_state_street.webp?v=2-0'
              }
              alt="DesignImage"
            />
            <Heading {...css.name}>108N. State Street
            </Heading>
          </Box>
          <Box>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-3840x/06/356-A.T.-Kearney_Ljubljana_Slovenia.webp?v=2-0'
              }
              alt="DesignImage"
            />
            <Heading {...css.name}>A.T. Kearney
            </Heading>
          </Box>
          <Box>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-3840x/07/167-Kachel_fr_Abdoun-Shopping-Atrium_750x400.webp?v=3-0'
              }
              alt="DesignImage"
            />
            <Heading {...css.name}>Abdoun Shopping Atrium
            </Heading>
          </Box>
          <Box>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-3840x/08/358-Abeno-Harukas_Japan.webp?v=2-0'
              }
              alt="DesignImage"
            />
            <Heading {...css.name}>Abeno Harukas
            </Heading>
          </Box>

          <Box>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-3840x/09/169-Kachel_fr_Aldar-Headquater_Abu-Dhabi_UAE_01_750x400.webp?v=2-0'
              }
              alt="DesignImage"
            />
            <Heading {...css.name}>Aldar Headquarter
            </Heading>
          </Box>

          <Box>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-3840x/00/170-Kachel_fr_ALTARA-Shopping-Mall_Honduras_750x400.webp?v=2-0'
              }
              alt="DesignImage"
            />
            <Heading {...css.name}>ALTARA Shopping Mall
            </Heading>
          </Box>

          <Box>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-3840x/01/171-Kachel_fr_Ansan-Wongok-Bondong-Resident-Center_750x400.webp?v=2-0'
              }
              alt="DesignImage"
            />
            <Heading {...css.name}>Ansan Wongok Bondong Resident Center
            </Heading>
          </Box>
          <Box>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-3840x/09/359-Assembly-Hall_Vietnam.webp?v=2-0'
              }
              alt="DesignImage"
            />
            <Heading {...css.name}>Assembly Hall
            </Heading>
          </Box>
       
              
        </SimpleGrid>
        <Image src={ScreenOne.src} alt="Image" />
        <Image src={ScreenTwo.src} alt="Image" />
        <Image src={ScreenThree.src} alt="Image" />
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
