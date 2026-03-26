import type { Meta, StoryObj } from '@storybook/react';
import UserRow from './UserRow';
import type { User } from '../types';

const mockUser: User = {
    id: 1,
    firstName: "Emily",
    lastName: "Johnson",
    age: 28,
    gender: "female",
    email: "emily.johnson@x.dummyjson.com",
    phone: "+81 965-431-3024",
    username: "emilyj",
    password: "emilyjpassword",
    birthDate: "1996-05-30",
    address: {
        address: "626 Main St",
        city: "Phoenix",
        state: "AZ",
        country: "USA"
    },
    role: "admin"
};

const meta: Meta<typeof UserRow> = {
  title: 'Components/UserRow',
  component: UserRow,
  argTypes: {
    user: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof UserRow>;

export const Default: Story = {
  args: {
    user: mockUser,
  },
};

export const AdminUser: Story = {
    args: {
        user: { ...mockUser, firstName: "Admin", lastName: "Master", role: "admin", username: "superadmin" }
    }
}

export const RegularUser: Story = {
    args: {
        user: { ...mockUser, firstName: "John", lastName: "Smith", role: "user", username: "jsmith" }
    }
}
