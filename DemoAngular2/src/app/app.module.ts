import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  //Ici pour pouvoir utiliser ngModel dans le two way data binding
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeService } from './employee/employee.service';
import { UserPreferencesService } from './employee/userPreferences.service';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component'
import { TestComponent } from './employee/test.component'
import { SalarierComponent } from './employee/salarier.component'
import { EmployeeListComponent } from './employee/employeeList.component'
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe'
import { EmployeeCountComponent } from './employee/employeeCount.component'
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './Others/pageNotFound.component';



const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/:code', component: EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes, { useHash: true })], //if we use { useHash: true } la configuration de system.webServer n'est plus nécessaire pour le routing
    declarations: [AppComponent, EmployeeComponent, TestComponent, SalarierComponent, EmployeeListComponent,
        EmployeeTitlePipe, EmployeeCountComponent, HomeComponent, PageNotFoundComponent],
    bootstrap: [AppComponent],
    providers: [EmployeeService, UserPreferencesService]
})
export class AppModule { }
