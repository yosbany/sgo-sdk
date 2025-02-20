export interface Task {
    task_name: string;
    frequency: string;
  }
  
  export interface Role {
    id: string;
    name: string;
    tasks: Task[];
    last_updated: string;
  }
  
  export const emptyRole: Role = {
    id: "",
    name: "",
    tasks: [],
    last_updated: new Date().toISOString(),
  };
  