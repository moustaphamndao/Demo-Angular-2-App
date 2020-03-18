import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee';
import { UserPreferencesService } from './userPreferences.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
})
export class EmployeeListComponent implements OnInit {


    // This property keeps track of which radio button is selected
    // We have set the default value to All, so all the employees
    // are displayed in the table by default
    selectedEmployeeCountRadioButton: string = "All"
    statusMessage: string = 'Loading data. Please wait...';
    //private _userPreference: UserPreferencesService;

    employees: IEmployee[];

    constructor(private _employeeService: EmployeeService, private _userPreference: UserPreferencesService) {
        //this._userPreference = new UserPreferencesService();
    }

    get colour(): string {
        return this._userPreference.colourPreference;
    }

    set colour(value: string) {
        this._userPreference.colourPreference = value;
    }

    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe((employeeData) => this.employees = employeeData,
                (error) => {
                    this.statusMessage = 'Problem with the service. Please try again after sometime'
                });
    }




    // Depending on which radio button is selected, this method updates
    // selectedEmployeeCountRadioButton property declared above
    // This method is called when the child component (EmployeeCountComponent)
    // raises the custom event - countRadioButtonSelectionChanged
    // The event binding is specified in employeeList.component.html
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
        console.log(this.selectedEmployeeCountRadioButton)
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }

    getFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }
}