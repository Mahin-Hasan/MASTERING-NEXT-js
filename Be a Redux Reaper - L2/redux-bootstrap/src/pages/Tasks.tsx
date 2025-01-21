import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ITask } from "@/types";

const Tasks = () => {
  //   const tasks = useAppSelector((state) => state.todo.tasks);
 // const tasks = useAppSelector(selectTasks); // same operation in a cleaner mannar using selectTasks and declaring it in end of task slice
  // console.log(tasks);
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useGetTasksQuery(undefined);
  console.log({ data, isLoading, isError });

  if (isLoading) {
    return <p>Loading......</p>;
  }

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">Tasks</h1>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => dispatch(updateFilter("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("high"))}
              value="high"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      {/* using slice */}
      {/* <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div> */}
      {/* Using RTK */}
      <div className="space-y-5 mt-5">
        {!isLoading &&
          data.tasks.map((task: ITask) => (
            <TaskCard task={task} key={task.id} />
          ))}
      </div>
    </div>
  );
};

export default Tasks;
