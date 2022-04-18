import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import handleCoin from "./Reducers/CoinsReducer";
import handleNews from "./Reducers/NewsReducer";
const rootReducer = combineReducers({
    coins: handleCoin,
    news: handleNews,
});
export type rootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
