import { Component, inject, OnInit } from '@angular/core';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { FormsModule } from '@angular/forms';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxDiagramModule } from 'devextreme-angular/ui/diagram';
import { Task } from './model/task';
import { ArrayStore } from 'devextreme/common/data';
import { TaskService } from './services/task.service';

@Component({
    selector: 'app-root',
    imports: [MonacoEditorModule, FormsModule, DxButtonModule, DxDiagramModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    title = 'console';
    code = `// Digite seu código aqui...`;
    editorOptions = {
        theme: 'vs-dark',
        language: 'typescript',
    };
    tasks!: Task[];
    dataSource!: ArrayStore;
    service = inject(TaskService);

    ngOnInit(): void {
        this.tasks = this.service.get();

        this.dataSource = new ArrayStore({
            data: this.tasks,
            key: 'id',
        });
    }

    test() {
        console.log(this.code);
    }
}
