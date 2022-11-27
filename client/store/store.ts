import {Action, ThunkAction, configureStore, combineReducers} from '@reduxjs/toolkit'
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from '../features/authSlice'
import hotelReducer from '../features/hotelSlice'
import appReducer from '../features/appSlice'
<<<<<<< HEAD
import {authApi, hotelApi, roomApi, uploadApi, userApi} from '../services'
=======
import { authApi, hotelApi, roomApi, userApi, bookingApi } from '../services'
>>>>>>> main

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const rootReducers = combineReducers({
    auth: authReducer,
    hotel: hotelReducer,
    app: appReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    reducer: {
        persistedReducer,
        [authApi.reducerPath]: authApi.reducer,
        [hotelApi.reducerPath]: hotelApi.reducer,
        [roomApi.reducerPath]: roomApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
<<<<<<< HEAD
        [uploadApi.reducerPath]: uploadApi.reducer
=======
        [bookingApi.reducerPath]: bookingApi.reducer
>>>>>>> main
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }).concat(authApi.middleware, hotelApi.middleware, roomApi.middleware, bookingApi.middleware)
})
export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
