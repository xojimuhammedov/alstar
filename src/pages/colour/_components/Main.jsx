import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function Main() {
  return (
    <Box p={'36px 0'}>
      <Box className="container-mix">
        <Heading {...css.title}>Inspiring colours for creative facade projects</Heading>
        <Text {...css.text}>
          Extravagant, decorative, natural or elegant – with a range of over 200 colours and surface
          designs, ALSTARTM opens up almost limitless possibilities for giving buildings a unique
          character. Choose between plain colours, metallic, sparkling, prismatic, various degrees
          of gloss and individual decors.
        </Text>
        <Text {...css.text}>
          All colours are characterised by their extreme durability, colour brilliance and weather
          resistance and are therefore ideally suited for outdoor applications. Even after decades,
          façade projects with ALSTARTM composite panels still look colourfast and brilliant. The
          reason for this is the coating with ALSTARTM. One of the highest quality coatings in the
          world, based on a transparent fluoropolymer resin (FEVE), which does not affect the
          individual colour tone. Advantages that pay for themselves: low maintenance costs and a
          quality guarantee of up to 20 years.
        </Text>
        <Text {...css.text}>
          Immerse yourself in the world of ALSTARTM colours. We will be happy to send you colour
          charts or original colour samples, because nothing can replace the effect of the original.
        </Text>
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  title: {
    fontSize: '34px',
    lineHeight: '39px',
    fontWeight: '200',
    color: '#111',
    marginBottom: '24px'
  },
  text: {
    fontSize: '16px',
    lineHeight: '25px',
    color: '#111',
    marginBottom: '12px'
  }
};
