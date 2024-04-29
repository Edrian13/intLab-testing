import React from 'react';
import styles from './ThirdBlock.module.scss';
import { ReactComponent as ManImg } from '../../../shared/assets/thirdBlock/man.svg';
import { ReactComponent as TruckImg } from '../../../shared/assets/thirdBlock/truck.svg';

export const ThirdBlock = React.memo(() => {
  return (
    <div className={styles.thirdBlock}>
      <div className={styles.thirdBlockContainer}>
        <div className={styles.info}>
          <h3>Круто, ты дошел до третьего блока</h3>
          <p>
            63% опрошенных пользовались кредитами из-за того, что не могли
            покрыть непредвиденные расходы свыше 15 000 ₽.
            <br />
            <br />
            Доступ к заработанным деньгам помогает отказаться от кредитов и
            экономить деньги на процентах и штрафах.
          </p>
        </div>
        <div>
          <div className={styles.imagesBlock}>
            <ManImg className={styles.manImage} />
            <TruckImg className={styles.truckImage} />
          </div>
        </div>
      </div>
    </div>
  );
});
