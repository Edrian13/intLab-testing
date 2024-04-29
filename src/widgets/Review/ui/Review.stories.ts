import type { Meta, StoryObj } from '@storybook/react';
import { Review } from './Review';

const meta = {
  title: 'widgets/Review',
  component: Review,
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
} satisfies Meta<typeof Review>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReviewStory: Story = {
  args: {
    review: {
      name: 'Morgoth Bauglir',
      city: 'Angband',
      image:
        'https://i.pinimg.com/736x/b2/ee/88/b2ee88f92fce1f03bfedd275259e4bf3.jpg',
      comment:
        '«То были (эалар) духи, что сначала служили ему во дни его славы, и стали похожи на него во дни его падения: с сердцами из пламени, но окутанные тьмой, и ужас несся, опережая их; у них были огненные бичи. Позже нолдор называли их балрогами».',
      id: 0,
    },
  },
};
