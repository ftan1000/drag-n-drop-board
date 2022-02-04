import React from 'react';
import {Item} from "./types";
import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";

type DraggableItemProps = {
    key: string;
    draggableId?: string;
    index: number;
    item: Item;
}

const Container = styled.div`
    margin: 5px;
    border: 1px solid #DDD;
    border-radius: 1px;    
    background-color: #FFF;
    padding: 15px;
    width: 450px;
    
    height: 60px,
    userSelect: "none",
    padding: grid,
`;

function DraggableItem(props: DraggableItemProps) {
    return (
        <Draggable key={props.index} draggableId={props.item.name} index={props.index}>
            {(provided) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {props.item.content}
                </Container>
            )}
        </Draggable>
    );
}

export default DraggableItem;
