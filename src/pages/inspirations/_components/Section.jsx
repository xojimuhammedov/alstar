import { Box, Heading, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

function Section() {
  return (
    <Box p={'36px 0'}>
      <Box className="container-mix">
        <SimpleGrid gap={'36px'} columns={2}>
          <Box>
            <Image
              {...css.image}
              alt="Project One"
              src="https://www.alpolic.eu/uploads/media/filter-540px/07/37-_Kachel_projekte_750x400.webp?v=2-0"
            />
            <Heading {...css.title}>Projects</Heading>
            <Text {...css.text}>
              Embark on a journey around the globe and discover the variety of ALSTAR.
            </Text>
            <Link href="/" {...css.link}>
              Learn More
            </Link>
          </Box>
          <Box>
            <Image
              {...css.image}
              alt="Project One"
              src="https://www.alpolic.eu/uploads/media/filter-540px/02/52-kachel_international_750x400.webp?v=2-0"
            />
            <Heading {...css.title}>Project-Highlights</Heading>
            <Text {...css.text}>
              Discover architectural highlights that captivate with extraordinary colours, shapes or
              finishes.
            </Text>
            <Link href="/" {...css.link}>
              Learn More
            </Link>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Section;

const css = {
  image: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%'
  },
  title: {
    fontSize: '25px',
    lineHeight: '30px',
    fontWeight: '200',
    color: '#111',
    margin: '8px 0'
  },
  text: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '200',
    color: '#111',
    marginBottom: '16px'
  },
  link: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '8px 15px',
    fontWeight: '500',
    fontSize: '14px',
    transition: '0.3s all',
    borderRadius: '12px',

    _hover: {
      background: '#C22329'
    }
  }
};
