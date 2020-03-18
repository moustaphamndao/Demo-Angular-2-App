import { Component } from '@angular/core';

@Component({
    selector: 'my-test',
    templateUrl: `app/employee/test.component.html`,
})

export class TestComponent {
    firstName: string = "Ndao";
    lastName: string = "Tapha";
    gender: string = "Male";
    age: number = 25;
    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}