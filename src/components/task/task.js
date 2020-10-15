import React, {useState} from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import {deleteTask} from "../../redux/actions";
import {connect} from "react-redux";
import TaskForm from "../column/task-form/task-form";
import {changeTask} from "../../redux/actions";
import PropTypes from "prop-types";
import {createStructuredSelector} from "reselect";
import {taskSelector} from "../../redux/selectors";
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';

const Container = styled.div`
 background-color: ${props => (props.isDragging ? 'rgb(56 132 208 / 0.5)' : 'white')};
 transition: background-color 0.2s ease;
`;

const  Task  = ({
                    task,
                    index,
                    column,
                    deleteTask,
                }) => {
    const [value, setValue] = useState({ edit: false, editable: false });


    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                <>
                    {!value.edit && !value.editable ? (
                            <Toast onClick={() => {setValue({...value, edit: true })}} onClose={() => deleteTask(task.id, index, column)}>
                                <Toast.Header>
                                    <div className="mr-auto">{task.title}</div>
                                </Toast.Header>

                            </Toast>
                    ):null}

                    {value.edit ? (
                        <Toast onClick={() => {setValue({...value, edit: false })}} onClose={() => deleteTask(task.id, index, column)}>
                            <Toast.Header>
                                <div className="mr-auto">{task.title}</div>
                            </Toast.Header>
                            <Toast.Body>
                                <div className="mr-auto">{task.content}</div>
                                <Button size="sm" variant="outline-secondary" onClick={(e) =>{e.stopPropagation(); setValue({...value, edit: false, editable: true})}}>Edit</Button>{' '}
                            </Toast.Body>
                        </Toast>
                    ):null}
                    {value.editable ? (
                        <>
                            <TaskForm def={task} action={changeTask} resetFlag={false}/>
                            <Button block size="sm" variant="outline-secondary" onClick={(e) => setValue({...value, edit: false, editable: false})}>Back</Button>
                        </>
                    ):null}
                    </>
                </Container>
            )}
        </Draggable>
    );
}

Task.propTypes = {
    task: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }),
    index: PropTypes.number.isRequired,
    column: PropTypes.string.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
    task: taskSelector,
});

const mapDispatchToProps = {
    deleteTask,
};
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Task));
