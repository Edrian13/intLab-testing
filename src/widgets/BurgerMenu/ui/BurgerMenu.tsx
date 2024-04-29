import React, { useCallback, useState } from 'react';
import styles from './BurgerMenu.module.scss';
import { ReactComponent as BurgerMenuIcon } from '../../../shared/assets/BurgerMenu.svg';
import { Menu } from '../../Menu';
import { NavigationBar } from '../../NavigationBar';
import { NavigationTheme } from '../../NavigationBar/ui/NavigationBar';

export const BurgerMenu = React.memo(() => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenuActive = useCallback(() => {
    setMenuActive((prev) => !prev);
  }, []);

  return (
    <div className={styles.burgerMenu}>
      {menuActive ? (
        <Menu onClick={toggleMenuActive}>
          <NavigationBar navTheme={NavigationTheme.BURGER} />
        </Menu>
      ) : (
        <BurgerMenuIcon onClick={toggleMenuActive} />
      )}
    </div>
  );
});
