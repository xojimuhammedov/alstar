import { Box, Heading, SimpleGrid, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Link from 'next/link';

function Main() {
  const { t } = useTranslation();
  return (
    <Box p={'36px 0'}>
      <Box className="container-mix">
        <Heading {...css.title}>{t('servicedownload.name')}</Heading>
        <Text {...css.text}>{t('servicedownload.text')}</Text>

        <SimpleGrid mt={'48px'} gap={'36px'} columns={2}>
          <Box>
            <Image
              {...css.image}
              alt="Project One"
              src="https://www.alpolic.eu/uploads/media/filter-540px/00/40-kachel_download_750x400_neu.webp?v=3-0"
            />
            <Heading {...css.name}>Downloads</Heading>
            <Text {...css.text}>
              Are you looking for detailed information about our products, colors, tender texts or
              approvals? In our download center you have everything at your fingertips in a matter
              of seconds.
            </Text>
            <Link href="/downloads">
              <Text {...css.link}>Learn More</Text>
            </Link>
          </Box>
          <Box>
            <Image
              {...css.image}
              alt="Project One"
              src="https://www.alpolic.eu/uploads/media/filter-540px/02/42-kachel_service_750x400_neu.webp?v=3-0"
            />
            <Heading {...css.name}>Service</Heading>
            <Text {...css.text}>
              You would like to request a colour sample or need support with your project? Then
              simply contact us. Our competent contact persons will be happy to advise you at any
              time.
            </Text>
            <Link href="/services">
              <Text {...css.link}>Learn More</Text>
            </Link>
          </Box>
        </SimpleGrid>
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
    marginBottom: '16px'
  },
  image: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%'
  },
  name: {
    fontSize: '25px',
    lineHeight: '30px',
    fontWeight: '200',
    color: '#111',
    margin: '8px 0'
  },
  link: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '8px 15px',
    fontWeight: '500',
    fontSize: '14px',
    transition: '0.3s all',
    borderRadius: '12px',
    width: '110px',
    textAlign:"center",

    _hover: {
      background: '#C22329'
    }
  }
};
