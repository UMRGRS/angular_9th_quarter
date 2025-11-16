import { DocumentData, DocumentSnapshot } from "@angular/fire/firestore";
import { EquipmentData } from "../../interfaces/equipment-data";
import { ActiveEquipment } from "../../interfaces/active-equipment";
import { EquipmentType } from "../../enums/equipment-type";

export class EquipmentMapper {
    static fromFirestore(document: DocumentSnapshot<DocumentData>):EquipmentData {
      return {
        uid: document.id,
        ...document.data()
      } as EquipmentData;
    }

    static fromFirestoreList(documents: Array<DocumentSnapshot<DocumentData>>):ActiveEquipment {
      const mapped_documents = documents.map(EquipmentMapper.fromFirestore);
      
      return {
        weapon: mapped_documents.find((element) => element.type == EquipmentType.WEAPON),
        armor: mapped_documents.find((element) => element.type == EquipmentType.ARMOR),
        accessory_one: mapped_documents.find((element) => element.type == EquipmentType.ACC_1),
        accessory_two: mapped_documents.find((element) => element.type == EquipmentType.ACC_2),
      } as ActiveEquipment;
    }
}