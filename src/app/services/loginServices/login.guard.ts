import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from "./user.service";

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(private user:UserService,private router:Router) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(this.user.isUserLoggedIn){
            this.router.navigate(['dashboard']);
        }
        return true;
    }
}