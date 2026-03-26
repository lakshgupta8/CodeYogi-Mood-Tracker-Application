import type { Meta, StoryObj } from '@storybook/react';
import UserList from './UserList';
import type { User } from '../types';

const mockUsers: User[] = [
    {
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
        address: { address: "626 Main St", city: "Phoenix", state: "AZ", country: "USA" },
        role: "admin"
    },
    {
        id: 2,
        firstName: "Michael",
        lastName: "Williams",
        age: 35,
        gender: "male",
        email: "michael.williams@x.dummyjson.com",
        phone: "+44 1632 960812",
        username: "mwilliams",
        password: "mwpassword",
        birthDate: "1989-10-15",
        address: { address: "123 Oxford St", city: "London", state: "Greater London", country: "UK" },
        role: "user"
    },
     {
        id: 3,
        firstName: "Sophia",
        lastName: "Garcia",
        age: 24,
        gender: "female",
        email: "sophia.garcia@x.dummyjson.com",
        phone: "+34 91 123 45 67",
        username: "sgarcia",
        password: "sophiagpassword",
        birthDate: "2000-02-12",
        address: { address: "789 Calle Mayor", city: "Madrid", state: "Madrid", country: "Spain" },
        role: "moderator"
    }
];

const meta: Meta<typeof UserList> = {
  title: 'Components/UserList',
  component: UserList,
};

export default meta;
type Story = StoryObj<typeof UserList>;

export const Default: Story = {
  args: {
    users: mockUsers,
  },
};

export const Empty: Story = {
  args: {
    users: [],
  },
};

export const SingleUser: Story = {
    args: {
        users: [mockUsers[0]]
    }
}
