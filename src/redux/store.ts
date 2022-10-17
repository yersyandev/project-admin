import {configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import {userApi} from "@redux/reducers/UserReducer";

export const store = configureStore({
    reducer: {
        userReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(userApi.middleware);
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch