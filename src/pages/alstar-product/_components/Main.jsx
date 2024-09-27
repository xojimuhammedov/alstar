import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function Main() {
  return (
    <Box p={'36px 0'}>
      <Box className="container-mix">
        <Heading {...css.title}>
          For building projects with the highest fire protection requirements: ALSTAR A1
        </Heading>
        <Text {...css.text}>
          ALSTAR NC/A1 is a composite panel consisting of two 0.5 mm thick aluminium cover sheets
          and a non-combustible mineral core (3 mm). The core consists of almost 100%
          non-combustible ingredients and has a calorific value of less than 1 MJ/kg. ALSTAR
          NC/A1 is currently the only composite panel in the world that is classified for the
          highest fire protection class A1 according to DIN EN 13501-1. This means: non-combustible
          and also no smoke development in case of fire. A sustainable alternative to façade
          materials made of metal or other cladding.
        </Text>
        <Text {...css.text}>
          The front is usually coated with LUMIFLON™ – based on a transparent fluoropolymer resin
          (FEVE) – or with HDP (High Durable Polymer). Both coatings guarantee high colour
          stability, provide reliable protection against the effects of weather, UV radiation,
          corrosion and acids and are efficiently resistant to chalking.
        </Text>
        <Text {...css.text}>
          ALSTAR NC/A1 composite panels are particularly recommended for building projects with
          the highest fire protection requirements or where the use of non-combustible facade
          materials is prescribed - for example high-rise buildings or special buildings such as
          schools, hospitals, retirement homes etc.
        </Text>
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  title: {
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: '200',
    color: '#111'
  },
  text: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '200',
    color: '#111',
    margin:"12px 0"
  }
};
