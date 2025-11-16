import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropdownSelector } from "../dropdown-selector/dropdown-selector";
import { ShowStats } from "../../main-page/show-stats/show-stats";
import { BaseOption } from '../../global/interfaces/base-option';
import { EnemiesData } from '../../global/interfaces/enemies-data';

@Component({
  selector: 'app-enemy-info',
  imports: [DropdownSelector, ShowStats],
  templateUrl: './enemy-info.html',
  styleUrl: './enemy-info.css'
})
export class EnemyInfo{
  @Input({required:true})
  options!:EnemiesData[];

  @Input({required:true})
  selected_enemy!:EnemiesData;
  
  @Output() selectedEnemyChange = new EventEmitter<EnemiesData>();

  onOptionSelected <T extends BaseOption>(value: T) {
    this.selected_enemy = value;
    this.selectedEnemyChange.emit(this.selected_enemy);
  }
}
