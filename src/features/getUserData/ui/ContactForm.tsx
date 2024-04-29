import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import styles from './ContactForm.module.scss';
import { CustomInput } from '../../../shared/ui/CustomInput';
import { ButtonTheme, CustomButton } from '../../../shared/ui/CustomButton';
import { Checkbox } from '../../../shared/ui/Checkbox';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../app/providers/StoreProvider/storeHooks';
import { sendUserData } from '../model/services/sendUserData';
import uuid from 'react-uuid';
import { actions } from '../model/slice/userSlice';

export const ContactForm = React.memo(() => {
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);

  const handleCheckboxChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
    },
    []
  );

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      const userData = {
        id: uuid(),
        username: user.username,
        phoneNumber: user.phoneNumber,
      };

      dispatch(sendUserData(userData));
    },
    [dispatch, user]
  );

  const handleUsernameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(actions.setUsername(e.target.value));
    },
    [dispatch]
  );

  const handlePhoneChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(actions.setPhoneNumber(e.target.value));
    },
    [dispatch]
  );

  return (
    <div className={styles.contactForm}>
      <h2>Отправь Форму</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <CustomInput
            onChange={handleUsernameChange}
            value={user.username}
            type="text"
            placeholder="Имя"
          />
          <CustomInput
            onChange={handlePhoneChange}
            value={user.phoneNumber}
            type="tel"
            placeholder="Телефон"
            maxLength={11}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Checkbox
            onChange={handleCheckboxChange}
            checked={isChecked}
            label="Согласен, отказываюсь"
          />
          <CustomButton
            type="submit"
            disabled={!isChecked}
            buttonType={ButtonTheme.BLUE_BUTTON}
          >
            Отправить
          </CustomButton>
        </div>
      </form>
    </div>
  );
});
