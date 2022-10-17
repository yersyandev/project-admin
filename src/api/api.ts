import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const API_URL = `${process.env.REACT_APP_API_URL}/api`

export const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
        headers.set('authorization', `Bearer ${localStorage.getItem('token')}`)
        return headers
    },
})