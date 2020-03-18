import { Component } from '@angular/core';
import { UserPreferencesService } from '../employee/userPreferences.service';

@Component({
    template: `<h1>This is the home component</ h1 > 
                <div>
                    colour preference : <input typt = 'text' [(ngModel)] = 'colour' [style.background]='colour' />
                </div>
              `
})
export class HomeComponent {
    //private _userPreference: UserPreferencesService;

    constructor(private _userPreference: UserPreferencesService) {
        //this._userPreference = new UserPreferencesService();
    }

    get colour(): string {
        return this._userPreference.colourPreference;
    }

    set colour(value: string) {
        this._userPreference.colourPreference = value;
    }
}