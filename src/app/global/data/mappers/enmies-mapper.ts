import { DocumentData, DocumentSnapshot } from "@angular/fire/firestore";
import { EnemiesData } from "../../interfaces/enemies-data";

export class EnemiesMapper {
    static fromFirestore(document: DocumentSnapshot<DocumentData>):EnemiesData {
      return {
        uid: document.id,
        ...document.data()
      } as EnemiesData;
    }
}