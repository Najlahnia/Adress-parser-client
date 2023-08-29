import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Output() countrySelected = new EventEmitter<string>();

  countries = [
    "Canada",
    "USA",
  ];

  selectedCountry = "default";

  update() {
    this.countrySelected.emit(this.selectedCountry);
  }
}
