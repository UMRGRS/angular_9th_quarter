import { Component, Input } from '@angular/core';
import { ActiveEquipment } from '../../global/interfaces/active-equipment';

@Component({
  selector: 'app-player-items',
  imports: [],
  templateUrl: './player-items.html',
  styleUrl: './player-items.css'
})
export class PlayerItems {
  @Input({required:true})
  equipment_data!:ActiveEquipment;
}
