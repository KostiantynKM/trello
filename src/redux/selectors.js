import { createSelector } from 'reselect';


export const columnOrderSelector = (state) => state.columnOrder;

export const columnSelector = (state,props) => state.columns[props.columnId];
export const taskSelector = (state,props) => state.tasks[props.taskId];

// export const finalColumnSelector = createSelector(
//     tasksSelector,
//     columnsSelector,
//     columnOrderSelector,
//     (tasks, columns, columnOrder) => {
//        return columnOrder.map((columnId, index) => {
//             console.log('update')
//             const column = columns[columnId];
//             const tasksMap = column.taskIds.map(taskId => tasks[taskId]);
//             return {column,tasksMap};
//         })
// });