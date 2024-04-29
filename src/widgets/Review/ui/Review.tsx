import React from 'react';
import styles from './Review.module.scss';
import { IReview } from '../../../entities/reviews/model/slice/reviewsSlice';

interface IReviewProps {
  review: IReview;
}

export const Review: React.FC<IReviewProps> = React.memo(({ review }) => {
  const { name, city, image, comment } = review;

  return (
    <div className={styles.review}>
      <div className={styles.reviewContainer}>
        <div className={styles.authorInfo}>
          <div className={styles.auhtorImage}>
            <img alt="authorImage" src={image} />
          </div>
          <div>
            <h6>{name}</h6>
            <p>{city}</p>
          </div>
        </div>
        <p className={styles.textReview}>{comment}</p>
      </div>
    </div>
  );
});
