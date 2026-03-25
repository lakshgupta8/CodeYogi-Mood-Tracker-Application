import type { Meta, StoryObj } from '@storybook/react';
import SadIncrementor from './SadIncrementor';
import { ReduxDecorator } from '../stories/ReduxDecorator';

const meta: Meta<typeof SadIncrementor> = {
  title: 'Components/SadIncrementor',
  component: SadIncrementor,
};

export default meta;
type Story = StoryObj<typeof SadIncrementor>;

export const Default: Story = {
  decorators: [ReduxDecorator()],
};
