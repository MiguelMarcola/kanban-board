import TrashIcon from "../icons/TrashIcon";
import { Id, Task } from "../types";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
}

function TaskCard({ task, deleteTask }: Props) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useSortable({
      id: task.id,
      data: {
        type: "Task",
        task,
      },
      transition: {
        duration: 150,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    });

  const style = {
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        opacity-30
      p-2.5 max-h-[100px] min-h-[100px] items-center flex text-left rounded-xl cursor-grab relative 
      "
      />
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-black cursor-grab relative task"
    >
      <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
        {task.content}
      </p>

      <button
        onMouseDown={(e) => {
          e.stopPropagation();
          console.log("Delete button clicked outside");
          deleteTask(task.id);
        }}
        className="stroke-white right-4 bg-black p-2 rounded opacity-60 hover:opacity-100"
      >
        <TrashIcon />
      </button>
    </div>
  );
}

export default TaskCard;
