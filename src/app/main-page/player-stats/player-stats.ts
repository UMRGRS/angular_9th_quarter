import { Component, Input } from '@angular/core';
import { ShowStats } from "../show-stats/show-stats";
import { UserData } from '../../global/interfaces/user-data';

@Component({
  selector: 'app-player-stats',
  imports: [ShowStats],
  templateUrl: './player-stats.html',
  styleUrl: './player-stats.css'
})
export class PlayerStats {
  @Input({required:true})
  user_data!:UserData;
}
