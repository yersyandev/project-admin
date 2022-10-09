import React, {memo} from 'react';
import {Navigate, useRoutes} from 'react-router-dom';
import {HOME_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE} from "@utils/urls";
import SignIn from "@components/SignIn";
import SignUp from "@components/SignUp";
import Home from "@components/Home";

const Pages = memo(() => {

    const isAuth = false

    const publicPages = [
        {path: SIGN_IN_PAGE, element: <SignIn/>},
        {path: SIGN_UP_PAGE, element: <SignUp/>,},
        {path: '*', element: <Navigate to={SIGN_IN_PAGE} replace={true}/>}
    ]

    const privatePages = [
        {path: HOME_PAGE, element: <Home/>,},
        {path: '*', element: <Navigate to={HOME_PAGE} replace={true}/>}
    ]

    return useRoutes(isAuth ? privatePages : publicPages)
});

export default Pages