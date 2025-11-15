import { Component } from '@angular/core';
import { ShowStats } from "../show-stats/show-stats";

@Component({
  selector: 'app-player-stats',
  imports: [ShowStats],
  templateUrl: './player-stats.html',
  styleUrl: './player-stats.css'
})
export class PlayerStats {

}
