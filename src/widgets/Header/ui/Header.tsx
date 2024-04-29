import React from 'react';
import styles from './Header.module.scss';
import { LogoComponent } from '../../../shared/ui/Logo';
import { NavigationBar } from '../../NavigationBar';
import { NavigationTheme } from '../../NavigationBar/ui/NavigationBar';
import { LogoTheme } from '../../../shared/ui/Logo/ui/LogoComponent';
import { BurgerMenu } from '../../BurgerMenu';

export const Header = React.memo(() => {
  return (
    <header className={styles.header}>
      <LogoComponent logoTheme={LogoTheme.PRIMARY} />
      <NavigationBar navTheme={NavigationTheme.PRIMARY} />
      <BurgerMenu />
    </header>
  );
});
