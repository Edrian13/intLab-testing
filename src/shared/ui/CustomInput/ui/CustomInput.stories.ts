import type { Meta, StoryObj } from '@storybook/react';
import { CustomInput } from './CustomInput';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'shared/CustomInput',
  component: CustomInput,
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
} satisfies Meta<typeof CustomInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    placeholder: 'Name',
    type: 'text',
    value: '',
    onChange: action('inputChange'),
  },
};
