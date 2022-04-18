import React, { FC, useEffect, useState } from "react";
import * as R from "ramda";
import { TableComponent } from "../components/TableItem/TableComponent";
import { ITableItem } from "../interfaces/TableItem";
import "./coin.css";

interface IListPage {
    data: ITableItem[];
}

export const Coins: FC<IListPage> = ({ data }) => {
    const [listData, setListData] = useState<ITableItem[]>([]);
    const DataFiltering = (val: string) => {
        setListData(R.filter(R.where({ id: R.includes(val) }), data));
    };
    useEffect(() => {
        setListData(data);
    }, [data]);

    return (
        <div className="wrapper">
            <div className="coin">
                <div className="coin__input">
                    <input
                        className="coin__text"
                        type="text"
                        onChange={(e: any) => {
                            DataFiltering(e.target.value);
                        }}
                    />
                </div>
                <div className="coin__table">
                    <TableComponent data={listData} />
                </div>
            </div>
        </div>
    );
};
