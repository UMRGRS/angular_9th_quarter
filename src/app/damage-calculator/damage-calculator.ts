import { Component, Input, OnInit } from '@angular/core';
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
export class DamageCalculator implements OnInit{
  
  @Input({required:true})
  user_data!:UserData;

  @Input({required:true})
  equipment_data!:ActiveEquipment;
  
  calculator_data!:ActiveEquipment;

  ngOnInit():void {
    this.calculator_data = {...this.equipment_data};
  }

  onDefaultOptionsChange($event: ActiveEquipment):void{
    console.log("update");
  }
}
