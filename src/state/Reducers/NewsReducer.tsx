import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as R from "ramda";
import { INewsItem } from "../../interfaces/NewsItem";
interface IProps {
    data: INewsItem[];
}
const initialState: IProps = {
    data: [],
};

const handleNews = createSlice({
    name: "handleNews",
    initialState,
    reducers: {
        setData(state, action: PayloadAction<INewsItem[]>) {
            R.map((data: INewsItem) => {
                return state.data.push(data);
            }, action.payload);
        },
    },
});

export default handleNews.reducer;
export const { setData } = handleNews.actions;
