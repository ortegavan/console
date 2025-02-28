import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { DxTreeViewModule } from 'devextreme-angular';
import { Task } from '../../model/task';
import { TaskService } from '../../services/task.service';
import { ItemSelectionChangedEvent } from 'devextreme/ui/tree_view';
import { Step } from '../../model/step';
import { StepService } from '../../services/step.service';
import { DxSortableModule } from 'devextreme-angular';

@Component({
    selector: 'app-tree',
    imports: [DxTreeViewModule, DxSortableModule],
    templateUrl: './tree.component.html',
    styleUrl: './tree.component.scss',
})
export class TreeComponent implements OnInit {
    @ViewChild('treeView', { static: false }) treeView: any;

    tasks!: Task[];
    steps!: Step[];

    taskService = inject(TaskService);
    stepService = inject(StepService);

    selectedNodeId = 0;

    ngOnInit(): void {
        this.tasks = this.taskService.get();
        this.steps = this.stepService.get();
    }

    editTask(task: Task): void {}

    deleteTask(task: Task): void {}

    select(event: ItemSelectionChangedEvent): void {
        this.selectedNodeId = event.node?.key;
    }

    start(event: any) {
        event.itemData = this.steps.find(
            (i) => i.id == event.fromData[event.fromIndex].id,
        );
    }

    add(event: any) {
        const step = event.itemData;

        // TODO: encontrar a task

        this.steps = this.steps.filter((s) => s.id !== step.id);
    }
}
