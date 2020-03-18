import { Component } from '@angular/core';

@Component({
    selector: 'my-salarier',
    templateUrl: `app/employee/salarier.component.html`,
})

export class SalarierComponent {
    firstName: string = "Ndao";
    lastName: string = "Tapha";
    gender: string = "Male";
    age: number = 25;
    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}