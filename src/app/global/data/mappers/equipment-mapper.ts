import { DocumentData, DocumentSnapshot } from "@angular/fire/firestore";
import { EquipmentData } from "../../interfaces/equipment-data";

export class EquipmentMapper {
    static fromFirestore(document: DocumentSnapshot<DocumentData>):EquipmentData {
      return {
        uid: document.id,
        ...document.data()
      } as EquipmentData;
    }
}