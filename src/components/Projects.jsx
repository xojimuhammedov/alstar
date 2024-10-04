import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import CarouselOne from '@/assets/slider1.jpg';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Navigation } from 'swiper/modules';

import ImageOne from '@/assets/image1.jpg';
import ImageTwo from '@/assets/image2.jpg';
import ImageThree from '@/assets/image3.jpg';
import ImageFour from '@/assets/image4.jpg';
import ImageFive from '@/assets/image5.jpg';
import ImageSix from '@/assets/image6.jpg';

function Projects() {
  return (
    <Box p={'36px 0'}>
      <Heading {...css.title}>All over the country: Our References</Heading>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.button-next-slide',
          prevEl: '.button-prev-slide'
        }}
        loop
        watchSlidesProgress={true}
        slidesPerView={3}
        className="mySwiper">
        <SwiperSlide>
          <Image {...css.image} src={ImageOne.src} alt="CarouselOne" />
        </SwiperSlide>
        <SwiperSlide>
          <Image {...css.image} src={ImageTwo.src} alt="CarouselOne" />
        </SwiperSlide>
        <SwiperSlide>
          <Image {...css.image} src={ImageThree.src} alt="CarouselOne" />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            {...css.image}
            src={ImageFour.src
            }
            alt="CarouselOne"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image {...css.image} src={ImageSix.src} alt="CarouselOne" />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ImageFive.src
            }
            alt="CarouselOne"
            {...css.image}
          />
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

export default Projects;

const css = {
  image: {
    height: '250px',
    objectFit: 'cover',
    width: '100%'
  },
  title: {
    fontSize: '34px',
    lineHeight: '39px',
    fontWeight: '400',
    color: '#111',
    textAlign: 'center',
    marginBottom: '24px'
  }
};
