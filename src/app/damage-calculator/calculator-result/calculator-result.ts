import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EnemiesData } from '../../global/interfaces/enemies-data';

@Component({
  selector: 'app-calculator-result',
  imports: [],
  templateUrl: './calculator-result.html',
  styleUrl: './calculator-result.css'
})
export class CalculatorResult implements OnChanges, OnInit{
  
  @Input({required:true})
  selected_enemy!:EnemiesData;

  @Input({required:true})
  damage_done:number = 0;

  current_value:number = 0;
  progress:number = 100;

  ngOnInit(): void {
    this.current_value = this.selected_enemy.max_hp ?? 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['damage_done']) {
      const remaining_life = (this.selected_enemy.max_hp ?? 0) - this.damage_done; 
      this.current_value = remaining_life < 0 ? 0 : remaining_life;
      const percentage = 100 - (this.damage_done * 100 / (this.selected_enemy.max_hp ?? 0));
      this.progress = percentage < 0 ? 0 : percentage;
    }
    else if (changes['selected_enemy']) {
      this.current_value = this.selected_enemy.max_hp!;
    }
  }
}
