import { Box, Flex, Image, Text, Menu, MenuItem, MenuButton, MenuList } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import AlstarIcon from '@/assets/logo.png';
import Link from 'next/link';
import Language from './Language';
import axios from 'axios';
import { BASE_URL } from '@/api';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [products, setProducts] = useState();
  const [projects, setProjects] = useState();
  const { i18n } = useTranslation();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => setProducts(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/projects`)
      .then((res) => setProjects(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);
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
            {/* <Link href="/product">
              <Text {...css.link}>Why Alstar</Text>
            </Link> */}
            <Menu isLazy>
              <MenuButton {...css.link}>Why Alstar</MenuButton>
              <MenuList {...css.menuItem} zIndex={'999'}>
                {projects?.map((item, index) => (
                  <MenuItem textTransform={'uppercase'} key={index}>
                    <Link href={`/product/${item?.id}`}>{item[`name_${i18n?.language}`]}</Link>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu isLazy>
              <MenuButton {...css.link}>Products</MenuButton>
              <MenuList {...css.menuItem} zIndex={'999'}>
                {products?.map((item, index) => (
                  <MenuItem key={index}>
                    <Link href={`/alstar-product/${item?.id}`}>
                      {item[`name_${i18n?.language}`]}
                    </Link>
                  </MenuItem>
                ))}
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
    alignItems: 'center'
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
