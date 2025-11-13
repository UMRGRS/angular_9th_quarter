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

  changed_options!:ActiveEquipment;

  weapon_options!:Array<EquipmentData>;
  armor_options!:Array<EquipmentData>;
  accessory_one_options!:Array<EquipmentData>;
  accessory_two_options!:Array<EquipmentData>;

  async ngOnInit() {
    this.changed_options = {...this.default_options};

    const [queried_weapon_options, queried_armor_options, queried_acc_1_options, queried_acc_2_options] = 
      await Promise.all([
          this.equipment_repo.getEquipmentList(EquipmentType.WEAPON), 
          this.equipment_repo.getEquipmentList(EquipmentType.ARMOR), 
          this.equipment_repo.getEquipmentList(EquipmentType.ACC_1), 
          this.equipment_repo.getEquipmentList(EquipmentType.ACC_2)]);

    this.weapon_options = queried_weapon_options ?? [];
    this.armor_options = queried_armor_options ?? [];
    this.accessory_one_options = queried_acc_1_options ?? [];
    this.accessory_two_options = queried_acc_2_options ?? [];
  }

  onOptionSelected<T extends BaseOption>(value: T) {
    const equipment = value as EquipmentData;
    switch(equipment.type){
      case EquipmentType.WEAPON:{ 
        this.changed_options.weapon = value;
        this.defaultOptionsChange.emit(this.changed_options);
        break;
      }
      case EquipmentType.ARMOR:{ 
        this.changed_options.armor = value;
        this.defaultOptionsChange.emit(this.changed_options);
        break;
      }
      case EquipmentType.ACC_1:{ 
        this.changed_options.accessory_one = value;
        this.defaultOptionsChange.emit(this.changed_options);
        break;
      }
      case EquipmentType.ACC_2:{ 
        this.changed_options.accessory_two = value;
        this.defaultOptionsChange.emit(this.changed_options);
        break;
      }
      default:
        console.log("Incorrect data");
        break;
    }
  }
}
