const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'task-1-content',title:'task-1-title' },
        'task-2': { id: 'task-2', content: 'task-2-content', title:'task-2-title'},
        'task-3': { id: 'task-3', content: 'task-3-content', title:'task-3-title' },
        'task-4': { id: 'task-4', content: 'task-4-content', title:'task-4-title' },
        'task-5': { id: 'task-5', content: 'task-5-content', title:'task-5-title' },
        'task-6': { id: 'task-6', content: 'task-6-content', title:'task-6-title' },
        'task-7': { id: 'task-7', content: 'task-7-content', title:'task-7-title' },
        'task-8': { id: 'task-8', content: 'task-8-content', title:'task-8-title' },
        'task-9': { id: 'task-9', content: 'task-9-content', title:'task-9-title' },
        'task-10': { id: 'task-10', content: 'task-10-content', title:'task-10-title' },
        'task-11': { id: 'task-11', content: 'task-11-content', title:'task-11-title' },
        'task-12': { id: 'task-12', content: 'task-12-content', title:'task-12-title' },
        'task-13': { id: 'task-13', content: 'task-13-content', title:'task-13-title' },
        'task-14': { id: 'task-14', content: 'task-14-content', title:'task-14-title' },
        'task-15': { id: 'task-15', content: 'task-15-content', title:'task-15-title' },
        'task-16': { id: 'task-16', content: 'task-16-content', title:'task-16-title' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Backlog',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'column-2': {
            id: 'column-2',
            title: 'ToDo',
            taskIds: ['task-5', 'task-6', 'task-7', 'task-8'],
        },
        'column-3': {
            id: 'column-3',
            title: 'InProgress',
            taskIds: ['task-9', 'task-10', 'task-11', 'task-12'],
        },
        'column-4': {
            id: 'column-4',
            title: 'Done',
            taskIds: ['task-13', 'task-14', 'task-15', 'task-16'],
        }
    },
    // Facilitate reordering of the columns
    columnOrder: [ 'column-1','column-2','column-3','column-4']
};

export default initialData;