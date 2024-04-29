import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'shared/Checkbox',
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckedChechbox: Story = {
  args: {
    label: 'Default checkbox',
    checked: true,
    onChange: () => {},
  },
};

export const UnCheckedCheckbox: Story = {
  args: {
    label: 'Defaul checkbox',
    checked: false,
    onChange: () => {},
  },
};
