import produce from 'immer';
import initialData from "../../components/lists/fixtures";
import { CHANGE_COLUMN } from '../constants';


export default produce((draft = initialData.columnOrder , action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_COLUMN: {
      draft.splice(payload.start, 1);
      draft.splice(payload.end, 0, payload.id);
      break;
    }
    default:
      return draft;
  }
});
