import React from 'react';
import styles from './LogoComponent.module.scss';
import { ReactComponent as Logo } from '../../../assets/LogoImg.svg';
import { ReactComponent as BlackLogo } from '../../../assets/BlackLogo.svg';
import { classNames } from '../../../lib/classNames/classNames';

export enum LogoTheme {
  BLACK = 'black',
  PRIMARY = 'primary',
}

interface LogoProps {
  logoTheme: LogoTheme;
  onClick?: () => void;
}

export const LogoComponent: React.FC<LogoProps> = React.memo(
  ({ logoTheme, onClick }) => {
    return logoTheme === LogoTheme.PRIMARY ? (
      <Logo className={classNames(styles.logo, {}, [])} />
    ) : (
      <BlackLogo
        onClick={onClick}
        className={classNames(styles.logo, {}, [styles.blackLogo])}
      />
    );
  }
);
