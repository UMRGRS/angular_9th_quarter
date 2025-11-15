import { Component, OnInit } from '@angular/core';
import { PlayerAvatar } from "./player-avatar/player-avatar";
import { PlayerItems } from "./player-items/player-items";
import { PlayerStats } from "./player-stats/player-stats";
import { DamageCalculator } from "../damage-calculator/damage-calculator";
import { UserData } from '../global/interfaces/user-data';
import { ActiveEquipment } from '../global/interfaces/active-equipment';
import { SharedData } from '../global/services/shared-data';

@Component({
  selector: 'app-main-page',
  imports: [PlayerAvatar, PlayerItems, PlayerStats, DamageCalculator],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage implements OnInit{
  constructor(private shared_data:SharedData){}

  user!:UserData;

  equipment!:ActiveEquipment;

  ngOnInit(): void {
    const data = this.shared_data.getData();
    this.user = data?.user!;
    this.equipment = data?.equipment!;
  }
}

