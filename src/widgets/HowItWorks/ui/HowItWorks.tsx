import React from 'react';
import styles from './HowItWorks.module.scss';
import { ReactComponent as Waiting } from '../../../shared/assets/howItWorksSVGs/waiting.svg';
import { ReactComponent as Truck } from '../../../shared/assets/howItWorksSVGs/deliveryTruck.svg';
import { ReactComponent as Bags } from '../../../shared/assets/howItWorksSVGs/moneyBags.svg';
import { ReactComponent as Secure } from '../../../shared/assets/howItWorksSVGs/secure.svg';

export const HowItWorks = React.memo(() => {
  return (
    <div className={styles.howItWorks}>
      <div className={styles.container}>
        <h2>Как это Работает</h2>
        <div className={styles.blocksContainer}>
          <div className={styles.infoBlock}>
            <Waiting className={styles.infoImg} />
            <div>
              <h3>Прочитайте задание внимательно</h3>
              <p>Думаю у тебя не займет это больше двух-трех минут</p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <Truck className={styles.infoImg} />
            <div>
              <h3>Изучи весь макет заранее</h3>
              <p>
                Подумай как это будет работать на разных разрешениях и при
                скролле
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <Bags className={styles.infoImg} />
            <div>
              <h3>Сделай хорошо</h3>
              <p>Чтобы мы могли тебе доверить подобные задачи в будущем</p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <Secure className={styles.infoImg} />
            <div>
              <h3>Получи предложение</h3>
              <p>
                Ну тут все просто, не я придумал правила, но думаю так и будет
                {')))'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
