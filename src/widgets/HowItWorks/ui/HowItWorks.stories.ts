import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { HowItWorks } from './HowItWorks';

const meta = {
  title: 'widgets/HowItWorks',
  component: HowItWorks,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'dark', value: '#333333' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof HowItWorks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HowItWorksStory: Story = {
  args: {},
};
