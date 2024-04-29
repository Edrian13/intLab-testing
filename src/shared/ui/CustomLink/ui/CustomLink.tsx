import React, { ReactNode } from 'react';
import styles from './CustomLink.module.scss';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { classNames } from '../../../lib/classNames/classNames';
import { FaChevronRight } from 'react-icons/fa6';

export enum LinkTheme {
  PRIMARY = 'primary',
  BURGER = 'burger',
  SCROLL = 'scroll',
}

interface ICustomLinkProps {
  to: string;
  children: ReactNode;
  linkTheme: LinkTheme;
  spy?: boolean;
  smooth?: boolean;
  duration?: number;
}

export const CustomLink: React.FC<ICustomLinkProps> = React.memo((props) => {
  const { to, children, linkTheme } = props;

  if (linkTheme === LinkTheme.BURGER) {
    return (
      <ScrollLink className={styles[linkTheme]} to={to}>
        <div className={styles.cardLink}>
          {children}
          <FaChevronRight className={styles.arrowRight} />
        </div>
      </ScrollLink>
    );
  }

  if (linkTheme === LinkTheme.SCROLL) {
    return (
      <ScrollLink className={classNames('', {}, [styles[linkTheme]])} to={to}>
        {children}
      </ScrollLink>
    );
  }

  return (
    <NavLink className={classNames('', {}, [styles[linkTheme]])} to={to}>
      {children}
    </NavLink>
  );
});
