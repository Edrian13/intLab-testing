import React, { ReactNode, useCallback } from 'react';
import styles from './Menu.module.scss';
import { LogoComponent } from '../../../shared/ui/Logo';
import { RxCross2 } from 'react-icons/rx';

import { LogoTheme } from '../../../shared/ui/Logo/ui/LogoComponent';
import { classNames } from '../../../shared/lib/classNames/classNames';

interface IMenuProps {
  onClick: () => void;
  children: ReactNode;
}

export const Menu: React.FC<IMenuProps> = React.memo((props) => {
  const { onClick, children } = props;

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={classNames(styles.menu)}>
      <div className={classNames(styles.header)}>
        <LogoComponent onClick={handleClick} logoTheme={LogoTheme.BLACK} />
        <RxCross2 className={styles.closeIcon} onClick={onClick} />
      </div>
      {children}
    </div>
  );
});
