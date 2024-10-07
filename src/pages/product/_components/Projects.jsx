import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Projects() {
  const {t} = useTranslation()
  return (
    <Box p={'36px 0'}>
      <Box className="container-mix">
        <Heading {...css.title}>
          {t('Boost your performance with ALSTAR: discover the benefits!')}
        </Heading>
        <SimpleGrid mt={'24px'} gap="24px" columns={3}>
          <Box width={'100%'}>
            <Image
              alt="Project"
              {...css.image}
              src="https://www.alpolic.eu/uploads/media/filter-540px/06/1006-ALP_Perf_Power_Produkt.webp?v=1-0"
            />
            <Heading {...css.name}>Product Performance</Heading>
            <Text {...css.text}>
              The special composition of the core material in combination with our unique fusion
              process makes ALSTAR composite panels so superior.
            </Text>
          </Box>
          <Box width={'100%'}>
            <Image
              alt="Project"
              {...css.image}
              src="https://www.alpolic.eu/uploads/media/filter-540px/06/996-ALP_Perf_Power_Verarbeitung.webp?v=1-0"
            />
            <Heading {...css.name}>Processing Performance</Heading>
            <Text {...css.text}>
              Significantly more precise routing and cutting with clean cut edges. Only one person
              required for edging even large panel formats.
            </Text>
          </Box>
          <Box width={'100%'}>
            <Image
              alt="Project"
              {...css.image}
              src="https://www.alpolic.eu/uploads/media/filter-540px/03/993-ALP_Perf_Power_Installation.webp?v=1-0"
            />
            <Heading {...css.name}>Installation Performance</Heading>
            <Text {...css.text}>
              With ALSTAR you save up to 50 % on the substructure and installation time without
              compromising the stability of the façade!
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Projects;

const css = {
  image: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%'
  },
  title: {
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: '400',
    color: '#111'
  },
  name: {
    fontSize: '25px',
    lineHeight: '30px',
    fontWeight: '300',
    color: '#111',
    margin: '8px 0'
  },
  text: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '200',
    color: '#111'
  }
};
