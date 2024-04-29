import React, { useEffect } from 'react';
import styles from './FAQList.module.scss';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../app/providers/StoreProvider/storeHooks';
import { getFaqItems } from '../../model/services/getFaqItems';
import { FAQItem } from '../../../../widgets/FAQItem';

export const FAQList = React.memo(() => {
  const dispatch = useAppDispatch();
  const faq = useAppSelector((state) => state.faqReducer.faq);

  useEffect(() => {
    dispatch(getFaqItems());
  }, [dispatch]);

  return (
    <div className={styles.FAQList}>
      <h2>Вопросы и ответы</h2>
      <div className={styles.FAQContainer}>
        {faq.map((faqContent) => (
          <FAQItem key={faqContent.id} faq={faqContent} />
        ))}
      </div>
    </div>
  );
});
