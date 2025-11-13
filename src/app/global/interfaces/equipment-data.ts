import { BaseOption } from "./base-option";

export interface EquipmentData extends BaseOption{
    type?:string
    armor?: string
    base_damage?:number
    strength_scaling?:number
    dexterity_scaling?:number
    intelligence_scaling?:number
    fait_scaling?:number
    damage_multiplier?:number
}
