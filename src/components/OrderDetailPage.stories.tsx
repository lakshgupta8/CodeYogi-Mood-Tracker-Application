import type { Meta, StoryObj } from '@storybook/react';
import OrderDetailPage from './OrderDetailPage';
import { RouterDecorator } from '../stories/RouterDecorator';

const meta: Meta<typeof OrderDetailPage> = {
  title: 'Pages/OrderDetailPage',
  component: OrderDetailPage,
  decorators: [RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof OrderDetailPage>;

export const Loading: Story = {
  args: {
    orderId: 1,
    order: undefined,
    products: [],
    orderDetailLoaded: () => { },
  } as any,
};

export const WithData: Story = {
  args: {
    orderId: 1,
    order: {
      id: 1,
      total: 239.9,
      totalProducts: 2,
      totalQuantity: 3,
      discountedTotal: 210.5,
    } as any,
    products: [
      { id: 101, title: 'Item A', price: 50.0 },
      { id: 102, title: 'Item B', price: 189.9 },
    ] as any,
    orderDetailLoaded: () => { },
  },
};
