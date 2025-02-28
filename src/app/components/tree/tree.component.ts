import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { DxTreeViewModule } from 'devextreme-angular';
import { Task } from '../../model/task';
import { TaskService } from '../../services/task.service';
import { ItemSelectionChangedEvent } from 'devextreme/ui/tree_view';
import { Step } from '../../model/step';
import { StepService } from '../../services/step.service';
import { DxSortableModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';
import { I18nPluralPipe } from '@angular/common';

@Component({
    selector: 'app-tree',
    imports: [
        DxTreeViewModule,
        DxSortableModule,
        DxButtonModule,
        I18nPluralPipe,
    ],
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

    stepMapping: { [key: string]: string } = {
        '=0': 'No steps',
        '=1': '1 step',
        other: '# steps',
    };

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

        // Captura TODOS os nós da árvore
        const allNodes = this.treeView.instance.getNodes();

        // Função recursiva para coletar apenas os nós realmente visíveis
        const getVisibleNodes: any = (nodes: any[], parentExpanded = true) => {
            let visible = [];

            for (const node of nodes) {
                if (parentExpanded) {
                    visible.push(node.itemData);
                }

                // Se o nó está expandido, adiciona seus filhos
                if (node.expanded && node.children) {
                    visible = visible.concat(
                        getVisibleNodes(node.children, node.expanded),
                    );
                }
            }

            return visible;
        };

        // Obtém as Tasks visíveis
        const visibleTasks = getVisibleNodes(allNodes);

        // Obtém a Task correspondente ao índice de drop
        const targetTask = visibleTasks[event.toIndex];

        // Adiciona o Step à Task correspondente
        targetTask.steps.push(step);

        // Remove o Step da lista de origem (opcional)
        this.steps = this.steps.filter((s) => s.id !== step.id);
    }
}
