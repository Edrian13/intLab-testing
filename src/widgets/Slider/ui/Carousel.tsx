import React, { ReactNode } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ICarouselProps {
  children: ReactNode;
  settings: any;
}

export const Carousel: React.FC<ICarouselProps> = React.memo((props) => {
  const { children, settings } = props;

  return <Slider {...settings}>{children}</Slider>;
});
