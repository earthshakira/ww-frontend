import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiService} from "./api.service";
import {GlobalErrorHandlingService} from "./global-error-handling.service";

const prepend = "TaskService";
@Injectable({
    providedIn: 'root'
})
export class TasksService {


    constructor(private httpClient: HttpClient) {

    }

    public getTasks(): Promise<any> {
        let url = ApiService.getRoot() + '/tasks';
        return this.httpClient.get(url, ApiService.getOptions()).toPromise().then(data => {
            console.log(prepend,data)
            return data;
        }).catch(err => GlobalErrorHandlingService.handle(err));
    }

    public getActiveTasks(): Promise<any> {
        let url = ApiService.getRoot() + '/tasks/runningTasks';
        return this.httpClient.get(url, ApiService.getOptions()).toPromise().then(data => {
            console.log(prepend,data)
            return data;
        }).catch(err => GlobalErrorHandlingService.handle(err));
    }

    public createTask(task: any): Promise<any> {
        let url = ApiService.getRoot() + '/tasks/add';
        return this.httpClient.post(url, task, ApiService.getOptions()).toPromise().then(data => {
            console.log(prepend,data)
            return data;
        }).catch(err => GlobalErrorHandlingService.handle(err));
    }
}
