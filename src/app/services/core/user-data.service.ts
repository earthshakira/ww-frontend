import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiService} from "./api.service";
import {GlobalErrorHandlingService} from "./global-error-handling.service";

@Injectable({
    providedIn: 'root'
})
export class UserDataService {

    constructor(private httpClient: HttpClient) {
    }

    login(user: string, password: string): Promise<any> {
        let url = ApiService.getRoot() + '/user/login?username=' + encodeURIComponent(user) + "&password=" + encodeURIComponent(password);
        return this.httpClient.get(url, ApiService.getOptions()).toPromise().catch(err => GlobalErrorHandlingService.handle(err));
    }

    logout(): Promise<any> {
        let url = ApiService.getRoot() + '/user/logout';
        return this.httpClient.get(url, ApiService.getOptions()).toPromise().catch(err => GlobalErrorHandlingService.handle(err));
    }

    user(): Promise<any> {
        let url = ApiService.getRoot() + '/user/user';
        return this.httpClient.get(url, ApiService.getOptions()).toPromise().catch(err => GlobalErrorHandlingService.handle(err));
    }
}
