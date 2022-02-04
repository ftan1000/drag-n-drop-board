import React from 'react';
import './App.css';
import DraggableItem from "./DraggableItem";
import styled from "styled-components";
import {Item} from "./types";

const Container = styled.div`
    margin: 8px;
    border: 1px solid #EEE;
    border-radius: 2px;
`;
const Title = styled.h3`
    padding: 8px;
`;
const NewsList = styled.h3`
    padding: 8px;
`;

type BoardColumnProps = {
    column: any;
    items: Item[];
}

function BoardColumn(props: BoardColumnProps) {
    return (
        <Container>
            <Title>{props.column.title}</Title>
            <NewsList>
                {props.items.map(item =>  <DraggableItem key={'item-'+item.id} item={item}/>)}
            </NewsList>
        </Container>
    );
}

export default BoardColumn;
