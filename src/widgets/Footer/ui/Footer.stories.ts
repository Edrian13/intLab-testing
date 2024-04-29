import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Footer } from './Footer';

const meta = {
  title: 'widgets/Footer',
  component: Footer,
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
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterStory: Story = {
  args: {},
};
