import produce from 'immer';
import initialData from "../../components/lists/fixtures";
import {DELETE_TASK,ADD_TASK,CHANGE_TASK} from '../constants';

export default produce((draft = initialData.tasks , action) => {
  const { type, payload, taskId} = action;

  switch (type) {
    case DELETE_TASK: {
      delete draft[payload.id];
      break;
    }
    case ADD_TASK: {
      draft[taskId]=payload.task;
      draft[taskId].id=taskId;
      break;
    }
    case CHANGE_TASK: {
      draft[payload.task.id]=payload.task;
      break;
    }
    default:
      return draft;
  }
});
