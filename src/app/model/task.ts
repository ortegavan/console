export type Task = {
    id: number;
    parentId: number | null;
    title: string;
    description: string;
    type?: string;
    imageUrl?: string;
};
