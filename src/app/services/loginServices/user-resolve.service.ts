import { Injectable } from '@angular/core';
import {UserDataService} from "../core/user-data.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<UserService>{


  constructor(private userService:UserDataService) {  }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return this.userService.user().then( user => user).catch(err => console.log(err));
    }
}
