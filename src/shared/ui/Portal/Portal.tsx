import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal: React.FC<IPortal> = ({
  children,
  element = document.body,
}) => {
  return createPortal(children, element);
};
