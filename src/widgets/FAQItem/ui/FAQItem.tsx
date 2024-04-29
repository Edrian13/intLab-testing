import React, { useState } from 'react';
import { LiaPlusCircleSolid } from 'react-icons/lia';
import { RxCrossCircled } from 'react-icons/rx';
import styles from './FAQItem.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { IFaq } from '../../../entities/faq/model/slice/faqSlice';

interface IFAQItem {
  faq: IFaq;
}

export const FAQItem: React.FC<IFAQItem> = React.memo(({ faq }) => {
  const { answer, question } = faq;

  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      className={styles.FAQItem}
      onClick={() => setShowAnswer((prev) => !prev)}
    >
      <div className={styles.FAQItemContainer}>
        <div className={styles.question}>
          <p>{question}</p>
          {showAnswer ? (
            <RxCrossCircled className={styles.collapsibleContent} />
          ) : (
            <LiaPlusCircleSolid className={styles.collapsibleContent} />
          )}
        </div>

        <div
          className={classNames(styles.answer, {
            [styles.answerVisible]: showAnswer,
          })}
        >
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
});
