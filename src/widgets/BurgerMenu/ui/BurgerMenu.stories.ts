import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BurgerMenu } from './BurgerMenu';

const meta = {
  title: 'widgets/BurgerMenu',
  component: BurgerMenu,
  parameters: {
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
} satisfies Meta<typeof BurgerMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BurgerMenuStory: Story = {
  args: {},
};
