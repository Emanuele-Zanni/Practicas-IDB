const db = new Dexie("localDB");
db.version(1).stores({
  folders: "++id,name",
  projects: "++id,name",
  tasks: "++id,name,projectId,columnId,isCompleted",
  workingTasks: "++id,name,projectId,columnId,isCompleted",
  taskQueueFilter: "++id,filterName,filterValue",
  notifications: "++id,taskId,notificationTime",
});
