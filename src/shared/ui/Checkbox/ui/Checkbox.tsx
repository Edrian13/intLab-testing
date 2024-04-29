import React, { ChangeEvent } from 'react';
import styles from './Checkbox.module.scss';

interface ICheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<ICheckboxProps> = React.memo((props) => {
  const { label, checked, onChange } = props;

  return (
    <div className={styles.checkbox}>
      <label>
        <input onChange={onChange} checked={checked} type="checkbox" />
        {label}
      </label>
    </div>
  );
});
