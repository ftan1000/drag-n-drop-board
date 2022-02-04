import React, {useState} from "react";
import {
    DragDropContext,
    DropResult
} from "react-beautiful-dnd";

import {initialData} from "./initial-data";
import BoardColumn from "./BoardColumn";

// interface Item {
//     id: string;
//     imageId?: number;
//     content: string;
// }

function NewsBoard() {

    const [data, setData] = useState(initialData);

    function onDragEnd(result: DropResult) {
        console.log('DropResult', result);
        const { destination, source, draggableId } = result;

        if (!destination)
            return;

        // Did the location of the location change?
        if (destination.droppableId === source.droppableId && destination.index === source.index){
            return;
        }

        // @ts-ignore
        const column = data.columns[source.droppableId];
        console.log('column', column);

        const newItemIds = Array.from(column.itemIds);
        console.log('newItemIds', newItemIds);
        newItemIds.splice(source.index, 1);
        newItemIds.splice(destination.index, 0, draggableId);
        console.log('newItemIds after', newItemIds);

        const newColumn = {
            ...column,
            itemIds: newItemIds,
        }
        console.log('newColumn', newColumn);

        const newData = {
            ...data,
            columns: {
                ...data.columns,
                [newColumn.id]: newColumn,
            },
        }
        console.log('newData', newData);
        setData(newData);
    }

    return (
        <div>
            <div style={{display: "flex"}}>
                <DragDropContext onDragEnd={onDragEnd}>
                { data.columnOrder.map(columnId => {
                    // @ts-ignore
                    const column = data.columns[columnId];
                    // @ts-ignore
                    const items = column.itemIds.map((itemId: string) => data.items[itemId]);
                    console.log('items', items);
                    return <BoardColumn key={column.id} column={column} items={items} />
                })}
                </DragDropContext>
            </div>
        </div>
    );
}

export default NewsBoard;