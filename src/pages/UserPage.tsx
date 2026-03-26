import { type FC, memo, useEffect } from 'react';
import UserList from "../components/UserList";
import { connect } from 'react-redux';
import type { State } from '../store';
import { fetchUsersSelector } from '../selectors/user';
import { fetchUsersRequestAction } from '../actions/user';
import type { User } from '../types';


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
            <h1 className="text-3xl font-extrabold mb-8 text-gray-900 border-b pb-4">Our Users</h1>
            <UserList users={users} />
        </div>
    );
};

const mapStateToProps = (state: State) => ({
    users: fetchUsersSelector(state),
});

const mapDispatchToProps = {
    getUsers: fetchUsersRequestAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(UserPage));