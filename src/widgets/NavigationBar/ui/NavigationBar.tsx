import React from 'react';
import styles from './NavigationBar.module.scss';
import { CustomLink } from '../../../shared/ui/CustomLink';
import { LinkTheme } from '../../../shared/ui/CustomLink/ui/CustomLink';

const SECTIONS = [
  { title: 'Как это работает', anchor: 'howItWorksID' },
  { title: '3-й блок', anchor: 'thirdBlockID' },
  { title: 'Вопросы и ответы', anchor: 'faqID' },
  { title: 'Форма', anchor: 'formID' },
];

export enum NavigationTheme {
  PRIMARY = 'primary',
  BURGER = 'burger',
}

interface INavigationProps {
  navTheme: NavigationTheme;
}

export const NavigationBar: React.FC<INavigationProps> = React.memo((props) => {
  const { navTheme } = props;

  if (navTheme === NavigationTheme.BURGER) {
    return (
      <nav className={styles.burgerNavigation}>
        {SECTIONS.map((section) => (
          <CustomLink
            key={section.anchor}
            linkTheme={LinkTheme.BURGER}
            to={section.anchor}
            smooth
          >
            {section.title}
          </CustomLink>
        ))}
      </nav>
    );
  }

  return (
    <nav className={styles.navigationBar}>
      {SECTIONS.map((section) => (
        <CustomLink
          spy
          key={section.anchor}
          to={section.anchor}
          smooth
          duration={500}
          linkTheme={LinkTheme.SCROLL}
        >
          {section.title}
        </CustomLink>
      ))}
    </nav>
  );
});
