import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../services/core/tasks.service";
import {MatSnackBar} from "@angular/material";

@Component({
    selector: 'app-running-tasks',
    templateUrl: './running-tasks.component.html',
    styleUrls: ['./running-tasks.component.css']
})
export class RunningTasksComponent implements OnInit {

    activeTasks: Array<any> = [];
    loader: boolean = true;
    constructor(private tasksService: TasksService,private snackBar:MatSnackBar) {
    }

    ngOnInit() {
        this.fetchTasks();
    }

    fetchTasks(): void {
        this.loader = true;
        this.tasksService.getActiveTasks().then(data => {
            data.forEach(item => {
                let progress = Math.floor((item.currentStepCount * 100)/item.totalSteps);
                item.progress = progress;
            });
            this.activeTasks = data;

        }).catch(err => {
            console.error(err);
            this.snackBar.open("Error in Gettin Active Tasks",null,{duration:2000});
        }).then( () => this.loader = false);
    }
}
