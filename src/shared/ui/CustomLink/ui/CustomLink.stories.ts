import type { Meta, StoryObj } from '@storybook/react';
import { CustomLink, LinkTheme } from './CustomLink';

const meta = {
  title: 'shared/CustomLink',
  component: CustomLink,
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
} satisfies Meta<typeof CustomLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BurgerLink: Story = {
  args: {
    to: '',
    children: 'Burger Link',
    linkTheme: LinkTheme.BURGER,
  },
};

export const PrimaryLink: Story = {
  args: {
    to: '',
    children: 'Primary Link',
    linkTheme: LinkTheme.PRIMARY,
  },
};

export const ScrollLink: Story = {
  args: {
    to: '',
    children: 'Scroll Link',
    linkTheme: LinkTheme.SCROLL,
  },
};
