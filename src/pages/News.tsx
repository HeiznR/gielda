import React, { useEffect, useState } from "react";
import { INewsItem } from "../interfaces/NewsItem";
import * as R from "ramda";
interface INewsProps {
    data: INewsItem[];
}
export const News = ({ data }: INewsProps) => {
    const [newsData, setNewsData] = useState<INewsItem[]>([]);
    useEffect(() => {
        setNewsData(data);
    }, [data]);
    // console.log(newsData);
    return (
        <div>
            {R.map((d: any) => {
                console.log(d);
                return <div key={d.guid}>{d[0].title}</div>;
            }, newsData)}
        </div>
    );
};
