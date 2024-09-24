import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function Main() {
  return (
    <Box p={'36px 0'}>
      <Box className="container-mix">
        <Heading {...css.title}>ALPOLIC™ – Design without limits</Heading>
        <Text {...css.text}>
          The building envelope is an important design element of modern building architecture. It
          can accentuate the appearance of a building in a very special way using striking shapes
          and colours. Accordingly, the requirements that a perfect façade material must meet are
          manifold: unlimited design freedom combined with functional properties such as excellent
          flatness, weather resistance and ease of maintenance.
        </Text>
        <Text {...css.text}>
          ALPOLICTM aluminium composite panels meet these requirements. This is why they are used
          worldwide for impressive architectural projects. Be inspired by a selection of these
          projects and the impressive variety of ALPOLICTM. We will be happy to advise you on the
          implementation of your creative ideas. Talk to us.
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
