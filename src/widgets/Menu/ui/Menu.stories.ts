import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Menu } from './Menu';

const meta = {
  title: 'widgets/Menu',
  component: Menu,
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
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuStory: Story = {
  args: {
    onClick: () => {},
    children: 'Content menu',
  },
};
