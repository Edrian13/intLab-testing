import type { Meta, StoryObj } from '@storybook/react';
import { LogoComponent, LogoTheme } from './LogoComponent';

const meta = {
  title: 'shared/Logo',
  component: LogoComponent,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333333' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  argTypes: {},
} satisfies Meta<typeof LogoComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoPrimary: Story = {
  args: {
    logoTheme: LogoTheme.PRIMARY,
  },
};

export const LogoBlack: Story = {
  args: {
    logoTheme: LogoTheme.BLACK,
  },
};
