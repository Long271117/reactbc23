const stateDefault = {
  tasks: [],
};

export const toDoListReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_TASK_TODO": {
      state.tasks = action.data;
      return { ...state };
    }

    default:
      return state;
  }
};
