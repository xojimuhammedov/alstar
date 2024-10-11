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
  const { t, i18n } = useTranslation();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => {
        const responseData = res?.data?.data;
        const firstElement = res?.data?.data?.splice(0, 1);
        responseData.push(firstElement[0]);
        setProducts(responseData);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/projects`)
      .then((res) => {
        const responseDataOne = res?.data?.data;
        setProjects(responseDataOne);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box {...css.nav}>
      <Box className="container">
        <Flex {...css.top}>
          <Link href="/about-alstar">
            <Text {...css.links}>{t('nav1')}</Text>
          </Link>
          <Link href="/career">
            <Text {...css.links}>{t('nav2')}</Text>
          </Link>
          <Link href="/contact">
            <Text {...css.links}>{t('nav3')}</Text>
          </Link>
          <Language />
        </Flex>
        <Flex {...css.list}>
          <Link href="/">
            <Image {...css.icon} src={AlstarIcon.src} alt="AlstarIcon" />
          </Link>
          <Flex {...css.item}>
            <div className="dropdown">
              <Text className="dropbtn" {...css.link}>
                {t('nav4')}
              </Text>
              <div className="dropdown-content">
                {projects?.map((item, index) => (
                  <Link key={index} href={`/product/${item?.id}`}>
                    {item[`name_${i18n?.language}`]}
                  </Link>
                ))}
              </div>
            </div>
            <div className="dropdown">
              <Text className="dropbtn" {...css.link}>
                {t('nav5')}
              </Text>
              <div className="dropdown-content dropdown-menu">
                {products?.map((item, index) => (
                  <Link key={index} href={`/alstar-product/${item?.id}`}>
                    {item[`name_${i18n?.language}`]}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/inspirations">
              <Text {...css.link}>{t('nav6')}</Text>
            </Link>
            <Link href="/colour">
              <Text {...css.link}>{t('nav7')}</Text>
            </Link>
            <Link href="/service-download">
              <Text {...css.link}>{t('nav8')}</Text>
            </Link>
            <Link href="/news">
              <Text {...css.link}>{t('nav9')}</Text>
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
    width: '250px'
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
