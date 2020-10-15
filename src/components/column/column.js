import React,{ useState } from 'react';
import Task from "../task";
import styled from 'styled-components';
import {Droppable, Draggable} from "react-beautiful-dnd";
import TaskForm from "./task-form";
import {addTask} from "../../redux/actions";
import PropTypes from "prop-types";
import {createStructuredSelector} from "reselect";
import {columnSelector} from "../../redux/selectors";
import {connect} from "react-redux";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const TaskList = styled.div`
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'lightyellow' : 'inherit')};
  flex-grow: 1;
  min-height: 100px;
`;



const Column = ({
                    column,
                    index,
                }) => {
    const [value, setValue] = useState(false);
    return (
        <Draggable draggableId={column.id} index={index}>
            {provided => (
                <Col
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                ><Card>
                    <Card.Header as="h5" {...provided.dragHandleProps}>{column?.title}</Card.Header>
                    <Droppable droppableId={column.id} type="task">
                        {(provided, snapshot) =>
                            <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                            >

                                {column.taskIds.map((task, index) => (
                                           <Task key={task} index={index} taskId={task} column={column.id} />))}
                                {provided.placeholder}
                            </TaskList>
                        }
                    </Droppable>

                    {value ? (
                        <>
                            <TaskForm droggableId={column.id} action={addTask} resetFlag={true}/>
                            <Button size="sm" variant="outline-secondary" onClick={() => setValue(false)}>Close</Button>
                        </>
                    ) : (
                        <Form.Control type="text" placeholder="Add a card..." readOnly  onClick={() => setValue(true)}/>
                    )}
                </Card>
                </Col>
            )}
        </Draggable>
    );
}

Column.propTypes = {
    column: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        taskIds: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }),
    index: PropTypes.number.isRequired,
};
const mapStateToProps = createStructuredSelector({
    column: columnSelector,
});


export default connect(mapStateToProps)( React.memo(Column));

