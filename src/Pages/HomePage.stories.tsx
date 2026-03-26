import type { Meta, StoryObj } from '@storybook/react';
import HomePage from './HomePage';
import { ReduxDecorator } from '../Stories/ReduxDecorator';
import { RouterDecorator } from '../Stories/RouterDecorator';

const meta: Meta<typeof HomePage> = {
  title: 'Pages/HomePage',
  component: HomePage,
  decorators: [RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
  decorators: [ReduxDecorator()],
};

export const WithMoodData: Story = {
  decorators: [
    ReduxDecorator({
      happy: {
        happyMoments: [
          { intensity: 7, when: new Date() },
        ]
      },
      sad: {
        sadMoments: [
          { intensity: 2, when: new Date() },
        ]
      }
    } as any),
  ],
};
