import { cn } from "../ui/utils";
import { CheckCircle2, CircleDashed, Plus } from "../icons";

export const UpcomingTasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Riego de cebollas",
      field: "Campo 3",
      date: "Hoy, 6:00 AM",
      completed: true,
    },
    {
      id: 2,
      title: "Aplicación de fertilizante",
      field: "Campo 2",
      date: "Hoy, 3:00 PM",
      completed: false,
    },
    {
      id: 3,
      title: "Cosecha de tomates",
      field: "Campo 1",
      date: "Mañana, 7:00 AM",
      completed: false,
    },
    {
      id: 4,
      title: "Preparación de terreno",
      field: "Campo 4",
      date: "Mañana, 2:00 PM",
      completed: false,
    },
    {
      id: 5,
      title: "Entrega a SuperMarket A",
      field: "Almacén",
      date: "Pasado mañana, 9:00 AM",
      completed: false,
    },
  ];

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={cn(
            "flex items-center justify-between rounded-lg border p-3",
            task.completed && "bg-muted/50"
          )}
        >
          <div className="flex items-center gap-3">
            {task.completed ? (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            ) : (
              <CircleDashed className="h-5 w-5 text-muted-foreground" />
            )}
            <div>
              <p
                className={cn(
                  "font-medium",
                  task.completed && "line-through text-muted-foreground"
                )}
              >
                {task.title}
              </p>
              <p className="text-xs text-muted-foreground">{task.field}</p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">{task.date}</div>
        </div>
      ))}

      <button className="w-full flex items-center justify-center gap-2 p-3 rounded-lg border border-dashed hover:bg-muted/50 transition-colors">
        <Plus className="h-5 w-5" />
        <span>Agregar tarea</span>
      </button>
    </div>
  );
};
