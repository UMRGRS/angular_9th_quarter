import { Component, Input, OnInit } from '@angular/core';
import { CalculatorInputs } from "./calculator-inputs/calculator-inputs";
import { EnemyInfo } from "./enemy-info/enemy-info";
import { CalculatorResult } from "./calculator-result/calculator-result";
import { UserData } from '../global/interfaces/user-data';
import { ActiveEquipment } from '../global/interfaces/active-equipment';
import { EnemiesData } from '../global/interfaces/enemies-data';
import { StrengthScalingTable } from './scaling_tables/strength_scaling_table';
import { DexterityScalingTable } from './scaling_tables/dexterity_scaling_table';
import { IntelligenceScalingTable } from './scaling_tables/intelligence_scaling_table';
import { FaithScalingTable } from './scaling_tables/faith_scaling_table';
import { MonsterArmorScalingTable } from './scaling_tables/monster_armor_scaling_table';
import { EnemyRepository } from '../global/data/services/enemy-repository';
import { EquipmentData } from '../global/interfaces/equipment-data';
import { EquipmentRepository } from '../global/data/services/equipment-repository';
import { EquipmentType } from '../global/enums/equipment-type';

@Component({
  selector: 'app-damage-calculator',
  imports: [CalculatorInputs, EnemyInfo, CalculatorResult],
  templateUrl: './damage-calculator.html',
  styleUrl: './damage-calculator.css'
})
export class DamageCalculator implements OnInit{

  constructor(private enemy_repo:EnemyRepository, private equipment_repo:EquipmentRepository){}
  
  load_complete:Boolean = false;

  //Defaults
  @Input({required:true})
  player_data!:UserData;

  @Input({required:true})
  equipment_data!:ActiveEquipment;
  
  //Options
  enemies_options!:Array<EnemiesData>;
  weapon_options!:Array<EquipmentData>;
  armor_options!:Array<EquipmentData>;
  accessory_one_options!:Array<EquipmentData>;
  accessory_two_options!:Array<EquipmentData>;
  
  //Calculator variables
  equipment!:ActiveEquipment;
  enemy!:EnemiesData;
  total_damage:number = 0;

  async ngOnInit():Promise<void> {
    this.equipment = {...this.equipment_data};

    const [queried_enemies, queried_weapon_options, queried_armor_options, queried_acc_1_options, queried_acc_2_options] = 
          await Promise.all([
            this.enemy_repo.getEnemiesList(),
            this.equipment_repo.getEquipmentList(EquipmentType.WEAPON), 
            this.equipment_repo.getEquipmentList(EquipmentType.ARMOR), 
            this.equipment_repo.getEquipmentList(EquipmentType.ACC_1), 
            this.equipment_repo.getEquipmentList(EquipmentType.ACC_2)]
          );
    this.enemies_options = queried_enemies ?? [];      
    this.weapon_options = queried_weapon_options ?? [];
    this.armor_options = queried_armor_options ?? [];
    this.accessory_one_options = queried_acc_1_options ?? [];
    this.accessory_two_options = queried_acc_2_options ?? [];
    
    this.enemy = this.enemies_options[0];

    const lists = [
      this.enemies_options,
      this.weapon_options,
      this.armor_options,
      this.accessory_one_options,
      this.accessory_two_options,
    ];

    this.load_complete = this.equipment && lists.every((x) => x.length > 0);
  }

  applyDamageFormula(){
    const strength_mod = this.equipment.weapon?.strength_scaling ?? 0 * StrengthScalingTable.getValue(this.player_data.strength);
    const bonus_strength_damage = this.equipment.weapon?.base_damage ?? 0 * strength_mod;

    const dexterity_mod = this.equipment.weapon?.dexterity_scaling ?? 0 * DexterityScalingTable.getValue(this.player_data.dexterity);
    const bonus_dexterity_damage = this.equipment.weapon?.base_damage ?? 0 * dexterity_mod;

    const intelligence_mod = this.equipment.weapon?.dexterity_scaling ?? 0 * IntelligenceScalingTable.getValue(this.player_data.intelligence);
    const bonus_intelligence_damage = this.equipment.weapon?.base_damage ?? 0 * intelligence_mod;
    
    const faith_mod = this.equipment.weapon?.dexterity_scaling ?? 0 * FaithScalingTable.getValue(this.player_data.fait);
    const bonus_faith_damage = this.equipment.weapon?.base_damage ?? 0 * faith_mod;

    const raw_damage = this.equipment.weapon?.base_damage ?? 0 + 
                        bonus_strength_damage + 
                        bonus_dexterity_damage + 
                        bonus_intelligence_damage + 
                        bonus_faith_damage;

    this.total_damage = raw_damage - (raw_damage * MonsterArmorScalingTable.getValue(this.enemy.armor ?? 0));
  }

  clearCalculator(){
    this.total_damage = 0;
    this.equipment = this.equipment_data;
    this.enemy = this.enemies_options[0];
  }
  
  onDefaultEquipmentOptionsChange($event: ActiveEquipment):void{
    this.equipment = $event;
  }

  onSelectedEnemyChange($event: EnemiesData):void{
    this.enemy = $event;
  }
}
