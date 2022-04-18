import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/useTypedSelector";

import fetchData from "./state/CoinsThunk";
import { ITableItem } from "./interfaces/TableItem";
import { Coins } from "./pages/Coins";

function App() {
    const dispatch = useAppDispatch();
    const data: ITableItem[] = useAppSelector((state) => state.coins.data);
    useEffect(() => {
        dispatch(
            fetchData(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            )
        );
    }, [dispatch]);

    return (
        <>
            <Coins data={data} />
        </>
    );
}

export default App;
