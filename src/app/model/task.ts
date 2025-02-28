import { Step } from './step';

export type Task = {
    id: number;
    parentId: number | null;
    title: string;
    description: string;
    steps: Step[];
    type: string;
    imageUrl?: string;
};
