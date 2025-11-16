import { DocumentData, DocumentSnapshot } from "@angular/fire/firestore";
import { UserData } from "../../interfaces/user-data";

export class UserMapper {
    static fromFirestore(document: DocumentSnapshot<DocumentData>):UserData {
        return {
          uid: document.id,
          ...document.data()
        } as UserData;
    }
}