import { Component, inject, OnInit } from '@angular/core';
import { ThingService } from '../../services/thing.service';
import { Observable } from 'rxjs';
import { Thing } from '../../model/thing';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-list',
    imports: [DxDataGridModule, DxButtonModule, AsyncPipe],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
    service = inject(ThingService);
    things$!: Observable<Thing[]>;
    customButtons = [
        {
            hint: 'Edit',
            icon: 'fa-light fa-pen', // FontAwesome icon
            onClick: (e: any) => this.editThing(e.row.data),
            cssClass: 'fa-button',
        },
        {
            hint: 'Delete',
            icon: 'fa-light fa-trash-can', // FontAwesome icon
            onClick: (e: any) => this.deleteThing(e.row.data),
            cssClass: 'fa-button text-danger',
        },
    ];

    ngOnInit(): void {
        this.things$ = this.service.get();
    }

    editThing(thing: Thing) {
        console.log('Editar:', thing);
    }

    deleteThing(thing: Thing) {
        console.log('Deletar:', thing);
    }
}
