import { Injectable } from '@angular/core';
import { Step } from '../model/step';

@Injectable({
    providedIn: 'root',
})
export class StepService {
    get(): Step[] {
        return [
            {
                id: 1,
                title: 'Step 1',
                description: 'Description for Step 1',
                sequence: 1,
                completed: false,
                taskId: 1,
            },
            {
                id: 2,
                title: 'Step 2',
                description: 'Description for Step 2',
                sequence: 2,
                completed: false,
                taskId: 1,
            },
            {
                id: 3,
                title: 'Step 3',
                description: 'Description for Step 3',
                sequence: 3,
                completed: false,
                taskId: 1,
            },
            {
                id: 4,
                title: 'Step 4',
                description: 'Description for Step 4',
                sequence: 4,
                completed: false,
                taskId: 1,
            },
            {
                id: 5,
                title: 'Step 5',
                description: 'Description for Step 5',
                sequence: 5,
                completed: false,
                taskId: 1,
            },
            {
                id: 6,
                title: 'Step 6',
                description: 'Description for Step 6',
                sequence: 6,
                completed: false,
                taskId: 1,
            },
        ];
    }
}
