import React from 'react';
import {Item} from "./types";
import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";
import NewsItem from "./NewsItem";

type DraggableItemProps = {
    key: string;
    draggableId?: string;
    index: number;
    item: Item;
}

const Container = styled.div`
    margin: 5px 25px;
    padding: 5px;
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
                    <NewsItem imageId={props.item.id} id={''+props.item.id} title={props.item.name}/>
                    {/*// {props.item.content}*/}
                </Container>
            )}
        </Draggable>
    );
}

export default DraggableItem;
