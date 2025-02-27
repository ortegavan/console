import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {
    MonacoEditorModule,
    NgxMonacoEditorConfig,
} from 'ngx-monaco-editor-v2';
import { importProvidersFrom } from '@angular/core';

export const monacoConfig: NgxMonacoEditorConfig = {
    baseUrl: window.location.origin + '/assets/monaco/min/vs',
};

bootstrapApplication(AppComponent, {
    providers: [
        ...appConfig.providers,
        importProvidersFrom(MonacoEditorModule.forRoot(monacoConfig)),
    ],
}).catch((err) => console.error(err));
