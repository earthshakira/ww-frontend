import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {UserDataService} from "../core/user-data.service";


@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _isUserLoggedIn;
    private _userName;
    private _name;
    private _email;

    constructor(private cookieService: CookieService, private userData: UserDataService) {
        this._isUserLoggedIn = false;
    }


    public cookieUp(): void {
        this.userName = this.cookieService.get('userName');
        this.email = this.cookieService.get('email');
        this.name = this.cookieService.get('name');
    }

    get isUserLoggedIn() {
        return this._isUserLoggedIn;
    }

    set isUserLoggedIn(value) {
        this._isUserLoggedIn = value;
    }

    get userName() {
        return this._userName;
    }

    set userName(value) {
        this._userName = value;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    public logout(): Promise<any> {
        return this.userData.logout().then((data) => {
            this.reset();
            return data;
        }).catch(err => {
            if(err.status == 404 || err.status == 401)
                this.reset();
            return {status:200,message:"partial success"};
        });
    }

    public reset(){
        this.name = null;
        this.email = null;
        this.userName = null;
        this.isUserLoggedIn = false;
        this.cookieDown();
    }
    public authenticate(user: any, password: any): Promise<any> {

        return this.userData.login(user, password).then(data => {
            console.log(data);
            this.userName = data.userName;
            this.name = data.name;
            this.email = data.email;
            this.isUserLoggedIn = true;
            this.cookieService.set('userName', this.userName);
            this.cookieService.set('email', this.email);
            this.cookieService.set('name', this.name);
            return data;
        }).catch(err => {
            console.log(err);
            throw err;
        });
    }

    public cookieDown() {
        this.cookieService.delete("userName");
        this.cookieService.delete("email");
        this.cookieService.delete("name");
    }
}
