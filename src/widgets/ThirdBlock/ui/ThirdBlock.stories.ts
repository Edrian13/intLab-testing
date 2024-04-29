import type { Meta, StoryObj } from '@storybook/react';
import { ThirdBlock } from './ThirdBlock';

const meta = {
  title: 'widgets/ThirdBlock',
  component: ThirdBlock,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'dark', value: '#333333' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  argTypes: {},
} satisfies Meta<typeof ThirdBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReviewStory: Story = {
  args: {},
};
