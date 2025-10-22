import { Component } from '@angular/core';
import { StatsProgressBar } from "../stats-progress-bar/stats-progress-bar";

@Component({
  selector: 'app-player-stats',
  imports: [StatsProgressBar],
  templateUrl: './player-stats.html',
  styleUrl: './player-stats.css'
})
export class PlayerStats {

}
