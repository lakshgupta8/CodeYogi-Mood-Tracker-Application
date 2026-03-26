import { type FC, memo } from 'react';
import type { User } from '../types';

export interface UserRowProps {
    user: User;
}

const UserRow: FC<UserRowProps> = ({ user }) => {
    return (
        <div className="bg-gray-200 m-2 p-4 rounded-md font-medium text-lg shadow-sm flex flex-col md:flex-row items-center justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-2 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold uppercase border-2 border-white">
                    {user.firstName[0]}{user.lastName[0]}
                </div>
                <div>
                    <p className="font-bold text-black">{user.firstName} {user.lastName}</p>
                    <p className="text-xs text-gray-600">@{user.username}</p>
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-indigo-600">Email</span>
                    <span className="text-gray-800">{user.email}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-indigo-600">Location</span>
                    <span className="text-gray-800">{user.address.city}</span>
                </div>
            </div>
        </div>
    );
};

export default memo(UserRow);