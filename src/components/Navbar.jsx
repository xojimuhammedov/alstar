import { Box, Flex, Image, Link as Alink, Text } from '@chakra-ui/react';
import React from 'react';
import AlstarIcon from '@/assets/logo.png';
import Link from 'next/link';

function Navbar() {
  return (
    <Box {...css.nav}>
      <Box className="container">
        <Flex {...css.top}>
          <Link href="/about-alstar">
            <Text {...css.links}>About ALSTAR™</Text>
          </Link>
          <Link href="/career">
            <Text {...css.links}>Career</Text>
          </Link>
          <Link href="/contact">
            <Text {...css.links}>Contact</Text>
          </Link>
        </Flex>
        <Flex {...css.list}>
          <Link href="/">
            <Image {...css.icon} src={AlstarIcon.src} alt="AlstarIcon" />
          </Link>
          <Flex {...css.item}>
            <Link href="/product">
              <Text {...css.link}>
                Why Alstar
              </Text>
            </Link>
            <Alink {...css.link} href="/">
              Products
            </Alink>
            <Link href="/inspirations">
              <Text {...css.link}>Inspirations</Text>
            </Link>
            <Link href="/colour">
              <Text {...css.link}>Colours & Samples</Text>
            </Link>
            <Link href="/service-download">
              <Text {...css.link}>Service & Downloads</Text>
            </Link>
            <Alink {...css.link} href="/">
              News
            </Alink>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  icon: {
    width: '200px'
  },
  nav: {
    padding: '24px 0'
  },
  list: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  item: {
    alignItems: 'center',
    gap: '24px'
  },
  link: {
    color: '#111',
    fontSize: '18px',
    lineHeight: '24px',
    textTransform: 'uppercase',
    fontWeight: '500',
    transition: '0.3s',

    _hover: {
      color: '#EE1818'
    }
  },
  top: {
    justifyContent: 'flex-end',
    gap: '12px',
    padding: '16px 0'
  },
  links: {
    color: '#5F5E5E',
    fontSize: '14px',
    lineHeight: '20px',
    textTransform: 'uppercase',
    fontWeight: '500',
    transition: '0.3s',

    _hover: {
      color: '#EE1818'
    }
  }
};
