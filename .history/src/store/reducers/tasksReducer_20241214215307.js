import {ThemeColors} from '../../theme/colors';
import {ADDTASK} from '../types/tasksTypes';

const initialState = {
  tasks: [
    {
      id: 1,
      title: 'Dashboard dizayn for admin',
      status: 'In Progress',
      date: '20 ekim 2024',
    },
    {
      id: 2,
      title: 'Dashboard dizayn for users',
      status: 'In Review',
      date: '20 ekim 2015',
    },
    {
      id: 3,
      title: 'Dashboard dizayn forasdad',
      status: 'On Hold',
      date: '20 ekim 2015',
    },
  ],
  testMessage: 'test messagesfjdskjfksjfkd',
  taskStatus: [
    {
      id: 1,
      status: 'In Progress',
      value: 0,
      color: ThemeColors.blue,
    },
    {
      id: 2,
      status: 'In Review',
      value: 0,
      color: ThemeColors.pink,
    },
    {
      id: 3,
      status: 'On Hold',
      value: 0,
      color: ThemeColors.yellow,
    },
    {
      id: 4,
      status: 'Complated',
      value: 0,
      color: ThemeColors.green,
    },
  ],
};
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      return {...state, tasks: state.tasks.push(action.payload)};

    default:
      return state;
  }
};
export default tasksReducer;
