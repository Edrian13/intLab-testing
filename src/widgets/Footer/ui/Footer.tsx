import React from 'react';
import styles from './Footer.module.scss';

export const Footer = React.memo(() => {
  return (
    <footer className={styles.footer}>
      <div>
        <span>© 2021 Лаборатория интернет</span>
      </div>
    </footer>
  );
});
