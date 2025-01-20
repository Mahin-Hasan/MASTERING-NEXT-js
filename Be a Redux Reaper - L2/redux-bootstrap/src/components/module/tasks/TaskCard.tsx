import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/task/taskSlice";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  const { title, description, assignedTo } = task;
  const users = useAppSelector(selectUsers);
  const assignedUser = users.find((user) => user.id === assignedTo);
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          {/* cn to merge classes based on condition i.e clsx see lib - utils.ts | can also be written using template strings*/}
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "Low",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "High",
            })}
          ></div>
          <h1
            className={cn("", {
              "line-through": task.isCompleted,
            })}
          >
            {title}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(deleteTask(task.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <Trash2 />
          </Button>
          <Checkbox
            checked={task.isCompleted}
            onClick={() => dispatch(toggleCompleteState(task.id))}
          />
          {/* here in toggole func we are not passing object we are only passing the id */}
        </div>
      </div>
      <p className="mt-5">
        Asigned to -{assignedUser ? assignedUser.name : "No One"}
      </p>
      <p className="mt-5">{description}</p>
    </div>
  );
};

export default TaskCard;
