import React, {FC, useEffect} from 'react';
import Dashboard from "@components/Dashboard";
import {checkAuth} from "@redux/reducers/UserSlice";
import {useAppDispatch} from "@hooks/redux";

const App: FC = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        if(localStorage.getItem('token')){
            dispatch(checkAuth())
        }
    }, [])

    return (
        <div>
            <Dashboard/>
        </div>
    );
}

export default App;
