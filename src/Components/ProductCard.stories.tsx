import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    product: {
      id: 1,
      title: 'Essence Mascara Lash Princess',
      price: 9.99,
      description: 'The Essence Mascara Lash Princess is a popular mascara that provides volume and length.',
      category: 'beauty',
      rating: 4.94,
      stock: 5,
      brand: 'Essence',
      discountPercentage: 7.17,
    } as any,
  },
};

export const LuxuryItem: Story = {
  args: {
    product: {
      id: 2,
      title: 'Premium Gold Watch',
      price: 2499.00,
    } as any,
  },
};
