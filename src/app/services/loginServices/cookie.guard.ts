import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from "./user.service";
import {CookieService} from "ngx-cookie-service";


@Injectable({
    providedIn: 'root'
})
export class CookieGuard implements CanActivate {

    constructor(private user: UserService,private router:Router,private cookieService:CookieService) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.user.isUserLoggedIn && this.cookieService.check('name')) {

            this.user.cookieUp();
            if(this.user.isUserLoggedIn = true){
                console.log("Redirecting to dashboard");
                this.router.navigate(['dashboard']);
            }
        }
        return true;
    }


}