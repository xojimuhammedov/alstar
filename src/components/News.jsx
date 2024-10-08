import { Box, Heading, Flex, Image, Text, Link } from '@chakra-ui/react';
import React from 'react';

import NewsImage from '@/assets/news.webp';
import { useTranslation } from 'react-i18next';

function News() {
  const { t } = useTranslation();
  return (
    <Box p={'36px 0'}>
      <Box className="container-mix">
        <Heading {...css.title}>{t('News: Current news and articles')}</Heading>
        <Flex {...css.card}>
          <Image
            {...css.image}
            src={
              'https://www.alpolic.eu/uploads/media/filter-540px/08/648-kachel_webnews_750x400_neu_6.webp?v=2-0'
            }
            alt="NewsImage"
          />
          <Box p="16px">
            <Heading {...css.name}>{t('news-list.name')}</Heading>
            <Text {...css.text}>{t('news-list.text')}</Text>
            <Link href="/news-list" {...css.link}>
              {t('Learn More')}
            </Link>
          </Box>
        </Flex>
        <Flex {...css.card}>
          <Image
            {...css.image}
            src={
              'https://www.alpolic.eu/uploads/media/filter-540px/01/411-kachel_fairs_750x400.webp?v=2-0'
            }
            alt="NewsImage"
          />
          <Box p="16px">
            <Heading {...css.name}>{t('news-events.name')}</Heading>
            <Text {...css.text}>{t('news-events.text')}</Text>
            <Link href="/news-events" {...css.link}>
              {t('Learn More')}
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default News;

const css = {
  title: {
    fontSize: '34px',
    lineHeight: '39px',
    fontWeight: '400',
    color: '#111',
    textAlign: 'center',
    marginBottom: '24px'
  },
  card: {
    boxShadow: 'rgba(144, 173, 248, 0.25) 0px 9px 18px 0px',
    height: '200px',
    gap: '16px',
    borderRadius: '12px',
    margin: '24px 0'
  },
  image: {
    width: '100%',
    maxWidth: '350px',
    minWidth: '350px',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '12px 0 0 12px'
  },
  name: {
    fontWeight: '400',
    color: '#111',
    fontSize: '25px',
    lineHeight: '30px',
    marginBottom: '12px'
  },
  text: {
    fontSize: '16px',
    lineHeight: '25px',
    color: '#111',
    marginBottom: '12px'
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
