import SignIn from "@components/SignIn";
import SignUp from "@components/SignUp";
import Home from "@components/Home";

export const HOME_PAGE = '/'
export const SIGN_IN_PAGE = '/sign_in'
export const SIGN_UP_PAGE = '/sign_up'

export const publicRoutes = [
    {
        path: SIGN_IN_PAGE,
        element: <SignIn/>,
        name: "Sign in"
    },
    {
        path: SIGN_UP_PAGE,
        element: <SignUp/>,
        name: "Sign up"
    },
]

export const privateRoutes = [
    {
        path: HOME_PAGE,
        element: <Home/>,
        name: "Home"
    }
]