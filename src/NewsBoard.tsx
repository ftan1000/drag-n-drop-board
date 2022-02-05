import React, {useState} from "react";
import {DragDropContext, DropResult} from "react-beautiful-dnd";

import {initialData} from "./initial-data";
import BoardColumn from "./BoardColumn";
import styled from "styled-components";

// interface Item {
//     id: string;
//     imageId?: number;
//     content: string;
// }

const Columns = styled.div`
    display: flex;
`;

function NewsBoard() {

    const [data, setData] = useState(initialData);

    function onDragEnd(result: DropResult) {
        const {destination, source, draggableId} = result;

        if (!destination)
            return;

        // Did the location of the location change?
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        // @ts-ignore
        const start = data.columns[source.droppableId];
        // @ts-ignore
        const finish = data.columns[destination.droppableId];

        if (start === finish){
            // @ts-ignore
            const column = data.columns[source.droppableId];
            const newItemIds = Array.from(column.itemIds);
            newItemIds.splice(source.index, 1);
            newItemIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...column,
                itemIds: newItemIds,
            }

            const newData = {
                ...data,
                columns: {
                    ...data.columns,
                    [newColumn.id]: newColumn,
                },
            }
            setData(newData);
            return;
        } else {
            // Moving from one column to another
            const startItemIds = Array.from(start.itemIds);
            startItemIds.splice(source.index, 1);
            const newStart = {
                ...start,
                itemIds: startItemIds
            }

            const finishItemIds = Array.from(finish.itemIds);
            finishItemIds.splice(destination.index, 0, draggableId);
            const newFinish = {
                ...finish,
                itemIds: finishItemIds
            };

            const newState = {
                ...data,
                columns: {
                    ...data.columns,
                    [newStart.id]: newStart,
                    [newFinish.id]: newFinish
                },
            }
            setData(newState);
        }
    }

    return (
        <Columns>
            <DragDropContext onDragEnd={onDragEnd}>
                {data.columnOrder.map(columnId => {
                    // @ts-ignore
                    const column = data.columns[columnId];
                    // @ts-ignore
                    const items = column.itemIds.map((itemId: string) => data.items[itemId]);
                    return <BoardColumn key={column.id} column={column} items={items}/>
                })}
            </DragDropContext>
        </Columns>
    );
}

export default NewsBoard;