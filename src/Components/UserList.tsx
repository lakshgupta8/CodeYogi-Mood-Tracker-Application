import { type FC, memo } from 'react';
import type { User } from '../types';
import UserRow from './UserRow';

export interface UserListProps {
    users: User[];
}

const UserList: FC<UserListProps> = ({ users = [] }) => (
    <div className="flex flex-col gap-1">
        {users.length === 0 ? (
            <div className="p-8 text-gray-400 text-center">No users found.</div>
        ) : (
            users.map((user) => (
                <UserRow key={user.id} user={user} />
            ))
        )}
    </div>
);

export default memo(UserList);