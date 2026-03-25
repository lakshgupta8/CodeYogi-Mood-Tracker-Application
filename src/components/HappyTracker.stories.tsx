import type { Meta, StoryObj } from '@storybook/react';
import HappyTracker from './HappyTracker';
import { ReduxDecorator } from '../stories/ReduxDecorator';

const meta: Meta<typeof HappyTracker> = {
  title: 'Components/HappyTracker',
  component: HappyTracker,
};

export default meta;
type Story = StoryObj<typeof HappyTracker>;

export const Empty: Story = {
  decorators: [ReduxDecorator({
    happy: { happyMoments: [] }
  } as any)],
};

export const WithItems: Story = {
  decorators: [ReduxDecorator({
    happy: {
      happyMoments: [
        { intensity: 5, when: new Date() },
        { intensity: 8, when: new Date(Date.now() - 3600000) },
      ]
    }
  } as any)],
};
