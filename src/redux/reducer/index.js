import { combineReducers } from 'redux';

import columnOrder from './columnOrder';
import columns from "./columns";
import tasks from "./tasks";

export default combineReducers({
  columnOrder,
  columns,
  tasks,
});
