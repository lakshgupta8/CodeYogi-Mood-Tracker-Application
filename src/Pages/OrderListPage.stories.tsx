import type { Meta, StoryObj } from '@storybook/react';
import OrderListPage from './OrderListPage';
import { ReduxDecorator } from '../Stories/ReduxDecorator';
import { RouterDecorator } from '../Stories/RouterDecorator';

const meta: Meta<typeof OrderListPage> = {
  title: 'Pages/OrderListPage',
  component: OrderListPage,
  decorators: [RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof OrderListPage>;

export const Loading: Story = {
  decorators: [
    ReduxDecorator({
      orders: { loading: true, orders: [] }
    } as any),
  ],
};

export const WithOrders: Story = {
  decorators: [
    ReduxDecorator({
      orders: {
        loading: false,
        orders: [
          { id: 1, total: 239.9, totalProducts: 5 },
          { id: 2, total: 12599.99, totalProducts: 42 },
        ]
      }
    } as any),
  ],
};
