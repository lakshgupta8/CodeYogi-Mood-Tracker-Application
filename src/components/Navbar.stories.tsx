import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};

export const OnProductsPage: Story = {
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/products']}>
                <Story />
            </MemoryRouter>
        ),
    ],
};

export const OnOrdersPage: Story = {
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/orders']}>
                <Story />
            </MemoryRouter>
        ),
    ],
};
