import React from 'react';
import styles from './Loader.module.scss';

export const Loader = React.memo(() => {
  return (
    <div className={styles.ldsSpiner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});
