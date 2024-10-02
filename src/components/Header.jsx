import { Box, Heading, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import CarouselOne from '@/assets/slider1.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
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
        <SwiperSlide>
          <Box width={'100%'}>
            <Image {...css.image} src={CarouselOne.src} alt="CarouselOne" />
          </Box>
          <Box {...css.box}>
            <Heading {...css.title}>PERFORMANCE POWER FOR YOUR FAÇADE</Heading>
            <Text {...css.text}>
              More quality, more stability, more choice, lower costs: find out why ALPOLIC is the
              best choice for you and your project!
            </Text>
            <Link {...css.link} href="/">
              {t('Learn More')}
            </Link>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box width={'100%'}>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-1920x/01/981-ALP_Perf_Power_Produkt.webp?v=3-0'
              }
              alt="CarouselOne"
            />
          </Box>
          <Box {...css.box}>
            <Heading {...css.title}>PRODUCT PERFORMANCE</Heading>
            <Text {...css.text}>
              The special composition of the core and our unique fusion process make ALSTAR™
              composite panels so superior.
            </Text>
            <Link {...css.link} href="/">
              {t('Learn More')}
            </Link>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box width={'100%'}>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-1920x/03/983-ALP_Perf_Power_Verarbeitung.webp?v=3-0'
              }
              alt="CarouselOne"
            />
          </Box>
          <Box {...css.box}>
            <Heading {...css.title}>PROCESSING PERFORMANCE</Heading>
            <Text {...css.text}>
              The unique material composition of ALSTAR guarantees precise edging, routing and
              cutting - with clean cutting edges.
            </Text>
            <Link {...css.link} href="/">
              {t('Learn More')}
            </Link>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box width={'100%'}>
            <Image
              {...css.image}
              src={
                'https://www.alpolic.eu/uploads/media/fullsize-1920x/09/979-ALP_Perf_Power_Installation.webp?v=3-0'
              }
              alt="CarouselOne"
            />
          </Box>
          <Box {...css.box}>
            <Heading {...css.title}>INSTALLATION PERFORMANCE</Heading>
            <Text {...css.text}>
              With ALSTAR you save up to 50 % on the substructure and installation time without
              compromising the stability of the façade!
            </Text>
            <Link {...css.link} href="/">
              {t('Learn More')}
            </Link>
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
