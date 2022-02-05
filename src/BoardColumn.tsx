import React from 'react';
import './App.css';
import DraggableItem from "./DraggableItem";
import styled from "styled-components";
import {Item} from "./types";
import {Droppable} from "react-beautiful-dnd";

const Container = styled.div`
    margin: 8px;
    border: 1px solid #AAA;
    border-radius: 2px;    
    background-color: #EFEFEF;
    padding: 2px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
`;
const Title = styled.div`
    padding: 8px;
`;
const NewsList = styled.h3`
    padding: 8px;
    transition: background-color 0.2s ease;
    flex-grow: 1;
    min-height: 100px;
`;

type BoardColumnProps = {
    column: any;
    items: Item[];
}

function BoardColumn(props: BoardColumnProps) {
    return (
        <Container>
            <Title>{props.column.title}</Title>`
            <Droppable droppableId={props.column.id} key={props.column.id}>
                {(provided) => (
                    <NewsList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {props.items.map((item, index) => <DraggableItem key={'' + item.id} item={item} index={index}/>)}
                        {provided.placeholder}
                    </NewsList>
                )}
            </Droppable>
        </Container>
    );
}

export default BoardColumn;
