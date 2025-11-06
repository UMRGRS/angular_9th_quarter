import { Component } from '@angular/core';
import { DropdownSelector } from "../dropdown-selector/dropdown-selector";
import { StatsProgressBar } from "../../main-page/stats-progress-bar/stats-progress-bar";
import { BaseOption } from '../../global/interfaces/base-option';

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
  options: BaseOption[] = [];

  selected_option: BaseOption | null = null;

  onOptionSelected(value: BaseOption) {
    this.selected_option = value;
  }
}
