import React, { ChangeEvent, HTMLAttributes } from 'react';
import styles from './CustomInput.module.scss';

interface ICustomInput extends HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
}

export const CustomInput: React.FC<ICustomInput> = (props) => {
  const { placeholder, value, onChange, ...restProps } = props;

  return (
    <input
      value={value}
      onChange={onChange}
      className={styles.customInput}
      placeholder={placeholder}
      {...restProps}
    />
  );
};
