import { type FC, memo, useEffect } from 'react';
import UserList from "../Components/UserList";
import { connect } from 'react-redux';
import { fetchUsersAction } from '../Actions/user';
import type { User } from '../types';
import type { State } from '../store';

interface UserPageProps {
    users: User[];
    getUsers: () => void;
}

const UserPage: FC<UserPageProps> = ({ users, getUsers }) => {
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <div className="py-8">
            <h1 className="mb-8 pb-4 border-b font-extrabold text-gray-900 text-3xl">Our Users</h1>
            <UserList users={users} />
        </div>
    );
};

const mapStateToProps = (state: State) => ({
    users: state.users,
});

const mapDispatchToProps = {
    getUsers: fetchUsersAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(UserPage));