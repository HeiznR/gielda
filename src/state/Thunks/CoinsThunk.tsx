import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ITableItem } from "../../interfaces/TableItem";
import { setData } from "../Reducers/CoinsReducer";

export const fetchCoinData = createAsyncThunk(
    "handleCoin/fetchCoinData",
    async function (url: string, { dispatch }) {
        try {
            const response = await axios.get<ITableItem[]>(url);
            dispatch(setData(response.data));
            return;
        } catch (error) {
            //dispatch(fetchDataError("city not found"));
            return;
        }
    }
);

export default fetchCoinData;
