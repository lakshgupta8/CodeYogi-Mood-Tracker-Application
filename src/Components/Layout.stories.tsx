import type { Meta, StoryObj } from '@storybook/react';
import Layout from './Layout';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    children: (
        <div className="bg-white p-8 rounded shadow text-center border">
            <h1 className="text-2xl font-bold">Main Content Area</h1>
            <p className="mt-4 text-gray-600">This is how the content fits inside the layout container.</p>
        </div>
    ),
  },
};

export const LargeDynamicContent: Story = {
    args: {
        children: (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="bg-indigo-50 border-2 border-indigo-200 p-12 flex items-center justify-center font-bold text-indigo-700 rounded-lg">
                        Block {i + 1}
                    </div>
                ))}
            </div>
        )
    }
}
