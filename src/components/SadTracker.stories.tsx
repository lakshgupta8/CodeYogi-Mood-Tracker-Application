import type { Meta, StoryObj } from '@storybook/react';
import SadTracker from './SadTracker';
import { ReduxDecorator } from '../stories/ReduxDecorator';

const meta: Meta<typeof SadTracker> = {
  title: 'Components/SadTracker',
  component: SadTracker,
};

export default meta;
type Story = StoryObj<typeof SadTracker>;

export const Empty: Story = {
  decorators: [ReduxDecorator({
    sad: { sadMoments: [] }
  } as any)],
};

export const WithItems: Story = {
  decorators: [ReduxDecorator({
    sad: {
      sadMoments: [
        { intensity: 3, when: new Date() },
        { intensity: 9, when: new Date(Date.now() - 7200000) },
      ]
    }
  } as any)],
};
