import React from 'react';
import {Item} from "./types";

type DraggableItemProps = {
    key: string;
    draggableId?: string;
    index?: number;
    item: Item;
}
function DraggableItem(props: DraggableItemProps) {
    return (
        <div>{props.item.content}</div>
    );
}

export default DraggableItem;
