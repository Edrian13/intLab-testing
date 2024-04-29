import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { InformationBlock } from './InformationBlock';

const meta = {
  title: 'widgets/InformationBlock',
  component: InformationBlock,
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
} satisfies Meta<typeof InformationBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InformationBlockStory: Story = {
  args: {},
};
