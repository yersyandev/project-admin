import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUser} from "@models/interfaces";
import {API_URL} from "@api/index";
import {baseQuery} from "@api/api";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery,
    endpoints: (build) => ({
        getUsers: build.query<IUser[], string>({
            query: () => ({
                url: '/auth/users'
            })
        }),
        login: build.mutation<IUser, IUser>({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            })
        })
    })
})

export const {useGetUsersQuery, useLoginMutation} = userApi