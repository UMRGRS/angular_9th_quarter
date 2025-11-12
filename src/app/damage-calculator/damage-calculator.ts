import { Component, Input } from '@angular/core';
import { CalculatorInputs } from "./calculator-inputs/calculator-inputs";
import { EnemyInfo } from "./enemy-info/enemy-info";
import { CalculatorResult } from "./calculator-result/calculator-result";
import { UserData } from '../global/interfaces/user-data';
import { ActiveEquipment } from '../global/interfaces/active-equipment';

@Component({
  selector: 'app-damage-calculator',
  imports: [CalculatorInputs, EnemyInfo, CalculatorResult],
  templateUrl: './damage-calculator.html',
  styleUrl: './damage-calculator.css'
})
export class DamageCalculator {
  @Input({required:true})
  user_data!:UserData;

  @Input({required:true})
  equipment_data!:ActiveEquipment;
  
  onDefaultOptionsChange($event: ActiveEquipment) {
    console.log("Parent");
    console.log($event);
  }
}
