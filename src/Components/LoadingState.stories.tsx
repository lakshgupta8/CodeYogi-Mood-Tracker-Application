import type { Meta, StoryObj } from '@storybook/react';
import LoadingState from './LoadingState';

const meta: Meta<typeof LoadingState> = {
  title: 'Components/LoadingState',
  component: LoadingState,
  argTypes: {
    isLoading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingState>;

export const Loading: Story = {
  args: {
    isLoading: true,
    children: <div>Data has loaded and is now visible!</div>,
  },
};

export const Loaded: Story = {
  args: {
    isLoading: false,
    children: (
      <div className="p-4 bg-green-100 text-green-800 rounded-md border border-green-200">
        Success! Data is displayed correctly.
      </div>
    ),
  },
};
