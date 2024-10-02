import { Box, Flex, Heading, Image, Input, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

import AlstarIcon from '@/assets/white-logo.png';
import Instagram from '@/assets/svg/Instagram';
import Facebook from '@/assets/svg/Facebook';
import Telegram from '@/assets/svg/Telegram';
import YouTube from '@/assets/svg/YouTube';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <Box {...css.footer}>
      <Box className="container-mix">
        <Flex justifyContent={'space-between'}>
          <Box>
            <Image {...css.icon} src={AlstarIcon.src} alt="AlstarIcon" />
            <Text {...css.text}>
              ALSTAR — это бренд алюминиевых композитных панелей (ACP) типа PE, FR-B1, FR-A2,
              принадлежащий “GOLDEN HAPPINESS” LLC.
            </Text>
          </Box>
          <Box {...css.list}>
            <Link {...css.link} href="/">
              Why ALSTAR
            </Link>
            <Link {...css.link} href="/">
              Products
            </Link>
            <Link href="/inspirations">
              <Text {...css.link}>{t('nav6')}</Text>
            </Link>
            <Link href="/colour">
              <Text {...css.link}>{t('nav7')}</Text>
            </Link>
            <Link href="/service-download">
              <Text {...css.link}>{t('nav8')}</Text>
            </Link>
            <Link href="/">
              <Text {...css.link}>{t('nav9')}</Text>
            </Link>
          </Box>
          <Box {...css.list}>
            <Link href="/about-alstar">
              <Text {...css.link}>{t('nav1')}</Text>
            </Link>
            <Link href="/career">
              <Text {...css.link}>{t('nav2')}</Text>
            </Link>
            <Link href="/contact">
              <Text {...css.link}>{t('nav3')}</Text>
            </Link>
          </Box>
          <Box {...css.list}>
            <Heading {...css.title}>NEWSLETTER SUBSCRIPTION</Heading>
            <Input {...css.input} type="email" placeholder="e-mail" />
            <Flex mt={'12px'} gap={'12px'}>
              <Link href="https://www.instagram.com/alstar.uz">
                <Instagram width={'25px'} height={'25px'} />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61553429155300">
                <Facebook width={'25px'} height={'25px'} />
              </Link>
              <Link href="https://t.me/AlstarDibond">
                <Telegram width={'25px'} height={'25px'} />
              </Link>
              <Link href="https://www.youtube.com/@uzbekistanalstar4978">
                <YouTube width={'25px'} height={'25px'} />
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;

const css = {
  footer: {
    background: '#111111',
    padding: '48px 0'
  },
  icon: {
    width: '200px'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  link: {
    color: 'white',
    fontSize: '16px',
    lineHeight: '25px'
  },
  text: {
    color: 'white',
    fontSize: '14px',
    lineHeight: '25px',
    marginTop: '12px',
    width: '300px'
  },
  title: {
    color: 'white',
    fontSize: '16px',
    lineHeight: '25px',
    fontWeight: '400'
  },
  input: {
    padding: '8px 12px',
    outline: 'none',

    _placeholder: {
      fontSize: '16px'
    }
  }
};
