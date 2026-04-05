export type Task = {
    id: string,
    completed: boolean;
    title: string;
    editMode: boolean;
}

export enum TasksFilter {
    All,
    Outstanding,
    Completed
}