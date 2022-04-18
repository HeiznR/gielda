import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { INewsItem } from "../../interfaces/NewsItem";
import { setData } from "../Reducers/NewsReducer";

const options: any = {
    method: "GET",
    url: "https://mboum-finance.p.rapidapi.com/ne/news/",
    params: { symbol: "AAPL,MSFT" },
    headers: {
        "X-RapidAPI-Host": "mboum-finance.p.rapidapi.com",
        "X-RapidAPI-Key": "62092b40e9msh8879656c05f721dp16fd72jsndda11c682955",
    },
};

export const fetchNewsData = createAsyncThunk(
    "handleNews/fetchNewsData",
    async function (_, { dispatch }) {
        try {
            const response = await axios.request<INewsItem[]>(options);
            dispatch(setData(response.data));
            return;
        } catch (error) {
            //dispatch(fetchDataError("city not found"));
            return;
        }
    }
);

export default fetchNewsData;
