import React, { useEffect } from 'react';
import styles from './ReviewList.module.scss';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../app/providers/StoreProvider/storeHooks';
import { getReviews } from '../../../model/services/getReviews';
import { Carousel } from '../../../../../widgets/Slider';
import { Review } from '../../../../../widgets/Review';

//Карусель плохо центрируется

export interface ISliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  centerMode?: boolean;
}

const sliderSettings = {
  dots: true,
  cenerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const ReviewsList = React.memo(() => {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector((state) => state.reviewsReducer.reviews);

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  return (
    <div className={styles.reviewsList}>
      <h2>Отзывы</h2>
      <div className={styles.reviewsContainer}>
        <Carousel settings={sliderSettings}>
          {reviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </Carousel>
      </div>
    </div>
  );
});
