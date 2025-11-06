import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-result',
  imports: [],
  templateUrl: './calculator-result.html',
  styleUrl: './calculator-result.css'
})
export class CalculatorResult implements OnInit{
  @Input({required:true})
  max_value:number = 0;
  @Input({required:true})
  current_value:number = 0;

  progress : number = 0;

  ngOnInit(): void {
    this.progress = this.current_value*100/this.max_value;
  }
}
