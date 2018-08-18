import {Component} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {UserService} from "../services/loginServices/user.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

    name;
    abbr;

    constructor(private breakpointObserver: BreakpointObserver, private user: UserService,private router:Router,private snackBar:MatSnackBar) {
        this.fetch();
    }

    fetch(): void {
        console.log("navbar user fetch")
        setTimeout(() => {
            if (this.user.isUserLoggedIn) {
                this.name = this.user.name;
                let n = this.name.toUpperCase().split(' ');
                this.abbr = "";
                for (let i = 0; i < n.length; i++)
                    if (n[i])
                        this.abbr += n[i].charAt(0);

            } else {
                this.fetch();
            }
        }, 1000);
    }



    logoutClick(): void {
        this.user.logout().then( data => {
            this.reset();
            this.fetch();
            this.router.navigate([""]);
        }).catch( err => {
            this.snackBar.open("Oh Snap error in logout",null,{duration:1000});
        });
    }

    private reset() {
        this.name = null;
        this.abbr = null;
    }
}
