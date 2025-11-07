import { Injectable } from '@angular/core';
import { EquipmentType } from '../../enums/equipment-type';
import { EquipmentData } from '../../interfaces/equipment-data';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore';
import { EquipmentMapper } from '../mappers/equipment-mapper';

@Injectable({
  providedIn: 'root'
})
export class EquipmentRepository {
  constructor(private firestore: Firestore) {}

  public async getEquipment(uid:string):Promise<EquipmentData|null>{
    const equipment_ref = doc(this.firestore, 'equipment', uid);
    
    const equipment_snapshot = await getDoc(equipment_ref);

    return !equipment_snapshot.exists() ? null : EquipmentMapper.fromFirestore(equipment_snapshot);
  }

  public async getEquipmentList(type:EquipmentType):Promise<Array<EquipmentData>|null>{
    const q = query(
      collection(this.firestore, 'equipment'), 
      where("type", "==", type.toString()),
      orderBy("name")
    );

    const query_snapshot = await getDocs(q);
    
    return query_snapshot.empty ? null : query_snapshot.docs.map(EquipmentMapper.fromFirestore);
  }
}
