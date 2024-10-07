import { Box, Heading, SimpleGrid, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Link from 'next/link';

function Main() {
  const { t } = useTranslation();
  return (
    <Box p={'36px 0'}>
      <Box className="container-mix">
        <Heading {...css.title}>{t('We will keep you up to date')}</Heading>

        <SimpleGrid mt={'48px'} gap={'36px'} columns={2}>
          <Box>
            <Image
              {...css.image}
              alt="Project One"
              src="https://www.alpolic.eu/uploads/media/filter-540px/08/648-kachel_webnews_750x400_neu_6.webp?v=2-0"
            />
            <Heading {...css.name}>{t('news-list.name')}</Heading>
            <Text {...css.text}>{t('news-list.text')}</Text>
            <Link href="/news-list">
              <Text {...css.link}>{t('Learn More')}</Text>
            </Link>
          </Box>
          <Box>
            <Image
              {...css.image}
              alt="Project One"
              src="https://www.alpolic.eu/uploads/media/filter-540px/01/411-kachel_fairs_750x400.webp?v=2-0"
            />
            <Heading {...css.name}>{t('news-events.name')}</Heading>
            <Text {...css.text}>{t('news-events.text')}</Text>
            <Link href="/news-events">
              <Text {...css.link}>{t('Learn More')}</Text>
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
    textAlign: 'center',

    _hover: {
      background: '#C22329'
    }
  }
};
