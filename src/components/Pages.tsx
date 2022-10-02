import React from 'react';
import {Routes, Route, Navigate,} from "react-router-dom";
import {HOME_PAGE, privateRoutes, publicRoutes, SIGN_IN_PAGE} from "@helpers/routes";

const Pages = () => {

    const isAuth = false

    return (
        <Routes>
            {
                isAuth
                    ? privateRoutes.map(({path, element}) => {
                        return <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    })
                    : publicRoutes.map(({path, element}) => {
                        return <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    })
            }
            <Route
                path={'*'}
                element={<Navigate to={isAuth ? HOME_PAGE : SIGN_IN_PAGE}/>}
            />
        </Routes>
    );
};

export default Pages;