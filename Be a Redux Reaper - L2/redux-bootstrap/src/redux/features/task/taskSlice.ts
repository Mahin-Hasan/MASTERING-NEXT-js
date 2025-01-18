import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

//creating interface for type safety

interface InitialState {
  tasks: ITask[];
}

const initialState: InitialState = {
  tasks: [
    {
      id: "dubnmaksd012938bb",
      title: "Initialize frontend",
      description: "Create home page, and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "dubnmsdfaksd012938bb",
      title: "Create github repo",
      description: "connect codebase with github repo",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Medium",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export default taskSlice.reducer;
