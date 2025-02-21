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
export declare const emptyRole: Role;
//# sourceMappingURL=role.d.ts.map