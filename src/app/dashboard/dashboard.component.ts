import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Subject} from "rxjs/index";
import {TasksComponent} from "./tasks/tasks.component";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit{
    ngAfterViewInit(): void {
        this.availableTasks.refresher = this.refresher;
    }
    showTasks: boolean = true;
    refresher: Subject<any>;
    @ViewChild('availableTasks') availableTasks: TasksComponent;

    constructor(private breakpointObserver: BreakpointObserver) {
        this.refresher = new Subject<any>();
    }
}
