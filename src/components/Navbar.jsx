import { Box, Flex, Image, Text, Menu, MenuItem, MenuButton, MenuList } from '@chakra-ui/react';
import React from 'react';
import AlstarIcon from '@/assets/logo.png';
import Link from 'next/link';
import Language from './Language';

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
          <Language />
        </Flex>
        <Flex {...css.list}>
          <Link href="/">
            <Image {...css.icon} src={AlstarIcon.src} alt="AlstarIcon" />
          </Link>
          <Flex {...css.item}>
            <Link href="/product">
              <Text {...css.link}>Why Alstar</Text>
            </Link>
            <Menu isLazy>
              <MenuButton {...css.link}>Products</MenuButton>
              <MenuList {...css.menuItem} zIndex={'999'}>
                <MenuItem>
                  <Link href={'/alstar-product/1'}>ALSTAR™ NC/A1</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={'/alstar-product/2'}>ALSTAR™ A2</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={'/alstar-product/3'}>ALSTAR™\FR</Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Link href="/inspirations">
              <Text {...css.link}>Inspirations</Text>
            </Link>
            <Link href="/colour">
              <Text {...css.link}>Colours & Samples</Text>
            </Link>
            <Link href="/service-download">
              <Text {...css.link}>Service & Downloads</Text>
            </Link>
            <Link href="/">
              <Text {...css.link}>News</Text>
            </Link>
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
    fontWeight: '400',
    transition: '0.3s',

    _hover: {
      color: '#EE1818'
    }
  },
  top: {
    justifyContent: 'flex-end',
    gap: '12px',
    padding: '16px 0',
    alignItems:"center"
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
  },
  menuItem: {
    top: '50px',
    minWidth: '120px'
  }
};
