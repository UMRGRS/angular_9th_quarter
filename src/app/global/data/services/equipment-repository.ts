import { Injectable, NgZone } from '@angular/core';
import { EquipmentType } from '../../enums/equipment-type';
import { EquipmentData } from '../../interfaces/equipment-data';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, DocumentReference, getDoc, getDocs, orderBy, query, where, documentId } from 'firebase/firestore';
import { EquipmentMapper } from '../mappers/equipment-mapper';
import { ActiveEquipment } from '../../interfaces/active-equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentRepository {
  constructor(private firestore: Firestore, private ngZone:NgZone) {}

  public async getEquipment(uid:string):Promise<EquipmentData|null>{
    const equipment_ref = doc(this.firestore, 'equipment', uid);
    
    const equipment_snapshot = await this.ngZone.runOutsideAngular(() => getDoc(equipment_ref));

    return !equipment_snapshot.exists() ? null : EquipmentMapper.fromFirestore(equipment_snapshot);
  }

  public async getEquipmentList(type:EquipmentType):Promise<Array<EquipmentData>|null>{
    const q = query(
      collection(this.firestore, 'equipment'), 
      where("type", "==", type),
      orderBy("name")
    );

    const query_snapshot = await this.ngZone.runOutsideAngular(() => getDocs(q));
    
    return query_snapshot.empty ? null : query_snapshot.docs.map(EquipmentMapper.fromFirestore);
  }

  public async getUserEquipment(refs:Array<DocumentReference|undefined>):Promise<ActiveEquipment|null>{
    const ids = refs
     .filter((ref): ref is DocumentReference => ref !== undefined)
     .map(ref => ref.id);

    if(ids.length == 0) return null;

    const q = query(
      collection(this.firestore, 'equipment'), 
      where(documentId(), 'in', ids)
    );

    const query_snapshot = await this.ngZone.runOutsideAngular(() => getDocs(q));

    return query_snapshot.empty ? EquipmentMapper.fromFirestoreList([]) : EquipmentMapper.fromFirestoreList(query_snapshot.docs);
  }
}
