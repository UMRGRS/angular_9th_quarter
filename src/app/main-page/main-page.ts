import { Component } from '@angular/core';
import { PlayerAvatar } from "./player-avatar/player-avatar";
import { PlayerItems } from "./player-items/player-items";
import { PlayerStats } from "./player-stats/player-stats";

@Component({
  selector: 'app-main-page',
  imports: [PlayerAvatar, PlayerItems, PlayerStats],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage {

}
