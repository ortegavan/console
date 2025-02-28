export type Step = {
    id: number;
    taskId: number | null;
    title: string;
    description: string;
    sequence: number;
    completed: boolean;
};
