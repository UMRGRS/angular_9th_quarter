import { Component, Input } from '@angular/core';
import { CalculatorInputs } from "./calculator-inputs/calculator-inputs";
import { EnemyInfo } from "./enemy-info/enemy-info";
import { CalculatorResult } from "./calculator-result/calculator-result";
import { UserData } from '../global/interfaces/user-data';

@Component({
  selector: 'app-damage-calculator',
  imports: [CalculatorInputs, EnemyInfo, CalculatorResult],
  templateUrl: './damage-calculator.html',
  styleUrl: './damage-calculator.css'
})
export class DamageCalculator {
  @Input({required:true})
  user_data:UserData|null = null;

  
}
