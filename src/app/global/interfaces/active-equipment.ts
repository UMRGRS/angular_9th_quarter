import { EquipmentData } from "./equipment-data";

export interface ActiveEquipment {
    weapon: EquipmentData|null,
    armor: EquipmentData|null,
    accessory_one: EquipmentData|null,
    accessory_two: EquipmentData|null,
}
