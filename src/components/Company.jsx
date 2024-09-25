import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

import CarouselOne from '@/assets/slider1.jpg';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

function Company() {
  return (
    <Box className='company' p={'50px 0'} bg={'#111'}>
      <Swiper
        pagination={{
          dynamicBullets: true
        }}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.button-next-slide',
          prevEl: '.button-prev-slide'
        }}
        loop
        className="mySwiper">
        <SwiperSlide>
          <Box className="container">
            <Flex justifyContent={'space-between'}>
              <Box pt={'36px'}>
                <Heading {...css.title}>Unlimited versatile façade design</Heading>
                <Text {...css.text}>ALSTAR:First choice for demanding projects worldwide.</Text>
                <Link href="/" {...css.link}>
                  Learn More
                </Link>
              </Box>
              <Image {...css.image} src={CarouselOne.src} alt="Company" />
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="container">
            <Flex pb={'36px'} justifyContent={'space-between'}>
              <Box pt={'48px'}>
                <Heading {...css.title}>Unlimited versatile façade design</Heading>
                <Text {...css.text}>ALSTAR:First choice for demanding projects worldwide.</Text>
                <Link href="/" {...css.link}>
                  Learn More
                </Link>
              </Box>
              <Image {...css.image} src={CarouselOne.src} alt="Company" />
            </Flex>
          </Box>
        </SwiperSlide>
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

export default Company;

const css = {
  link: {
    backgroundColor: '#fff',
    color: '#111',
    padding: '8px 15px',
    fontWeight: '500',
    fontSize: '14px',
    transition: '0.3s all',
    borderRadius: '12px',

    _hover: {
      background: '#C22329',
      color: '#fff'
    }
  },
  image: {
    width: '650px',
    height: '300px',
    objectFit: 'cover'
  },
  title: {
    fontSize: '30px',
    lineHeight: '35px',
    fontWeight: '200',
    marginBottom: '12px',
    color: '#fff'
  },
  text: {
    fontSize: '14px',
    color: '#fff',
    lineHeight: '22px',
    marginBottom: '24px'
  }
};
