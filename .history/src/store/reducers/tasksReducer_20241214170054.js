import {ADDTASK} from '../types/tasksTypes';

const initialState = {
  tasks: [],
  testMessage: 'test messagesfjdskjfksjfkd',
  taskStatus:[{
    id:"1",
    status:"In Progress",
    value=0

  }]
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
