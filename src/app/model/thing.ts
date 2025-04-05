export type Thing = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
    tags?: string[];
    type?: string;
    status?: string;
    ownerId?: string;
    ownerName?: string;
    ownerImageUrl?: string;
    isPublic?: boolean;
    isFavorite?: boolean;
    isArchived?: boolean;
    isDeleted?: boolean;
};
