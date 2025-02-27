# Console

Prova de conceito para testar integração do Angular 19 com Monaco Editor

## Monaco Editor

### Instalação

```bash
npm install monaco-editor ngx-monaco-editor-v2
```

### Configuração

1. angular.json

```json
"assets": [
    {
        "glob": "**/*",
        "input": "node_modules/monaco-editor",
        "output": "./assets/monaco/"
    }
],
```

2. app.config.ts

```typescript
import { provideMonacoEditor } from 'ngx-monaco-editor-v2';

(...)

providers: [
    provideMonacoEditor()
]
```

3. main.ts

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor-v2';
import { importProvidersFrom } from '@angular/core';

export const monacoConfig: NgxMonacoEditorConfig = {
    baseUrl: window.location.origin + '/assets/monaco/min/vs',
};

bootstrapApplication(AppComponent, {
    providers: [...appConfig.providers, importProvidersFrom(MonacoEditorModule.forRoot(monacoConfig))],
}).catch((err) => console.error(err));
```
