import { Component } from '@angular/core';

@Component({
    selector: 'fd-time-picker-disabled-example',
    templateUrl: './time-picker-disabled-example.component.html'
})
export class TimePickerDisabledExampleComponent {

    timeObject = { hour: 12, minute: 0, second: 0 };

}