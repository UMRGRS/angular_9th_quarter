import { Component } from '@angular/core';
import { DropdownSelector } from "../dropdown-selector/dropdown-selector";
import { BaseOption } from '../../global/interfaces/base-option';

@Component({
  selector: 'app-calculator-inputs',
  imports: [DropdownSelector],
  templateUrl: './calculator-inputs.html',
  styleUrl: './calculator-inputs.css'
})
export class CalculatorInputs {
  // Next steps
  // Wrap every output change in an single object
  // Pass object to parent
  options: BaseOption[] = [{uid: 'owo', name: 'OwO', image:""}, {uid: 'uwu', name: 'UwU', image:""}, {uid: 'ewe', name: 'EwE', image:""}];

  selected_option: BaseOption | null = null;

  onOptionSelected(value: BaseOption) {
    this.selected_option = value;
  }

}
