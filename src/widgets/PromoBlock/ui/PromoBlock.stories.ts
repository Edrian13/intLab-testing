import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PromoBlock } from './PromoBlock';

const meta = {
  title: 'widgets/PromoBlock',
  component: PromoBlock,
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
} satisfies Meta<typeof PromoBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigationBarStory: Story = {
  args: {},
};
