import React from 'react';
import styles from './PromoBlock.module.scss';
import { ButtonTheme, CustomButton } from '../../../shared/ui/CustomButton';

export const PromoBlock = React.memo(() => {
  return (
    <div className={styles.promoBlock}>
      <div className={styles.promoBlockInfo}>
        <h1>Говорят, никогда не поздно сменить профессию</h1>
        <p>Я сделаю крутое тестовое задание и у меня получится {':)'}</p>
        <CustomButton buttonType={ButtonTheme.DEFAULT}>
          Проще простого!
        </CustomButton>
      </div>
    </div>
  );
});
