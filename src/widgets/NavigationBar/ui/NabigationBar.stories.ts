import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBar, NavigationTheme } from './NavigationBar';

const meta = {
  title: 'widgets/NavigationBar',
  component: NavigationBar,
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
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigationBarStory: Story = {
  args: {
    navTheme: NavigationTheme.PRIMARY,
  },
};
