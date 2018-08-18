import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NameComponent} from './name/name.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {RouterModule, Routes} from "@angular/router";
import {UserService} from "./services/loginServices/user.service";
import {AuthGuard} from "./services/loginServices/auth.guard";
import {LoginGuard} from "./services/loginServices/login.guard";
import {CookieGuard} from "./services/loginServices/cookie.guard";
import {CookieService} from "ngx-cookie-service";
import {HttpClientModule} from "@angular/common/http";
import {TasksComponent} from './dashboard/tasks/tasks.component';
import {TasksService} from "./services/core/tasks.service";
import { RunningTasksComponent } from './dashboard/running-tasks/running-tasks.component';


const appRoutes: Routes = [
    {
        path: '',
        canActivate: [CookieGuard, LoginGuard],
        component: LoginFormComponent
    },
    {
        path: 'dashboard',
        canActivate: [CookieGuard, AuthGuard],
        component: DashboardComponent
    }
]

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        DashboardComponent,
        NameComponent,
        LoginFormComponent,
        TasksComponent,
        RunningTasksComponent
    ],
    imports: [
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressBarModule,
        MatSnackBarModule
    ],
    providers: [UserService, AuthGuard, LoginGuard, CookieGuard, CookieService, TasksService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
