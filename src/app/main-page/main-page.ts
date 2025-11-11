import { Component, OnInit } from '@angular/core';
import { PlayerAvatar } from "./player-avatar/player-avatar";
import { PlayerItems } from "./player-items/player-items";
import { PlayerStats } from "./player-stats/player-stats";
import { DamageCalculator } from "../damage-calculator/damage-calculator";
import { UserRepository } from '../global/data/services/user-repository';
import { UserData } from '../global/interfaces/user-data';
import { EquipmentRepository } from '../global/data/services/equipment-repository';

@Component({
  selector: 'app-main-page',
  imports: [PlayerAvatar, PlayerItems, PlayerStats, DamageCalculator],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage implements OnInit{
user_data: any;
  constructor(private user_repo:UserRepository, private equipment_repo:EquipmentRepository){}

  user:UserData | null = null;


  async ngOnInit(){
    this.user = await this.user_repo.getUser("Mizuki");

    var user_equipment = await this.equipment_repo.getUserEquipment([this.user?.weapon, this.user?.armor, this.user?.accessory_one, this.user?.accessory_two]);
  }
}
