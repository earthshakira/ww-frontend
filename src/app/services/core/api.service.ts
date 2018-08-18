import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor() {
    }

    public static getRoot(): String {
        if(environment.production)
            return '/api'
        return 'http://localhost:8080/api';
    }

    public static getHeaders(): Headers {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    public static getOptions() {
        return { withCredentials: true };
    }
}
