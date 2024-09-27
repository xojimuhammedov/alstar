import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import CarouselOne from '@/assets/slider1.jpg';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Navigation } from 'swiper/modules';

function Projects() {
  return (
    <Box p={'36px 0'}>
      <Heading {...css.title}>All over the world: Our References</Heading>
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
          <Image
            {...css.image}
            src={
              'https://www.alpolic.eu/uploads/media/slider-750x/01/191-Kachel_fr_GUERALLAR_750x400.webp?v=3-0'
            }
            alt="CarouselOne"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            {...css.image}
            src={
              'https://www.alpolic.eu/uploads/media/slider-750x/05/165-La%20Salle%20College_Swan%20Valley_WA_Australia.webp?v=5-0'
            }
            alt="CarouselOne"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            {...css.image}
            src={
              'https://www.alpolic.eu/uploads/media/slider-750x/02/1012-ALP_STI_ASBL_Kockelscheuer.webp?v=1-0'
            }
            alt="CarouselOne"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            {...css.image}
            src={
              'https://www.alpolic.eu/uploads/media/slider-750x/03/973-ALP_TrillaintProjectUzbekistan_750x400.webp?v=1-0'
            }
            alt="CarouselOne"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image {...css.image} src={CarouselOne.src} alt="CarouselOne" />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={
              'https://www.alpolic.eu/uploads/media/slider-750x/04/974-Tashkent_City_Mall_750x400_n_ret.webp?v=3-0'
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
