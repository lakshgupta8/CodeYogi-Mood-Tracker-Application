import type { Meta, StoryObj } from '@storybook/react';
import ProductListPage from './ProductListPage';
import { ReduxDecorator } from '../Stories/ReduxDecorator';
import { RouterDecorator } from '../Stories/RouterDecorator';

const meta: Meta<typeof ProductListPage> = {
  title: 'Pages/ProductListPage',
  component: ProductListPage,
  decorators: [RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof ProductListPage>;

export const Loading: Story = {
  decorators: [
    ReduxDecorator({
      products: { loading: true, products: {} }
    } as any),
  ],
};

export const WithProducts: Story = {
  decorators: [
    ReduxDecorator({
      products: {
        loading: false,
        products: {
          1: { id: 1, title: 'Essence Mascara', price: 9.99 },
          2: { id: 2, title: 'Gold Watch', price: 2499.00 },
          3: { id: 3, title: 'Wireless Headphones', price: 199.99 },
        }
      }
    } as any),
  ],
};
