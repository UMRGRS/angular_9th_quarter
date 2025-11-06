import { Component } from '@angular/core';
import { CalculatorInputs } from "./calculator-inputs/calculator-inputs";
import { EnemyInfo } from "./enemy-info/enemy-info";
import { CalculatorResult } from "./calculator-result/calculator-result";

@Component({
  selector: 'app-damage-calculator',
  imports: [CalculatorInputs, EnemyInfo, CalculatorResult],
  templateUrl: './damage-calculator.html',
  styleUrl: './damage-calculator.css'
})
export class DamageCalculator {

}
