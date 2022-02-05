import React, {useState} from "react";
import {
    DragDropContext,
    Draggable,
    DraggableLocation,
    DraggableProvided,
    DraggableStateSnapshot,
    Droppable,
    DropResult
} from "react-beautiful-dnd";
// import NewsItem from "./NewsItem";

interface Item {
    id: string;
    imageId: number;
    content: string;
}

interface IMoveResult {
    droppable: Item[];
    droppable2: Item[];
}

// fake data generator
const getItems = (count: number, offset: number = 0): Item[] => {
    return Array.from({length: count}, (v, k) => k).map(k => ({
        id: `${k + offset}`,
        imageId: 10 + k + offset,
        content: `Item ${k + offset}`
    }));
}

const reorder = (list: any[], startIndex: number, endIndex: number): Item[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source: Item[], destination: Item[], droppableSource: DraggableLocation, droppableDestination: DraggableLocation): IMoveResult | any => {

    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result: any = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};
const grid = 8;

const getItemStyle = (draggableStyle: any, isDragging: boolean): {} => ({
    // boxShadow: '0px 0px 5px 1px #CCCCCC',
    borderRadius: '1px',
    backgroundColor: '#FFF',
    height: 60,
    width: 450,
    userSelect: "none",
    padding: grid,
    margin: `0 0 0 0`,

    background: "",

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = (isDraggingOver: boolean): {} => ({
    background: isDraggingOver ? "lightblue" : "#EFEFEF",
    padding: grid,
    width: 450,
    border: '2px solid #EEE'
});

function Board() {
    const [state, setState] = useState([getItems(10), getItems(5, 10)]);

    function onDragEnd(result: DropResult) {
        const {source, destination} = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        if (sInd === dInd) {
            const items = reorder(state[sInd], source.index, destination.index);
            const newState = [...state];
            newState[sInd] = items;
            setState(newState);
        } else {
            const result = move(state[sInd], state[dInd], source, destination);
            const newState = [...state];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];


            setState(newState.filter(group => group.length));
        }
    }

    return (
        <div>
            <button
                type="button"
                onClick={() => {
                    setState([...state, []]);
                }}
            >
                Add new group
            </button>
            <button
                type="button"
                onClick={() => {
                    setState([...state, getItems(1)]);
                }}
            >
                Add new item
            </button>
            <div style={{display: "flex"}}>
                <DragDropContext onDragEnd={onDragEnd}>
                    {state.map((el, ind) => (
                        <Droppable

                            key={ind} droppableId={`${ind}`}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                    {...provided.droppableProps}
                                >
                                    {el.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(providedDraggable: DraggableProvided, snapshotDraggable: DraggableStateSnapshot) => (

                                                <div
                                                    ref={providedDraggable.innerRef}
                                                    {...providedDraggable.draggableProps}
                                                    {...providedDraggable.dragHandleProps}
                                                    style={getItemStyle(
                                                        providedDraggable.draggableProps.style,
                                                        snapshotDraggable.isDragging
                                                    )}
                                                >
                                                    {/*<NewsItem imageId={item.imageId} id={item.id} title={item.content}/>*/}
                                                </div>

                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </DragDropContext>
            </div>
        </div>
    );
}

export default Board;