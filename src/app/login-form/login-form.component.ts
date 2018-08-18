import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/loginServices/user.service";
import {MatSnackBar} from "@angular/material";

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    loader: boolean = false;
    error: string;
    constructor(private router:Router,private user:UserService,public snackBar: MatSnackBar) {
        console.log(user);
        if(this.user.isUserLoggedIn)
            this.navigateToHome();
    }

    ngOnInit() {
    }

    formSubmit(e) {
        this.error =  null;
        e.preventDefault();
        console.log(this.user);
        let user = e.target.username.value;
        let password = e.target.password.value;
        if(!user || !password){


            this.error  = "Please fill all Fields"
            return false;
        }
        this.loader = true;
        this.user.authenticate(user,password).then( data => {
            this.navigateToHome();
        }).catch(err =>  {
            let error = err.error;
            this.error ='' + error.status +" "+ error.error + " - "+ error.message;
            console.log(error);
        }).then(() => {
            this.loader = false;
        });


    }

    navigateToHome(): void {
        this.router.navigate(['dashboard']);
    }
}
