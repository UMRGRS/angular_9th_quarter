import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DropdownSelector } from "../dropdown-selector/dropdown-selector";
import { BaseOption } from '../../global/interfaces/base-option';
import { ActiveEquipment } from '../../global/interfaces/active-equipment';
import { EquipmentRepository } from '../../global/data/services/equipment-repository';
import { EquipmentData } from '../../global/interfaces/equipment-data';
import { EquipmentType } from '../../global/enums/equipment-type';

@Component({
  selector: 'app-calculator-inputs',
  imports: [DropdownSelector],
  templateUrl: './calculator-inputs.html',
  styleUrl: './calculator-inputs.css'
})
export class CalculatorInputs implements OnInit{
  constructor(private equipment_repo:EquipmentRepository){}
  
  @Input({required:true})
  default_options!:ActiveEquipment;

  @Output() defaultOptionsChange = new EventEmitter<ActiveEquipment>();

  weapon_options!:Array<EquipmentData>;
  armor_options!:Array<EquipmentData>;
  accessory_one_options!:Array<EquipmentData>;
  accessory_two_options!:Array<EquipmentData>;

  async ngOnInit() {
    const queried_weapon_options = await this.equipment_repo.getEquipmentList(EquipmentType.WEAPON);
    this.weapon_options = queried_weapon_options ?? [];
    
    const queried_armor_options = await this.equipment_repo.getEquipmentList(EquipmentType.ARMOR);
    this.armor_options = queried_armor_options ?? [];

    const queried_acc_1_options = await this.equipment_repo.getEquipmentList(EquipmentType.ACC_1);
    this.accessory_one_options = queried_acc_1_options ?? [];

    const queried_acc_2_options = await this.equipment_repo.getEquipmentList(EquipmentType.ACC_2);
    this.accessory_two_options = queried_acc_2_options ?? [];
  }

  selected_option: BaseOption | null = null;

  onOptionSelected(value: BaseOption) {
    // Make here system to pass value to parent correctly
    this.selected_option = value;
  }
}
