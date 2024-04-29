import type { Meta, StoryObj } from '@storybook/react';
import { FAQItem } from './FAQItem';

const meta = {
  title: 'widgets/FAQItem',
  component: FAQItem,
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
} satisfies Meta<typeof FAQItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FAQ: Story = {
  args: {
    faq: {
      id: 13,
      question: 'Что написано на кольце всевластия?',
      answer:
        'На кольце Всевластия была сделана потайная стихотворная надпись на языке Мордора эльфийской письменностью тенгвар Ash nazg durbatulûk, Ash nazg gimbatul, Ash nazg thrakatulûk, Agh burzum-ishi krimpatul.  В переводе на язык людей Арды надпись звучит так:  One Ring to rule them all, One Ring to find them, One Ring to bring them all And in the Darkness bind them.',
    },
  },
};
