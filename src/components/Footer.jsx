import { Box, Flex, Heading, Image, Input, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

import AlstarIcon from '@/assets/white-icon.png';
import Instagram from '@/assets/svg/Instagram';
import Facebook from '@/assets/svg/Facebook';
import Telegram from '@/assets/svg/Telegram';
import YouTube from '@/assets/svg/YouTube';

function Footer() {
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
            <Link {...css.link} href="/">
              Inspirations
            </Link>
            <Link {...css.link} href="/">
              Colours & Samples
            </Link>
            <Link {...css.link} href="/">
              Service & Downloads
            </Link>
            <Link {...css.link} href="/">
              News
            </Link>
          </Box>
          <Box {...css.list}>
            <Link {...css.link} href="/">
              About ALSTAR™
            </Link>
            <Link {...css.link} href="/">
              Career
            </Link>
            <Link {...css.link} href="/">
              Contact
            </Link>
          </Box>
          <Box {...css.list}>
            <Heading {...css.title}>NEWSLETTER SUBSCRIPTION</Heading>
            <Input {...css.input} type="email" placeholder="e-mail" />
            <Flex mt={'12px'} gap={'12px'}>
              <Link href="/">
                <Instagram width={'25px'} height={'25px'} />
              </Link>
              <Link href="/">
                <Facebook width={'25px'} height={'25px'} />
              </Link>
              <Link href="/">
                <Telegram width={'25px'} height={'25px'} />
              </Link>
              <Link href="/">
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
