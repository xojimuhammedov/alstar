import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function About() {
  return (
    <Box p={"36px 0"}>
      <Box className="container-mix">
        <Heading {...css.title}>
          ALSTAR – A strong brand for strong Partners and large Projects
        </Heading>
        <Text {...css.text}>
          ALSTAR is a brand of Mitsubishi Chemical. As a global market leader with over 50 years of
          experience in the development and manufacture of aluminium composite panels for
          sophisticated façade cladding, we stand for the safety of innovative, high-quality
          products and perfect service. BE.SAFE. is the claim that ALSTAR proves not only as a
          product, but holistically as a corporate philosophy. This is backed by tangible arguments
          for more inspiration, quality and safety for rear-ventilated building façades – from fire
          protection to sustainability. Architects and fabricators worldwide rely on our quality
          products for the implementation of unique architectural projects - both in existing and
          new buildings.
        </Text>
      </Box>
    </Box>
  );
}

export default About;

const css = {
  title: {
    fontSize: '34px',
    lineHeight: '39px',
    fontWeight: '200',
    color: '#111',
    textAlign: 'center',
    marginBottom: '24px'
  },
  text: {
    fontSize: '16px',
    lineHeight: '25px',
    color: '#111',
    marginBottom: '12px',
    textAlign: 'center'
  }
};
