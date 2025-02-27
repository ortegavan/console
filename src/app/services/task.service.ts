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
                type: 'cardWithImageOnLeft',
                imageUrl: 'img/agenda.svg',
            },
            {
                id: 2,
                parentId: null,
                title: 'Task 2',
                description: 'Description 2',
                type: 'cardWithImageOnLeft',
                imageUrl: 'img/pin-code.svg',
            },
            {
                id: 3,
                parentId: 1,
                title: 'Task 3',
                description: 'Description 3',
                type: 'cardWithImageOnLeft',
                imageUrl: 'img/gears.svg',
            },
            {
                id: 4,
                parentId: 1,
                title: 'Task 4',
                description: 'Description 4',
                type: 'cardWithImageOnLeft',
                imageUrl: 'img/leadership.svg',
            },
            {
                id: 5,
                parentId: 2,
                title: 'Task 5',
                description: 'Description 5',
                type: 'cardWithImageOnLeft',
                imageUrl: 'img/user-2.svg',
            },
            {
                id: 6,
                parentId: 3,
                title: 'Task 6',
                description: 'Description 6',
                type: 'cardWithImageOnLeft',
                imageUrl: 'img/sla.svg',
            },
            {
                id: 7,
                parentId: 3,
                title: 'Task 7',
                description: 'Description 7',
                type: 'cardWithImageOnLeft',
                imageUrl: 'img/star.svg',
            },
            {
                id: 8,
                parentId: 4,
                title: 'Task 8',
                description: 'Description 8',
                type: 'cardWithImageOnLeft',
                imageUrl: 'img/cloud-sync.svg',
            },
            {
                id: 9,
                parentId: 5,
                title: 'Task 9',
                description: 'Description 9',
                type: 'cardWithImageOnLeft',
                imageUrl: 'img/telephone-2.svg',
            },
            {
                id: 10,
                parentId: 5,
                title: 'Task 10',
                description: 'Description 10',
                type: 'cardWithImageOnLeft',
                imageUrl: 'img/user.svg',
            },
        ];
    }
}
