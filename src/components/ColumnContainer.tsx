import { useDroppable } from "@dnd-kit/core";
import TrashIcon from "../icons/TrashIcon";
import { Column, Id, Task } from "../types";
import { useMemo } from "react";
import PlusIcon from "../icons/PlusIcon";
import TaskCard from "./TaskCard";
import { SortableContext } from "@dnd-kit/sortable";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;

  createTask: (columnId: Id) => void;
  deleteTask: (id: Id) => void;
  tasks: Task[];
}

function ColumnContainer({
  column,
  deleteColumn,
  createTask,
  tasks,
  deleteTask,
}: Props) {
  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const { setNodeRef } = useDroppable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
  });

  return (
    <div
      ref={setNodeRef}
      className="
  bg-columnBackgroundColor
  min-w-[70vw]
  sm:min-w-[350px]
  w-[350px]
  h-[500px]
  max-h-[500px]
  rounded-md
  flex
  flex-col
  "
    >
      <div
        className=" 
      bg-columnBackgroundColor
      text-md
      h-[60px]
      cursor-grab
      rounded-md
      rounded-b-none
      p-3
      font-bold
      border-columnBackgroundColor
      border-4
      flex
      items-center
      justify-between
      "
      >
        <div className="flex gap-2">
          <div
            className="
        flex
        justify-center
        items-center
        bg-columnBackgroundColor
        px-2
        py-1
        text-sm
        rounded-full
        "
          >
            0
          </div>
          {column.title}
        </div>
        <button
          onClick={() => {
            deleteColumn(column.id);
          }}
          className="
        stroke-gray-500
        hover:stroke-black
        hover:bg-columnBackgroundColor
        rounded
        px-1
        py-2
        "
        >
          <TrashIcon />
        </button>
      </div>

      <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
          ))}
        </SortableContext>
      </div>

      <button
        className="flex gap-2 items-center border-columnBackgroundColor border-2 rounded-md p-4 border-x-columnBackgroundColor hover:bg-mainBackgroundColor hover:text-rose-500 active:bg-black"
        onClick={() => {
          createTask(column.id);
        }}
      >
        <PlusIcon />
        Add task
      </button>
    </div>
  );
}

export default ColumnContainer;
