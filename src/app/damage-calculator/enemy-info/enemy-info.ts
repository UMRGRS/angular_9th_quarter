import { Component } from '@angular/core';
import { DropdownSelector } from "../dropdown-selector/dropdown-selector";
import { SelectorOptions } from '../interfaces/selector-options';
import { StatsProgressBar } from "../../main-page/stats-progress-bar/stats-progress-bar";

@Component({
  selector: 'app-enemy-info',
  imports: [DropdownSelector, StatsProgressBar],
  templateUrl: './enemy-info.html',
  styleUrl: './enemy-info.css'
})
export class EnemyInfo {
  //Next steps
  //Add interface for enemies data
  //Changed selected option and options to new interface
  // Pass selected option to parent
  // Update values on html
  options: SelectorOptions[] = [{value: 'owo', label: 'OwO'}, {value: 'uwu', label: 'UwU'},  {value: 'ewe', label: 'EwE'}];

  selected_option: SelectorOptions | null = null;

  onOptionSelected(value: SelectorOptions) {
    this.selected_option = value;
  }
}
