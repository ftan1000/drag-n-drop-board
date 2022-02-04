import React, {useState} from "react";

import {initialData} from "./initial-data";
import BoardColumn from "./BoardColumn";

function NewsBoard() {

    const [data, setData] = useState(initialData);

    return (
        <div>
            <div style={{display: "flex"}}>
                { data.columnOrder.map(columnId => {
                    // @ts-ignore
                    const column = data.columns[columnId];
                    // @ts-ignore
                    const items = column.itemIds.map((itemId: string) => data.items[itemId]);
                    return <BoardColumn key={column.id} column={column} items={items} />
                })}
            </div>
        </div>
    );
}

export default NewsBoard;