import { Component } from '@angular/core';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    imports: [MonacoEditorModule, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'console';
    code = `// Digite seu código aqui...`;
    editorOptions = {
        theme: 'vs-dark',
        language: 'typescript',
    };
}
