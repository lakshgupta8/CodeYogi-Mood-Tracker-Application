import type { Meta, StoryObj } from '@storybook/react';
import HappyIncrementor from './HappyIncrementor';
import { ReduxDecorator } from '../Stories/ReduxDecorator';

const meta: Meta<typeof HappyIncrementor> = {
  title: 'Components/HappyIncrementor',
  component: HappyIncrementor,
  decorators: [ReduxDecorator()],
};

export default meta;
type Story = StoryObj<typeof HappyIncrementor>;

export const Default: Story = {};
