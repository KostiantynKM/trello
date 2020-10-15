import produce from 'immer';
import initialData from "../../fixtures";
import {ADD_TASK, CHANGE_TASKIN, CHANGE_TASKOUT, DELETE_TASK} from '../constants';

export default produce((draft = initialData.columns , action) => {
  const { type, payload, taskId} = action;

  switch (type) {
    case CHANGE_TASKIN: {
      draft[payload.column].taskIds.splice(payload.start, 1);
      draft[payload.column].taskIds.splice(payload.end, 0, payload.id);
      break;
    }
    case CHANGE_TASKOUT: {
      draft[payload.columnStart].taskIds.splice(payload.start, 1);
      draft[payload.columnEnd].taskIds.splice(payload.end, 0, payload.id);
      break;
    }
    case DELETE_TASK: {
      draft[payload.columnId].taskIds.splice(payload.index, 1);
      break;
    }
    case ADD_TASK: {
      draft[payload.columnId].taskIds.push(taskId);
      break;
    }
    default:
      return draft;
  }
});
