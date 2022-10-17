import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "@hooks/redux";
import {getUsers} from "@redux/reducers/UserSlice";
import {useGetUsersQuery} from "@redux/reducers/UserReducer";

const Users: FC = () => {

    const {data: users} = useGetUsersQuery('')

    return (
        <div>
            {users && <ul>
                {
                    // @ts-ignore
                    users.map(({_id: id, email}) => {

                        return <li key={id}>
                            {email}
                        </li>
                    })
                }
            </ul>}
        </div>
    );
};

export default Users