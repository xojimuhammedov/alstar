import { Box, Heading, Image, Link, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import CarouselOne from '@/assets/slider1.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import axios from 'axios';
import { BASE_URL, FILE_URL } from '@/api';

function Header() {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState();

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
    <Box className="header" position={'relative'}>
      <Swiper
        pagination={{
          dynamicBullets: true
        }}
        navigation={{
          nextEl: '.button-next-slide',
          prevEl: '.button-prev-slide'
        }}
        loop
        modules={[Pagination, Navigation]}
        className="mySwiper">
        {projects?.map((item, index) => (
          <SwiperSlide key={index}>
            <Box width={'100%'}>
              <Image {...css.image} src={`${FILE_URL}/files/${item?.image}`} alt="CarouselOne" />
            </Box>
            <Box {...css.box}>
              <Heading {...css.title}>{item[`name_${i18n?.language}`]}</Heading>
              {/* <Text {...css.text}>
                More quality, more stability, more choice, lower costs: find out why ALPOLIC is the
                best choice for you and your project!
              </Text> */}
              <Link {...css.link} href={`/product/${item?.id}`}>
                {t('Learn More')}
              </Link>
            </Box>
          </SwiperSlide>
        ))}
        <div className="button-next-slide swiper-right next-button">
          <ChevronRightIcon fontSize={'34px'} />
        </div>
        <div className="button-prev-slide swiper-left next-button">
          <ChevronLeftIcon fontSize={'34px'} />
        </div>
      </Swiper>
    </Box>
  );
}

export default Header;

const css = {
  image: {
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%'
  },
  box: {
    position: 'absolute',
    top: '130px',
    left: '70px',
    width: '40%'
  },
  title: {
    fontSize: '30px',
    lineHeight: '35px',
    fontWeight: '200',
    width: '400px',
    marginBottom: '24px',
    color: '#111'
  },
  text: {
    fontSize: '14px',
    color: '#5F5E5E',
    lineHeight: '22px',
    width: '480px',
    marginBottom: '24px'
  },
  link: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '10px 20px',
    fontWeight: '500',
    fontSize: '16px',
    transition: '0.3s all',

    _hover: {
      background: '#C22329'
    }
  }
};
