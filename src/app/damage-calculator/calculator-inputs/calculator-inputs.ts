import { Component } from '@angular/core';
import { DropdownSelector } from "../dropdown-selector/dropdown-selector";
import { SelectorOptions } from '../interfaces/selector-options';

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
  // Input options/labels in a single object and create dropdowns dynamically
  options: SelectorOptions[] = [{value: 'owo', label: 'OwO'}, {value: 'uwu', label: 'UwU'},  {value: 'ewe', label: 'EwE'}];

  selected_option: SelectorOptions | null = null;

  onOptionSelected(value: SelectorOptions) {
    this.selected_option = value;
  }

}
