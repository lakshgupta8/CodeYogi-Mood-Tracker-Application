import type { Meta, StoryObj } from '@storybook/react';
import OrderListItem from './OrderListItem';
import { RouterDecorator } from '../stories/RouterDecorator';

const meta: Meta<typeof OrderListItem> = {
  title: 'Components/OrderListItem',
  component: OrderListItem,
  decorators: [RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof OrderListItem>;

export const Default: Story = {
  args: {
    order: {
      id: 1,
      total: 239.9,
      totalProducts: 5,
    } as any,
  },
};

export const LargeOrder: Story = {
  args: {
    order: {
      id: 2,
      total: 12599.99,
      totalProducts: 42,
    } as any,
  },
};
