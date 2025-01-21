import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";
// import { v4 as uuidv4 } from "uuid";
//creating interface for type safety

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [],
  filter: "all",
};

type DraftTask = Pick<
  ITask,
  "title" | "description" | "priority" | "dueDate" | "assignedTo"
>;

const createTask = (taskData: DraftTask): ITask => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
  };
};
// write update task code here ....
// type updateTaskType = Partial<ITask>;
// const updateTask = (updateData: updateTaskType) => {
//   return {
//     id: nanoid(),
//     ...updateData,
//   };
// };
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      // const id = uuidv4();
      // const taskData = {
      //   ...action.payload,
      //   id,
      //   isCompleted: false,
      // };
      state.tasks.push(taskData);
    },
    // updateTask: (state, action: PayloadAction<updateTaskType>) => {
    //   const updateData = updateTask(action.payload);
    //   state.tasks.push(updateData);
    // },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload); // filtering without the clicked id 
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "high" | "medium" | "low">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    // to maintain a relation with other feature slice here we are using to set assogned user in taskSlice to null if user is removed in the user slice
    builder.addCase(removeUser, (state, action) => {
      state.tasks.forEach((task) =>
        task.assignedTo === action.payload ? (task.assignedTo = null) : task);
    });
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "Low");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "Medium");
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "High");
  } else {
    return state.todo.tasks;
  }
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};
export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
