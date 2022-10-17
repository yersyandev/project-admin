import React, {memo} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import {HOME_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE, USERS_PAGE} from "@utils/urls";
import SignIn from "@components/SignIn";
import SignUp from "@components/SignUp";
import Home from "@components/Home";
import {useAppSelector} from "@hooks/redux";
import Users from "@components/Users";


const publicPages = [
    {path: SIGN_IN_PAGE, element: <SignIn/>},
    {path: SIGN_UP_PAGE, element: <SignUp/>},
    {path: '*', element: <Navigate to={SIGN_IN_PAGE} replace={true}/>}
]

const privatePages = [
    {path: HOME_PAGE, element: <Home/>},
    {path: USERS_PAGE, element: <Users/>},
    {path: '*', element: <Navigate to={HOME_PAGE} replace={true}/>}
]


const Pages = memo(() => {

    const isAuth = useAppSelector(state => state.userReducer.isAuth)

    return useRoutes(isAuth ? privatePages : publicPages)
});

export default Pages