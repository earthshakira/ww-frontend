import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../services/core/tasks.service";
import {MatSnackBar} from "@angular/material";
import {Subject} from "rxjs/index";

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    loader: boolean;
    tasks: Array<any> = [];
    private _refresher:Subject<any>;
    get refresher(): Subject<any> {
        return this._refresher;
    }

    set refresher(value: Subject<any>) {
        this._refresher = value;
        this.refresher.asObservable().subscribe(data => {
            this.refresh();
        })
    }

    constructor(private taskService: TasksService, private snackBar: MatSnackBar) {

    }

    ngOnInit() {
        this.fetchTasks();
    }

    refresh() {
        this.fetchTasks();
    }

    performAction(task): void {
        this.taskService.createTask(task).then(data => {
            console.log(data);
            this.refresher.next(data);
        }).catch(error => {
            this.snackBar.open("error in " + task.name, null, {duration: 2000});
        });
    }

    fetchTasks(): void {
        this.loader = true;
        this.taskService.getTasks().then(data => {
            this.tasks = data;
            this.snackBar.open("Tasks Loaded", null, {duration: 1000});
        }).catch(err => console.error(err)).then(() => this.loader = false);
    }
}
