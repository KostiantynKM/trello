import {
  CHANGE_COLUMN,
  CHANGE_TASKIN,
  CHANGE_TASKOUT,
  DELETE_TASK,
  ADD_TASK,
  CHANGE_TASK,
} from './constants';

export const changeColumn = (start, end, id) => ({
  type: CHANGE_COLUMN,
  payload: { start, end, id},
});
export const changeTaskIn = (column, start, end, id) => ({
  type: CHANGE_TASKIN,
  payload: {column, start, end, id},
});
export const changeTaskOut = (columnStart, columnEnd, start, end, id) => ({
  type: CHANGE_TASKOUT,
  payload: {columnStart,columnEnd, start, end, id},
});
export const deleteTask = (id, index, columnId) => ({
  type: DELETE_TASK,
  payload: {id, columnId, index},
});
export const addTask = (task, columnId) => ({
  type: ADD_TASK,
  payload: {task, columnId},
  generateId: ['taskId'],
});
export const changeTask = (task, columnId) => ({
  type: CHANGE_TASK,
  payload: {task, columnId},
});
