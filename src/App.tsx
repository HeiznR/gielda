import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { useAppDispatch, useAppSelector } from "./hooks/useTypedSelector";
import fetchCoinData from "./state/Thunks/CoinsThunk";
import fetchNewsData from "./state/Thunks/NewsThunk";
import { ITableItem } from "./interfaces/TableItem";
import { INewsItem } from "./interfaces/NewsItem";
import { Coins } from "./pages/Coins";
import { News } from "./pages/News";

function App() {
    const dispatch = useAppDispatch();
    const data: ITableItem[] = useAppSelector((state) => state.coins.data);
    const newsData: INewsItem[] = useAppSelector((state) => state.news.data);
    useEffect(() => {
        dispatch(
            fetchCoinData(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            )
        );
        dispatch(fetchNewsData());
    }, [dispatch]);
    return (
        <>
            <Routes>
                <Route path="/coins" element={<Coins data={data} />} />
                <Route path="/news" element={<News data={newsData} />} />
            </Routes>
        </>
    );
}

export default App;
