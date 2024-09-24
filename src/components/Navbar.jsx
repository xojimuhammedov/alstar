import { Box, Flex, Image, Link as Alink } from '@chakra-ui/react';
import React from 'react';
import AlstarIcon from '@/assets/logo.png';
import Link from 'next/link';

function Navbar() {
  return (
    <Box {...css.nav}>
      <Box className="container">
        <Flex {...css.top}>
          <Link href="/about-alstar">
            <Alink {...css.links}>
              About ALSTAR™
            </Alink>
          </Link>
          <Alink {...css.links} href="/career">
            Career
          </Alink>
          <Alink {...css.links} href="/contact">
            Contact
          </Alink>
        </Flex>
        <Flex {...css.list}>
          <Link href="/">
            <Image {...css.icon} src={AlstarIcon.src} alt="AlstarIcon" />
          </Link>
          <Flex {...css.item}>
            <Alink {...css.link} href="/product">
              Why Alstar
            </Alink>
            <Alink {...css.link} href="/">
              Products
            </Alink>
            <Alink {...css.link} href="/inspirations">
              Inspirations
            </Alink>
            <Alink {...css.link} href="/colour">
              Colours & Samples
            </Alink>
            <Alink {...css.link} href="/">
              Service & Downloads
            </Alink>
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
