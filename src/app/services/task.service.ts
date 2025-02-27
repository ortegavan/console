import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    get(): Task[] {
        return [
            {
                id: 1,
                parentId: null,
                title: 'Task 1',
                description: 'Description 1',
            },
            {
                id: 2,
                parentId: null,
                title: 'Task 2',
                description: 'Description 2',
            },
            {
                id: 3,
                parentId: 1,
                title: 'Task 3',
                description: 'Description 3',
            },
            {
                id: 4,
                parentId: 1,
                title: 'Task 4',
                description: 'Description 4',
            },
            {
                id: 5,
                parentId: 2,
                title: 'Task 5',
                description: 'Description 5',
            },
            {
                id: 6,
                parentId: 3,
                title: 'Task 6',
                description: 'Description 6',
            },
            {
                id: 7,
                parentId: 3,
                title: 'Task 7',
                description: 'Description 7',
            },
            {
                id: 8,
                parentId: 4,
                title: 'Task 8',
                description: 'Description 8',
            },
            {
                id: 9,
                parentId: 5,
                title: 'Task 9',
                description: 'Description 9',
            },
            {
                id: 10,
                parentId: 5,
                title: 'Task 10',
                description: 'Description 10',
            },
        ];
    }
}
