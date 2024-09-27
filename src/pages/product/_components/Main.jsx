import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function Main() {
  return (
    <Box p="36px 0">
      <Box className="container-mix">
        <Heading {...css.title}>
          Why ALSTAR™ aluminium composite panels are the ideal choice for your façade project.
        </Heading>
        <Text {...css.text}>
          When it comes to high-quality aluminium composite panels for façade cladding, ALSTAR™ is
          the ideal choice. Its superiority is based on a number of unique properties. In summary,
          they form the ALSTAR™ performance power: durable quality, simple processing,
          cost-effective installation, maximum fire protection (class A1), long service life, colour
          variety and consistent sustainability. They are ideal for sophisticated cladding of
          ventilated façade constructions, both in new builds and in renovation projects, and
          combine the advantages of energy-efficient and economical construction with architectural
          quality.
        </Text>
        <Text {...css.text}>
          ALSTAR™ composite panels impress with further clear product advantages such as exact
          flatness, colour variety and excellent formability. Their versatility in processing and
          cost-effectiveness make them the ideal solution for your projects, even when the
          extraordinary is required.
        </Text>
        <Text {...css.text}>
          ALSTAR™ composite panels can be processed directly on site using standard tools and
          finished in a variety of ways to add a personalised touch to any project. In addition, the
          robustness of the composite material guarantees the long-term value of the project without
          additional follow-up investments.
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
    fontWeight: '400',
    color: '#111'
  },
  text: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '200',
    color: '#111',
    margin: '12px 0'
  }
};
