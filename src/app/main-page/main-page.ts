import { Component } from '@angular/core';
import { PlayerAvatar } from "./player-avatar/player-avatar";
import { PlayerItems } from "./player-items/player-items";

@Component({
  selector: 'app-main-page',
  imports: [PlayerAvatar, PlayerItems],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage {

}
