import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as R from "ramda";
import { ITableItem } from "../interfaces/TableItem";
interface IProps {
    data: ITableItem[];
}
const initialState: IProps = {
    data: [],
};

const handleCoin = createSlice({
    name: "handleTimer",
    initialState,
    reducers: {
        setData(state, action: PayloadAction<ITableItem[]>) {
            R.map((data: ITableItem) => {
                return state.data.push(data);
            }, action.payload);
        },
    },
});

export default handleCoin.reducer;
export const { setData } = handleCoin.actions;
