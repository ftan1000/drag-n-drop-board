
export const getItemStyle = (draggableStyle: any, isDragging: boolean): {} => ({
    // boxShadow: '0px 0px 5px 1px #CCCCCC',
    borderRadius: '1px',
    backgroundColor: '#FFF',
    height: 60,
    width: 450,
    userSelect: "none",
    padding: 5,
    margin: `0 0 0 0`,

    background: "",

    // styles we need to apply on draggables
    ...draggableStyle
});

export const getListStyle = (isDraggingOver: boolean): {} => ({
    background: isDraggingOver ? "lightblue" : "#EFEFEF",
    padding: 5,
    width: 500,
    height: 600,
    border: '2px solid #EEE'
});