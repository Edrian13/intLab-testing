import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ButtonTheme, CustomButton } from './CustomButton';

const meta = {
  title: 'shared/CustomButton',
  component: CustomButton,
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
  args: { onClick: fn() },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    children: 'Default Button',
    buttonType: ButtonTheme.DEFAULT,
  },
};

export const BlueButton: Story = {
  args: {
    children: 'Blue Button',
    buttonType: ButtonTheme.BLUE_BUTTON,
  },
};
