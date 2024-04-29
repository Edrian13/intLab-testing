import React, { HTMLAttributes, ReactNode } from 'react';
import styles from './CustomButton.module.scss';
import { classNames } from '../../../lib/classNames/classNames';

export enum ButtonTheme {
  DEFAULT = 'defaultButton',
  BLUE_BUTTON = 'blueButton',
}

interface ICustomButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonType: ButtonTheme;
  className?: string;
  disabled?: boolean;
  type?: 'submit';
}

export const CustomButton: React.FC<ICustomButtonProps> = React.memo(
  (props) => {
    const { children, buttonType, disabled = false, className = '' } = props;

    return (
      <button
        disabled={disabled}
        className={classNames(
          styles.customBtn,
          { [styles.buttonDisable]: disabled },
          [styles[buttonType], className]
        )}
      >
        {children}
      </button>
    );
  }
);
